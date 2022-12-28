package com.navaExercise.photoArchive.controller;

import com.navaExercise.photoArchive.model.Photo;
import com.navaExercise.photoArchive.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/photo")
public class PhotoController {

    PhotoService photoService;

    @Autowired
    public PhotoController(PhotoService photoService) {
        this.photoService = photoService;
    }

    @GetMapping
    public List<Photo> getAllPhotos() {
        return photoService.getAllPhotos();
    }

    @PostMapping
    public void addPhoto(@RequestBody Photo photo) {
        photoService.addPhoto(photo);
    }

    @DeleteMapping("/{id}")
    public void deletePhoto(@PathVariable("id") int id) {
        photoService.deletePhoto(id);
    }
}
