package com.example.notemanagement.service;

import com.example.notemanagement.dto.NoteDto;
import java.util.List;

public interface NoteService {
    List<NoteDto> findAll();

    NoteDto findById(Long id);

    NoteDto createNote(NoteDto noteDto);

    NoteDto updateNote(Long id, NoteDto noteDto);

    void deleteNote(Long id);
}
