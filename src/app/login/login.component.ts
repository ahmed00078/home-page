import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  test : Date = new Date();
    focus: any;
    focus1: any;
    focus2: any;
    constructor() { }

    ngOnInit() {}
}
