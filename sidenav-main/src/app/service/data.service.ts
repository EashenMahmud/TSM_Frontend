import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  registerUser(data: any){
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUrl+'/api/register',data,{
      headers: headers
    });
  }

  login(data: any){
    return this.http.post(environment.apiUrl+'/api/login',data);
  }

  designationList(){
    return this.http.get(environment.apiUrl+'/api/list-designation');
  }
  
  departmentList(){
    return this.http.get(environment.apiUrl+'/api/list-department');
  }
}
