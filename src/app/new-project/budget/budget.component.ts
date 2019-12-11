import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl , Validator , Validators , NG_VALIDATORS} from '@angular/forms';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  @Input() progress;    //start from here
  constructor() { }

  ngOnInit() {
  }

  signup = new FormGroup({
    excel: new FormControl(null,[Validators.required ])
  })


}

