package com.example.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CreateNoteDto {
    @NotBlank
    private String title;
    @NotBlank
    private String content;
}
