import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

favoriteSeason: string;
seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor() { }

  ngOnInit() {
  }

  onChangeCkbox(e: MatCheckboxChange, model: NgModel) {
    console.log(e, model);
    if (e.checked) {
      model.control.setValue(e.source.value);
    }
  }

  onSubmit(e: Event, frm: NgForm) {
    console.log(e, frm);
    console.log(frm.value);
  }


}