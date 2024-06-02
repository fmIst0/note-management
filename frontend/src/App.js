import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import NoteDetail from './components/NoteDetail';
import Header from './components/Header';
import './App.scss';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<NoteList />} />
                    <Route path="/create" element={<NoteForm isEdit={false} />} />
                    <Route path="/update/:id" element={<NoteForm isEdit={true} />} />
                    <Route path="/notes/:id" element={<NoteDetail />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
