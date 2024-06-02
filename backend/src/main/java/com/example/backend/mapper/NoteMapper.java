package com.example.backend.mapper;

import com.example.backend.config.MapperConfig;
import com.example.backend.dto.CreateNoteDto;
import com.example.backend.dto.NoteDto;
import com.example.backend.model.Note;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface NoteMapper {
    CreateNoteDto toCreateDto(Note note);

    NoteDto toReturnDto(Note note);

    Note toModel(CreateNoteDto noteDto);
}
