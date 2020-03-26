import React, { useState, useEffect } from 'react';

import { FaTimes } from 'react-icons/fa';

import { API, graphqlOperation, Auth } from 'aws-amplify';

import styled from '@emotion/styled';
import { createNote, deleteNote, updateNote } from '../../../graphql/mutations';
import { listNotes } from '../../../graphql/queries';
import {
  onCreateNote,
  onDeleteNote,
  onUpdateNote,
} from '../../../graphql/subscriptions';

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

export const NoteTaker = ({ owner }) => {
  const [id, setId] = useState(null);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const fetchData = async () => {
    const results = await API.graphql(graphqlOperation(listNotes));
    const notes = results.data.listNotes.items;

    setNotes(notes);
  };

  useEffect(() => {
    // grab the notes
    fetchData();
    // create note subscription
    const createNoteListener = API.graphql(
      graphqlOperation(onCreateNote, { owner }),
    ).subscribe({
      next: noteData => {
        const newNote = noteData.value.data.onCreateNote;
        console.log('new note', noteData);
        setNotes(prevNotes => {
          const oldNotes = prevNotes.filter(note => note.id !== newNote.id);
          const updatedNotes = [...oldNotes, newNote];
          return updatedNotes;
        });
        setNote('');
        setId(null);
      },
    });

    // delete note subscription
    const deleteNoteListener = API.graphql(
      graphqlOperation(onDeleteNote, { owner }),
    ).subscribe({
      next: noteData => {
        const deletedNote = noteData.value.data.onDeleteNote;

        setNotes(prevNotes => {
          const updatedNotes = prevNotes.filter(
            note => note.id !== deletedNote.id,
          );
          return updatedNotes;
        });
      },
    });

    // update subscribtion
    const updateNoteListener = API.graphql(
      graphqlOperation(onUpdateNote, { owner }),
    ).subscribe({
      next: noteData => {
        const updateNote = noteData.value.data.onUpdateNote;

        setNotes(prevNotes => {
          const index = prevNotes.findIndex(note => note.id === updateNote.id);
          const updatedNotes = [
            ...prevNotes.slice(0, index),
            updateNote,
            ...prevNotes.slice(index + 1),
          ];
          return updatedNotes;
        });

        setNote('');
        setId(null);
      },
    });

    // unmounting
    return () => {
      createNoteListener.unsubscribe();
      deleteNoteListener.unsubscribe();
      updateNoteListener.unsubscribe();
    };
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
    await API.graphql(graphqlOperation(updateNote, { input: { id, note } }));
  };

  // add note or update note to UI and database
  const addNoteHandler = async e => {
    e.preventDefault();

    // check if we have an existing note, if so update it
    if (hasExistingNote()) {
      updateNoteHandler();
    } else {
      await API.graphql(graphqlOperation(createNote, { input: { note } }));
    }
  };

  // delete note from UI and database
  const noteDeleteHandler = async id => {
    await API.graphql(graphqlOperation(deleteNote, { input: { id } }));
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
