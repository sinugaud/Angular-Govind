import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from './confirmed.validator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registrationForm: FormGroup = new FormGroup({});
  

  constructor(private formBuilder: FormBuilder,private toaster: ToastrService) { }

  ngOnInit() {
    //this.registerService.getAccessToken();
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      middleName: ['', Validators.pattern('[a-zA-Z]+')],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', [Validators.required,Validators.pattern('')]],
      zipcode: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(6)
      , Validators.maxLength(6)]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }, {
      validator: ConfirmedValidator('password', 'confirmPassword')
    });
  }

  showSuccess() {
    this.toaster.success('Success! Your request has been processed successfully.!', 'Waw!');
  }

  onSubmit(){
    if(this.registrationForm.valid){
      //this.reset();
      console.log("form is submited successfuly");
    }else{
      console.log("form is not vaild");
    }
  }

  reset(){
    this.registrationForm.reset();
  }

}

