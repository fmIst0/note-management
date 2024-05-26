package com.example.backend.service.impl;

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
        List<NoteDto> noteDtos = noteRepository.findAll()
                .stream()
                .map(noteMapper::toDto)
                .toList();
        if (noteDtos.isEmpty()) {
            throw new EntityNotFoundException("There are no notes here yet ;(");
        }
        return noteDtos;
    }

    @Override
    public NoteDto findById(Long id) {
        return noteRepository.findById(id)
                .map(noteMapper::toDto)
                .orElseThrow(() -> new EntityNotFoundException("No note with id: " + id));
    }

    @Override
    public NoteDto createNote(NoteDto noteDto) {
        Note newNote = noteMapper.toModel(noteDto);
        return noteMapper.toDto(noteRepository.save(newNote));
    }

    @Override
    public NoteDto updateNote(Long id, NoteDto noteDto) {
        Note noteToUpdate = noteRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No note with id: " + id));
        noteToUpdate.setTitle(noteDto.getTitle());
        noteToUpdate.setContent(noteDto.getContent());
        return noteMapper.toDto(noteRepository.save(noteToUpdate));
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
