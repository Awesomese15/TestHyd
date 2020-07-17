package com.example.TestEval.service;

import com.example.TestEval.Repository.StudentRepo;
import com.example.TestEval.common.StudentConstants;
import com.example.TestEval.doamin.Student;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit4.SpringRunner;

import javax.validation.constraints.AssertTrue;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RunWith(SpringRunner.class)
public class StudentServiceImplTest {
    @InjectMocks
    private StudentServiceImpl service;
    @Mock
    private StudentRepo repo;



    @Test
    public void saveStudentSave1(){
        Student student1=new Student();
        Student student=new Student();
        student.setFirstName("pkkk");
       Mockito.when(repo.save(Mockito.any())).thenReturn(student1);
       String outout=service.saveStudent(student);
        Assert.assertTrue(outout.equals(StudentConstants.SAVED_SUCCESSFULL));
    }

    @Test
    public void saveStudentSave2(){
        Student student1=new Student();
        Student student=new Student();

        Mockito.when(repo.save(Mockito.any())).thenReturn(student1);
        String outout=service.saveStudent(student);
        Assert.assertTrue(outout.equals(StudentConstants.INVALID_INPUT));
    }

    @Test
    public void getStudentsTest(){
        Student student1=new Student();
        Student student2=new Student();
        Student student3=new Student();
        List<Student>studentList=new ArrayList<>();
        studentList.add(student1);
        studentList.add(student2);
        studentList.add(student3);
        Mockito.when(repo.findAll()).thenReturn(studentList);

        int count =service.getAllStudents().size();
        Assert.assertTrue(count==3);
    }

    @Test
    public void deleteTest(){
        Optional <Student>student=Optional.empty();
        Mockito.when(repo.findById(1)).thenReturn(student);
        String output=service.deleteStudent(1);
        Assert.assertTrue(output==StudentConstants.DELETE_SUCCESSFULL);
    }

    @Test
    public void updateStudentTest(){
        service=Mockito.spy(service);
        Student s1=new Student();
        s1.setFirstName("ABC");
        Mockito.doReturn(s1).when(service).getStudentById(22);
        Student s2=new Student();
        s2.setFirstName("XYZ");
        service.updateStudent(s2, 22);
        Assert.assertTrue(s1.getFirstName().equals("XYZ"));


    }
}
