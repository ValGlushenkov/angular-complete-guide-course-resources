import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment: string | number = '';
  expectedReturn: string | number = '';
  annualInvestment: string | number = '';
  duration: string | number = '';

  private investmentServce = inject(InvestmentService);
  
  onClick(){
    this.investmentServce.calculateInvestmentResults({
      initialInvestment: Number(this.initialInvestment),
      expectedReturn: Number(this.expectedReturn),
      annualInvestment: Number(this.annualInvestment), 
      duration: Number(this.duration)
    }
    );
    
  }
}
