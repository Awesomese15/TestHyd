import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student-payload';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }
  getStudents(): Observable<any>{
    return this.http.get("http://localhost:9093/student/get");
  } 

  updateStudents(id : number, student : Student):Observable<any>{
    return this.http.put<Student>("http://localhost:9093/student/update/"+id, student);
  }

  // getbyId(id : number){
  //     return this.http.get("http://localhost:9093/student/get/"+{id})
  // }
 s: any;
  getbyRoll(roll : number): Observable<Student>{

    console.log("http://localhost:9093/student/get/"+roll);
    //this.s=this.http.get<Student>("http://localhost:9093/student/get/"+{roll})

    return this.http.get<Student>("http://localhost:9093/student/get/"+roll);
  }
}
