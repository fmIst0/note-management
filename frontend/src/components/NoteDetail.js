import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNoteById} from '../redux/noteSlice';
import './NoteDetail.scss';

const NoteDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNoteById(id));
    }, [id, dispatch]);

    const note = useSelector(state => state.notes.find(note => note.id === parseInt(id)));

    if (!note) return <div>Loading...</div>;

    return (
        <div className="note-detail">
            <h2>{note.title}</h2>
            <p className="note-content">{note.content}</p>
        </div>
    );
};

export default NoteDetail;
