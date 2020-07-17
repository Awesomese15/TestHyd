import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student-payload';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  firstname:string;
  
  constructor(private service : StudentService, private route: ActivatedRoute) { 
    let id=parseInt(this.route.snapshot.paramMap.get('roll'));

    console.log("Hi "+id)
    this.service.getbyRoll(id).subscribe((res)=>{
      console.log("Hi2 "+res)
      this.student=res;
      this.firstname = this.student.firstName;
     
    }

     );
    
  }
  student : Student;
  
  ngOnInit(): void {
    
 
 
  }
 
  //   studentForm=new FormGroup({
  //   firstName: new FormControl(this.student.firstName),
  //   lastName : new FormControl(this.student.lastName),
  //   rollno: new FormControl(this.student.rollNumber)
  // });

  studentForm=new FormGroup({
    firstName: new FormControl(''),
    lastName : new FormControl(''),
    rollno: new FormControl('')
  });

  studentGet : Student;
  


  onSubmit() {
    // TODO: Use EventEmitter with form value
   // console.warn(this.studentForm.value);

    // this.service.updateStudents(this.studentForm.value, this.studentForm.value.rollno).subscribe(
    //   res=>{
    //     console.log("Updated");

    //   }
    //)

  }

}
