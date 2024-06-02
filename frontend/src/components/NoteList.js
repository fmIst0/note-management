import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchNotes, removeNote } from "../redux/noteSlice";
import { Link } from "react-router-dom";
import './NoteList.scss';

const NoteList = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes);
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);

    const handleDelete = id => {
        dispatch(removeNote(id));
    };

    return (
        <div>
            <ul className="note-list">
                {notes.map(note => (
                    <li key={note.id} className="note-item">
                        <span>{note.title}</span>
                        <Link to={`/notes/${note.id}`} className="btn btn-success">{t('View')}</Link>
                        <Link to={`/update/${note.id}`} className="btn btn-info">{t('Update')}</Link>
                        <button onClick={() => handleDelete(note.id)} className="btn btn-danger">{t('Delete')}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;