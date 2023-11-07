package com.wanderer.wanderersystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wanderer.wanderersystem.entity.Wanderer;
import com.wanderer.wanderersystem.service.WandererService;

@RestController
@RequestMapping(path = "wanderers")
@CrossOrigin
public class WandererController {
    
    @Autowired
    private WandererService wandererService;

    /* Add a wanderer into the database */
    @PostMapping("/marker")
    public ResponseEntity<Wanderer> addNewWanderer(@RequestBody Wanderer student){
        try{
            Wanderer newStudent = wandererService.addNewWanderer(student);
            return ResponseEntity.status(HttpStatus.OK).body(newStudent);
        } catch(DataIntegrityViolationException e) { 
            System.out.println("\n" + e + "\n");
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    /* Return all wanderers in the database */
    @GetMapping()
    public ResponseEntity<List<Wanderer>> getAllWanderers(){
        List<Wanderer> students = wandererService.getAllWanderers();
        return ResponseEntity.status(HttpStatus.OK).body(students);
    
    }


}
