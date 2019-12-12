import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  loginForm;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,

  ) {
    this.loginForm = this.formBuilder.group({
      name: new FormControl(),
      password: new FormControl(),
    });

  }

  onSubmit(login) {
    console.log('Login Information', login);
    this.http.post( 'api/login', login).subscribe(
      (response: any) => {
        console.log(response);
      },

      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
