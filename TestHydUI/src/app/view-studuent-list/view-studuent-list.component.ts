import { Component, OnInit } from '@angular/core';
import { Student } from '../student-payload';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-studuent-list',
  templateUrl: './view-studuent-list.component.html',
  styleUrls: ['./view-studuent-list.component.css']
})
export class ViewStuduentListComponent implements OnInit {
  
  student : any;
  students : Student[]=[];

  constructor(private service : StudentService, private route : Router) { 
   

    
  }

  ngOnInit(): void {
    this.service.getStudents().subscribe((items)=>{
      console.log("Here we have got from"+items);
      this.students.push(...items);
   
    }
      
    );

  }

 
  viewAStudent(item){
        console.log("Hello"+ item.rollNumber);
       this.route.navigate(['/update', item.rollNumber]);
    
  }

  addStudent(){
    this.route.navigate(['/add']);
  }

  deleteStudent(id : any){
    this.service.removeStudent(id).subscribe(
      res=>{
        console.log("student deleted");
      }
    );
window.location.reload();
    
  }


  

}
