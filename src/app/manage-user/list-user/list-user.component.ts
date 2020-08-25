import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/user";
import swal from "sweetalert";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
        }
      );
    }
  deleteUser(id) {
    this.userService.deleteUserById(id).subscribe(
      data => {
        this.getUsers();
        swal(" Deleted", "Success", "success");
        });
  }

}
