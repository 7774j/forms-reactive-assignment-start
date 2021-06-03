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
        'projectName' : new FormControl(null, [Validators.required, this.forbiddenProjectName]),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
        'projectStatus': new FormControl('critical')
      })
    })
  }
  onSubmit() {
    console.log(this.signupForm);
   }
  //  forbiddenNames(control: FormControl): {[s: string]: boolean} {
  //   if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
  //     return {'nameIsForbidden': true};
  //   }
  //   return null;
  // }
  forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'projectNameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}

