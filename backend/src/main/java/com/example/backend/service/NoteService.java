package com.example.backend.service;

import com.example.backend.dto.CreateNoteDto;
import com.example.backend.dto.NoteDto;
import java.util.List;

public interface NoteService {
    List<NoteDto> findAll();

    NoteDto findById(Long id);

    NoteDto createNote(CreateNoteDto noteDto);

    NoteDto updateNote(Long id, CreateNoteDto noteDto);

    void deleteNote(Long id);
}
