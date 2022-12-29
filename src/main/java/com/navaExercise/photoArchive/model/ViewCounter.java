package com.navaExercise.photoArchive.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ViewCounter {

    @JsonIgnore
    @Id
    @Column(name = "photo_id")
    private int id;

    private int viewCount = 0;

    @OneToOne
    @MapsId
    @JoinColumn(name = "photo_id")
    private Photo photo;
}
