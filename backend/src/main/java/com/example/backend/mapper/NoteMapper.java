package com.example.backend.mapper;

import com.example.backend.config.MapperConfig;
import com.example.backend.dto.NoteDto;
import com.example.backend.model.Note;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface NoteMapper {
    NoteDto toDto(Note note);

    Note toModel(NoteDto noteDto);
}
