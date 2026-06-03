package com.fittrackpro.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "template_exercises")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TemplateExercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String exerciseName;

    private Integer sets;

    private Integer reps;

    private Double targetWeight;

    private Integer exerciseOrder;

    @ManyToOne
    @JoinColumn(name = "template_id")
    private WorkoutTemplate template;
}