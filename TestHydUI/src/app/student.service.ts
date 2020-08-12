import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Student } from './student-payload';
import { map, catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }
  getStudents(): Observable<any>{
    return this.http.get("http://localhost:9093/student/get");
  } 


  updateStudents(id : number, student : Student){
    console.log("In Service ID is==="+id);
    const body = JSON.stringify(student);
    
    const header = new HttpHeaders().set('Content-Type', 'application/json');
   
    return this.http.put("http://localhost:9093/student/update/"+id, body, {headers : header, responseType: 'text'})
    .pipe(
     catchError(error=>{
        console.log("Error Happened");
        return throwError(error)
      })
    );
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

  addStudent(student : Student){
    const header= new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put("http://localhost:9093/student/save", student, {headers: header, responseType: 'text'})
    .pipe(catchError(
      error=>{
        return throwError;
      }
    ));
  }

  removeStudent(id : any): Observable<any>{
      return this.http.delete("http://localhost:9093/student/delete/"+id)
      .pipe(catchError(
        error=>{
          return throwError;
        }
      ));
  }
}
