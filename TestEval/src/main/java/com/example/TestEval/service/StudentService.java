package com.example.TestEval.service;

import com.example.TestEval.doamin.Student;

import java.util.List;

public interface StudentService {
    public String saveStudent(Student student);
    public List<Student> getAllStudents();
    public String updateStudent(Student student, int rollNo);
    public String deleteStudent(int id);
    public Student getStudentBySerilId(int id);
    public Student getStudentById(int roll);

}
