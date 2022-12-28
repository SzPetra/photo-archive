package com.navaExercise.photoArchive.service;

import com.navaExercise.photoArchive.model.Photo;
import com.navaExercise.photoArchive.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhotoService {

    PhotoRepository photoRepository;

    @Autowired
    public PhotoService(PhotoRepository photoRepository) {
        this.photoRepository = photoRepository;
    }

    public List<Photo> getAllPhotos() {
        return photoRepository.findAll();
    }

    public void addPhoto(Photo photo) {
        photoRepository.save(photo);
    }

    public void deletePhoto(int id) {
        photoRepository.deleteById(id);
    }
}
