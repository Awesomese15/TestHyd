import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student-payload';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private service : StudentService, private router : Router) { }
  studentForm : any;
  ngOnInit(): void {
    this.studentForm=new FormGroup({
      firstName: new FormControl(''),
      lastName : new FormControl( ''),
      rollNumber: new FormControl('')
  });
 
  
}

onAddition(){
  this.service.addStudent(this.studentForm.value).subscribe(
      res=>{
        console.log("response after save"+ res);
        this.router.navigate(['/view']);
      }
  );
}

}
