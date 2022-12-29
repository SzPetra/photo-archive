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
@Table(name = "photos")
public class Photo {

    @JsonIgnore
    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;

    private String name;

    private String madeBy;

    @OneToOne(mappedBy = "photo", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private ViewCounter viewCounter;
}
