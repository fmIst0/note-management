import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createNote, editNote, fetchNoteById } from '../redux/noteSlice';
import { useNavigate, useParams } from 'react-router-dom';
import './NoteForm.scss';

const NoteForm = ({ isEdit }) => {
    const { t } = useTranslation();
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const existingNote = useSelector(state => state.notes.find(note => note.id === id));

    const [title, setTitle] = useState(existingNote ? existingNote.title : '');
    const [content, setContent] = useState(existingNote ? existingNote.content : '');

    useEffect(() => {
        if (isEdit && !existingNote) {
            dispatch(fetchNoteById(id));
        }
    }, [dispatch, id, isEdit, existingNote]);

    useEffect(() => {
        if (existingNote) {
            setTitle(existingNote.title);
            setContent(existingNote.content);
        }
    }, [existingNote]);

    const handleSubmit = e => {
        e.preventDefault();
        if (isEdit) {
            dispatch(editNote({ id, title, content }));
        } else {
            dispatch(createNote({ title, content }));
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <div>
                <label>{isEdit ? t('Edit Note') : t('New Note')}</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
            </div>
            <div>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="Content"
                    required
                />
            </div>
            <button type="submit">{isEdit ? t('Update Note') : t('Add Note')}</button>
        </form>
    );
};

export default NoteForm;
