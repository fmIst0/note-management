import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const noteSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {
        setNotes: (state, action) => action.payload,
        addNote: (state, action) => [...state, action.payload],
        updateNote: (state, action) => {
            return state.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });
        },
        deleteNote: (state, action) => state.filter(note => note.id !== action.payload),
        setNote: (state, action) => {
            const { id, ...newNote } = action.payload;
            const existingNoteIndex = state.findIndex(note => note.id === id);
            if (existingNoteIndex !== -1) {
                state[existingNoteIndex] = { id, ...newNote };
            } else {
                state.push({ id, ...newNote });
            }
        }
    }
});

export const { setNotes, addNote, updateNote, deleteNote, setNote } = noteSlice.actions;

const API_URL = 'http://localhost:8080/api/notes';

export const fetchNotes = () => async (dispatch) => {
    try {
        const response = await axios.get(API_URL);
        dispatch(setNotes(response.data));
    } catch (error) {
        console.error('Failed to fetch notes:', error);
    }
};

export const fetchNoteById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        dispatch(setNote(response.data));
    } catch (error) {
        console.error(`Failed to fetch note with id ${id}:`, error);
    }
};

export const createNote = (note) => async (dispatch) => {
    try {
        const response = await axios.post(API_URL, note);
        dispatch(addNote(response.data));
    } catch (error) {
        console.error('Failed to create note:', error);
    }
};

export const editNote = (note) => async (dispatch) => {
    try {
        const response = await axios.put(`${API_URL}/${note.id}`, note);
        dispatch(updateNote(response.data));
        dispatch(fetchNotes());
    } catch (error) {
        console.error('Failed to edit note:', error);
    }
};

export const removeNote = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        dispatch(deleteNote(id));
    } catch (error) {
        console.error('Failed to delete note:', error);
    }
};

export default noteSlice.reducer;
