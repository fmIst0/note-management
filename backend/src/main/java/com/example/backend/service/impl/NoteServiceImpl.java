package com.example.backend.service.impl;

import com.example.backend.dto.CreateNoteDto;
import com.example.backend.dto.NoteDto;
import com.example.backend.mapper.NoteMapper;
import com.example.backend.model.Note;
import com.example.backend.repository.NoteRepository;
import com.example.backend.service.NoteService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class NoteServiceImpl implements NoteService {
    private final NoteRepository noteRepository;
    private final NoteMapper noteMapper;

    @Override
    public List<NoteDto> findAll() {
        List<NoteDto> notesDtos = noteRepository.findAll()
                .stream()
                .map(noteMapper::toReturnDto)
                .toList();
        if (notesDtos.isEmpty()) {
            throw new EntityNotFoundException("There are no notes here yet ;(");
        }
        return notesDtos;
    }

    @Override
    public NoteDto findById(Long id) {
        return noteRepository.findById(id)
                .map(noteMapper::toReturnDto)
                .orElseThrow(() -> new EntityNotFoundException("No note with id: " + id));
    }

    @Override
    public CreateNoteDto createNote(CreateNoteDto noteDto) {
        Note newNote = noteMapper.toModel(noteDto);
        return noteMapper.toCreateDto(noteRepository.save(newNote));
    }

    @Override
    public CreateNoteDto updateNote(Long id, CreateNoteDto noteDto) {
        Note noteToUpdate = noteRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No note with id: " + id));
        noteToUpdate.setTitle(noteDto.getTitle());
        noteToUpdate.setContent(noteDto.getContent());
        return noteMapper.toCreateDto(noteRepository.save(noteToUpdate));
    }

    @Override
    public void deleteNote(Long id) {
        Optional<Note> noteDeleted = noteRepository.findById(id);
        if (noteDeleted.isEmpty()) {
            throw new EntityNotFoundException("There is no note to delete ;(");
        }
        noteRepository.deleteById(id);
    }
}
