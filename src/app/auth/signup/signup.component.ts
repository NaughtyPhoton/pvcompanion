import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  roles = [
    {value: 'coach', name: 'a coach!', phrase: 'A good coach can change a game, a great coach can change a life.'},
    {value: 'athlete', name: 'an athlete!', phrase: 'You are your only limit!'},
    {value: 'both', name: 'both a coach and an athlete!', phrase: 'The harder the battle, the sweeter the victory!'},
    ]

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }

}