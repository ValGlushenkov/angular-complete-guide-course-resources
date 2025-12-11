import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {


  initialInvestment:number = 0;
  exepctedReturn:number = 0;
  annualInvestment:number = 0;
  duration:number = 0;

  onSubmit(){
    console.log('Form submitted');
  }
}
