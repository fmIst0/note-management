package com.example.notemanagement.mapper;

import com.example.notemanagement.config.MapperConfig;
import com.example.notemanagement.dto.NoteDto;
import com.example.notemanagement.model.Note;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface NoteMapper {
    NoteDto toDto(Note note);

    Note toModel(NoteDto noteDto);
}
