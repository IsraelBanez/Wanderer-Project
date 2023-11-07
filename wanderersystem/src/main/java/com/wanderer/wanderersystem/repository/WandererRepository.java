package com.wanderer.wanderersystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wanderer.wanderersystem.entity.Wanderer;

@Repository
public interface WandererRepository extends JpaRepository<Wanderer, Long>{
    
}
