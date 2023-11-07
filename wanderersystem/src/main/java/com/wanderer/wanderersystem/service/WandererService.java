package com.wanderer.wanderersystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wanderer.wanderersystem.entity.Wanderer;
import com.wanderer.wanderersystem.repository.WandererRepository;

@Service
public class WandererService {
        
    private WandererRepository wandererRepository;

    @Autowired
    public WandererService(WandererRepository wandererRepository) {
        this.wandererRepository = wandererRepository;
    }


    public Wanderer addNewWanderer(Wanderer student){
        return wandererRepository.save(student);
    
    }

    public List<Wanderer> getAllWanderers(){
        return wandererRepository.findAll();
    }
}
