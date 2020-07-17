package com.example.TestEval.service;

import com.example.TestEval.Repository.StudentRepo;
import com.example.TestEval.common.StudentConstants;
import com.example.TestEval.doamin.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepo studentRepo;

    @Override
    public String saveStudent(Student student) {
        if(student!= null && student.getFirstName()!=null && !student.getFirstName().isEmpty()){
            studentRepo.save(student);
            return StudentConstants.SAVED_SUCCESSFULL;
        }else{
            return StudentConstants.INVALID_INPUT;
        }

    }

    @Override
    public List<Student> getAllStudents() {
       return  studentRepo.findAll();
    }



    @Override
    public String updateStudent(Student student , int rollNo) {
        Student s1=getStudentById(rollNo);
        if(s1 != null){
            s1.setFirstName(student.getFirstName());
            s1.setLastName(student.getLastName());
            s1.setRollNo(student.getRollNo());
            studentRepo.save(s1);
            return StudentConstants.UPDATE_SUCCESSFULL;
        }else{
            return  StudentConstants.INVALID_INPUT;
        }



    }

    @Override
    public String deleteStudent(int id) {
        studentRepo.deleteById(id);
        return StudentConstants.DELETE_SUCCESSFULL;
    }

    public Student getStudentById(int rollNo){
       Student student= studentRepo.findByRollNo(rollNo);
        return studentRepo.findByRollNo(rollNo);
    }

    public Student getStudentBySerilId(int id){
        return   studentRepo.findById(id).get();
    }

}
