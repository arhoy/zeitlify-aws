import React, { useState, useEffect } from 'react';

import { FaTimes } from 'react-icons/fa';

import { API, graphqlOperation } from 'aws-amplify';

import styled from '@emotion/styled';
import { createNote, deleteNote, updateNote } from '../../../graphql/mutations';
import { listNotes } from '../../../graphql/queries';

const Container = styled.div``;

const TitleContainer = styled.div``;

const Form = styled.form``;

const NoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & li {
    color: ${props => props.theme.colors.primaryDark};
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledX = styled(FaTimes)`
  opacity: 0.7;
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const NoteTaker = () => {
  const [id, setId] = useState();
  const [note, setNote] = useState();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await API.graphql(graphqlOperation(listNotes));
      const notes = results.data.listNotes.items;
      console.log(notes);
      setNotes(notes);
    };

    fetchData();
  }, []);

  // check if note has an id already
  const hasExistingNote = () => {
    if (id) {
      const existingNote = notes.findIndex(note => note.id === id) > -1;
      return existingNote;
    }
    return false;
  };

  // change the note input
  const noteChangeHandler = e => {
    setNote(e.target.value);
  };

  // update the note
  const updateNoteHandler = async e => {
    const result = await API.graphql(
      graphqlOperation(updateNote, {
        input: { id, note },
      }),
    );

    const updatedNote = result.data.updateNote;
    const index = notes.findIndex(note => note.id === updatedNote.id);

    if (index === -1) return;
    console.log('notes', notes);
    let updatedNotes = [...notes];
    console.log('updated notes', updatedNotes);
    updatedNotes[index] = updatedNote;
    // update the notes state
    setNotes(updatedNotes);
  };

  // add note or update note to UI and database
  const addNoteHandler = async e => {
    e.preventDefault();

    // check if we have an existing note, if so update it
    if (hasExistingNote()) {
      updateNoteHandler();
    } else {
      const result = await API.graphql(
        graphqlOperation(createNote, { input: { note } }),
      );
      const newNote = result.data.createNote;
      // update notes
      setNotes([newNote, ...notes]);
    }
    // reset note input
    setNote('');
    setId(null);
  };

  // delete note from UI and database
  const noteDeleteHandler = async id => {
    const result = await API.graphql(
      graphqlOperation(deleteNote, { input: { id } }),
    );
    const deletedNoteId = result.data.deleteNote.id;
    const updatedNotes = notes.filter(note => note.id !== deletedNoteId);
    setNotes(updatedNotes);
  };

  const setNoteHandler = async ({ note, id }) => {
    setNote(note);
    setId(id);
  };

  return (
    <Container>
      <TitleContainer>
        <h2> Welcome to the NoteTaker App</h2>
      </TitleContainer>
      <Form onSubmit={addNoteHandler}>
        <input
          type="text"
          placeholder="write your notes"
          onChange={noteChangeHandler}
          value={note || ''}
        />
        <button type="submit"> {id ? 'Update Note' : 'Add New Note'} </button>
      </Form>

      {notes &&
        notes.length > 0 &&
        notes.map(note => (
          <NoteContainer key={note.id}>
            <li
              onClick={() => {
                setNoteHandler(note);
              }}
            >
              {note.note}
            </li>
            <StyledX
              onClick={() => {
                noteDeleteHandler(note.id);
              }}
            />
          </NoteContainer>
        ))}
    </Container>
  );
};
