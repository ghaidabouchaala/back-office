import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {GenericService} from "./generic.service";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService {

  constructor(private http: HttpClient) {
    super();
  }
  getAllUsers(): Observable<Array<User>> {
    const url = environment.baseUrl + '/users/all';
    return this.http.get<Array<User>>(url);
  }
  deleteUserById(id) {
    const url = environment.baseUrl + '/users/delete/' + id;
    return this.http.delete(url, id);
  }
}
