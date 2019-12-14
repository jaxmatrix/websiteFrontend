import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

import { SubHeadingComponent } from './sub-heading/sub-heading.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, AfterViewInit {


  // Keeping Track of headings

  // Exposing the component in the class
  subHeadingClass = SubHeadingComponent;

  projectSummaryForm;
  @Output() summaryUpdated = new EventEmitter();
  title: string;

  private subHeadingsCount = 1;
  newHeading;

  information: any = [];
  controls: any = [];
  constructor(
  ) {

    // Setting up the form

    // Setting up the dynamic component addition
    // this.addComponent(new SubHeadingComponent('Description', this.projectSummaryForm));

  }



  addField() {
  }

  check(message, value) {
    console.log(message, value);
  }

  addSubSection(newHeading) {
    // Adding form fields
    console.log('Adding New Heading', newHeading);
    if ( this.controls.indexOf(newHeading) !== -1 ) {
      console.log('Element Already Exists', newHeading);
    } else {
      this.controls.push(newHeading);
    }

  }

  removeSection(heading) {
    const existing = this.controls.find((element) => {
      if ( element === heading ) {
        return this.controls.indexOf(element);
      } else {
        return -1;
      }
    });

    this.controls.splice(existing, 1);
  }


  submitProjectSummary() {
    const summary = {
      title : this.title,
      subSections : this.information,
    };

    this.summaryUpdated.emit(summary);
    console.log('Generated Summary', summary);
  }

  updateInformation(information) {
    const existing = this.information.find((element) => {
      return element.heading === information.heading;
    });

    if ( existing === undefined ) {
      this.information.push(information);
    } else {
      existing.desc = information.desc;
    }

    console.log('Existing Element', information , existing, this.information);

  }

  // ANGULAR LIFE CYCLE HOOKS
  ngOnInit() {
    this.addSubSection('Summary');
  }

  ngAfterViewInit() {
  }
}
