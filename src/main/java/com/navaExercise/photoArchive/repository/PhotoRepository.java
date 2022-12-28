package com.navaExercise.photoArchive.repository;

import com.navaExercise.photoArchive.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhotoRepository extends JpaRepository<Photo, Integer> {
}
