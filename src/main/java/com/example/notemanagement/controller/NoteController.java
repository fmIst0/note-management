package com.example.notemanagement.controller;

import com.example.notemanagement.dto.NoteDto;
import com.example.notemanagement.service.NoteService;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/notes")
public class NoteController {
    private final NoteService noteService;

    @GetMapping
    public List<NoteDto> getAllNotes() {
        return noteService.findAll();
    }

    @GetMapping("/{id}")
    public NoteDto getNoteById(@PathVariable Long id) {
        return noteService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public NoteDto createNote(@Valid @RequestBody NoteDto noteDto) {
        return noteService.createNote(noteDto);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public NoteDto updateNote(@PathVariable Long id,
                              @Valid @RequestBody NoteDto noteDto) {
        return noteService.updateNote(id, noteDto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteNote(@PathVariable Long id) {
        noteService.deleteNote(id);
    }
}
