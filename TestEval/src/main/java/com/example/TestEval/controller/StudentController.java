package com.example.TestEval.controller;

import com.example.TestEval.common.StudentConstants;
import com.example.TestEval.doamin.Student;
import com.example.TestEval.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/student")
public class StudentController {
    @Autowired
    StudentService studentService;

    @PutMapping("/save")
    public ResponseEntity<String> addMusic(@RequestBody Student student){
        String output=studentService.saveStudent(student);
        if(output.equals(StudentConstants.INVALID_INPUT)){
            return new ResponseEntity<>(output, HttpStatus.BAD_REQUEST);
        }else{
            return  new ResponseEntity<>(output, HttpStatus.OK);
        }
    }


    @GetMapping("/get")
    public ResponseEntity<List<Student>> retrieveAllStudents(){

        List<Student> output=studentService.getAllStudents();
        if(null == output || output.isEmpty()){
            return  new ResponseEntity("Not Found", HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(output, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public  ResponseEntity<String> updateStudent(@RequestBody Student student, @PathVariable int id){
            String output=studentService.updateStudent(student, id);

            if(output.equals(StudentConstants.INVALID_INPUT)){
                return new ResponseEntity<>(output, HttpStatus.BAD_REQUEST);

            }else{
                return  new ResponseEntity<>(output, HttpStatus.OK);
            }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable  int id){
            String output=studentService.deleteStudent(id);
            return new ResponseEntity(output,HttpStatus.OK);
    }

//    @GetMapping("/get/{id}")
//    public ResponseEntity<Student>retrieveStudentById(@PathVariable int id){
//        Student output=studentService.getStudentBySerilId(id);
//        return new ResponseEntity(output, HttpStatus.OK);
//    }

    @GetMapping("/get/{rollNo}")
    public ResponseEntity<Student>retrieveStudentByRollNo(@PathVariable int rollNo){
        Student output=studentService.getStudentById(rollNo);
        return new ResponseEntity(output, HttpStatus.OK);
    }

    }
