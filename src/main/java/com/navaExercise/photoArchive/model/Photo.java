package com.navaExercise.photoArchive.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Photo {

    @JsonIgnore
    @Id
    @GeneratedValue
    private int id;

    private String name;

    private String madeBy;
}
