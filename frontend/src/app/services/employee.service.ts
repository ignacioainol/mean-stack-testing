import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../models/employee';
import { EmployeesComponent } from '../components/employees/employees.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee
  employees : Employee[];
  readonly URL_API = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {
      this.selectedEmployee = new Employee();
   }

  getEmployees(){
    return this.http.get(this.URL_API);
  }

  postEmployee(Employee: Employee){
    return this.http.post(this.URL_API, Employee);
  }

  putEmployee(employee: Employee){
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
