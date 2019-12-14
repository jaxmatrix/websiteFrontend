import { Component, Output, EventEmitter } from '@angular/core';
import { Type, Input } from '@angular/core';

@Component({
  selector: 'app-sub-heading',
  templateUrl: './sub-heading.component.html',
  styleUrls: ['./sub-heading.component.scss']
})

export class SubHeadingComponent {
  @Output() update = new EventEmitter();

  @Input() subHeading: string;

  placeholder: string;

  edit = true;
  constructor() {
  }


  setHeading(event: any) {
  }

  submitChanges() {
    this.update.emit({heading: this.subHeading, desc: this.placeholder });
  }

  enableEdit() {
  }



}
