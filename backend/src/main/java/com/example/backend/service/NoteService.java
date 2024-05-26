package com.example.backend.service;

import com.example.backend.dto.NoteDto;
import java.util.List;

public interface NoteService {
    List<NoteDto> findAll();

    NoteDto findById(Long id);

    NoteDto createNote(NoteDto noteDto);

    NoteDto updateNote(Long id, NoteDto noteDto);

    void deleteNote(Long id);
}
