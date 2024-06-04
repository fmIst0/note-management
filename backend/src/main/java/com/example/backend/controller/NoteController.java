package com.example.backend.controller;

import com.example.backend.dto.CreateNoteDto;
import com.example.backend.dto.NoteDto;
import com.example.backend.service.NoteService;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins = "http://localhost:3000")
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
    public CreateNoteDto createNote(@Valid @RequestBody CreateNoteDto noteDto) {
        return noteService.createNote(noteDto);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public CreateNoteDto updateNote(@PathVariable Long id,
                                    @Valid @RequestBody CreateNoteDto noteDto) {
        return noteService.updateNote(id, noteDto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteNote(@PathVariable Long id) {
        noteService.deleteNote(id);
    }
}
