package com.example.TestEval.Repository;

import com.example.TestEval.doamin.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.NamedQuery;
import java.util.Optional;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {

    public Student findByRollNo(int rollNo);
}
