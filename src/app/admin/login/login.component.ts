import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormDataService} from '../../common/service/form-data.service';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private readonly formBuilder: FormBuilder,
              private readonly formDataService: FormDataService,
              private readonly route: Router) {
    this.loginForm = this.formBuilder.group({
        login: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      })
  }
   async submit() {
    if (!this.loginForm.valid) {
      return
    }
    const admin = this.formDataService.formGroupToFormData(this.loginForm);
    if (admin.get('login') === environment.adminLogin && admin.get('password') === environment.adminPass) {
       environment.isAdmin = true
       await this.route.navigate(['admin/main'])
    }
  }
  ngOnInit() {
  }

}
