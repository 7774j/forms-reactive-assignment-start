import { Component, OnInit} from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl, Validators, } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  forbiddenProjectNames = ['Test'];
  signupForm: FormGroup;


  constructor (private formBuilder: FormBuilder) {

  }
  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'projectName' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email' : new FormControl(null, [Validators.required, Validators.email])
      })
    })
  }
  onSubmit() {
    console.log(this.signupForm);
   }
   forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
}

