import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm;
    loading = false;
    submitted = false;
    returnUrl: string;
    error: string;
    constructor(private formBuilder: FormBuilder, public router: Router, private authService: AuthService) {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    ngOnInit() {}

    get f() { return this.loginForm.controls; }

    async onSubmit(credentials) {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        console.log(credentials);

        this.loading = true;
        // const success = true;
        const success = await this.authService.login(credentials);
        if (!success) {
            this.loading = false;
            this.error = 'Invalid credentials';
            return;
        }
        this.router.navigate(['/dashboard', { term: 'term' }]);

    }

    // onLoggedin() {
    //     console.log();
    //     localStorage.setItem('isLoggedin', 'true');
    // }
}
