package com.wanderer.wanderersystem.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Wanderer {
        
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String origin;

    public Wanderer(){
    }


    public Wanderer(String firstName, String lastName, String origin){
        this.firstName = firstName;
        this.lastName = lastName;
        this.origin = origin;
    }

    public Wanderer(Long id, String firstName, String lastName, String origin){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.origin = origin;
    }

    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }

    public String getFirstName(){
        return firstName;
    }
    public void setFirstName(String firstName){
        this.firstName = firstName;
    }

    public String getLastName(){
        return lastName;
    }
    public void setLastName(String lastName){
        this.lastName = lastName;
    }

    public String getOrigin(){
        return origin;
    }
    public void setOrigin(String origin){
        this.origin = origin;
    }

    @Override
    public String toString(){
        return "Wanderer{" +
            "id=" + id +
            ", firstName='" + firstName + '\'' +
            ", lastName='" + lastName + '\'' +
            ", origin='" + origin + '\'' +
            '}';
    }
}
