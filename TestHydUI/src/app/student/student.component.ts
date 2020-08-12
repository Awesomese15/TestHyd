import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student-payload';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  firstname:string;
  lastname:string;
  rollno:number;
  
  constructor(private service : StudentService, private route: ActivatedRoute, private router : Router) { 
    // let id=parseInt(this.route.snapshot.paramMap.get('roll'));

    // console.log("Hi "+id)
    // this.service.getbyRoll(id).subscribe((res)=>{
    //   console.log("Hi2 "+res)
    //   this.student=res;
    //   this.firstname = this.student.firstName;
    //   this.lastname = this.student.lastName;
    //   this.rollno = this.student.rollNumber;
    //   console.log(this.firstname);
     
    // }

    //  );
    
  }
  student: Student;
  studentForm : any;

  
  ngOnInit(): void {
    
    let id=parseInt(this.route.snapshot.paramMap.get('roll'));


    console.log("Hi "+id)
    this.service.getbyRoll(id).subscribe((res : Student)=>{
      console.log("Hi2 "+res)
      this.editStudent(res);
      
 
      console.log(this.firstname);
     
    }

     );

 
  
     this.studentForm=new FormGroup({
      firstName: new FormControl(''),
      lastName : new FormControl( ''),
      rollNumber: new FormControl('')
    });
    
    
 
  }



  studentGet : Student;

  editStudent(student : Student){
    this.studentForm.patchValue({
      firstName: student.firstName,
      lastName : student.lastName,
      rollNumber: student.rollNumber
     })
  }

  onUpdate() {
  
      console.log(this.studentForm.value);


    this.service.updateStudents(this.studentForm.value.rollNumber,this.studentForm.value).subscribe(
      
      res => {
        
        console.log(this.studentForm.value);
        console.log("Before navigate to view");
        this.router.navigate(['/view']);

      }
    )

  }

}
