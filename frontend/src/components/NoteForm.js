import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {createNote, updateNote} from '../redux/noteSlice';
import { useNavigate } from 'react-router-dom';
import './NoteForm.scss';

const NoteForm = ({ isEdit, existingNote }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    const [title, setTitle] = useState(existingNote ? existingNote.title : '');
    const [content, setContent] = useState(existingNote ? existingNote.content : '');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if (isEdit) {
            dispatch(updateNote({ id: existingNote.id, title, content }));
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
