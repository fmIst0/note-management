package com.example.notemanagement.repository;

import com.example.notemanagement.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
