import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  title = 'results';
  users: any[] = [];

  constructor(
    protected userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      (data) => {
        // tslint:disable-next-line: no-string-literal
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
