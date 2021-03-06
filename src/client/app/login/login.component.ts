import { Component, ViewContainerRef, ViewChild, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { SharedService } from '../shared/shared.service'; 
import { FormComponent, ButtonComponent, InputComponent } from '../shared/component/index';
import { AppBaseComponent } from '../appbase.component';
import { LoginService } from './login.service';

const CONS: any = {
    validator: {
        userName: {
            required: {
                errorMessage: 'The username is required!'
            }
        },
        email: {
            required: {
                errorMessage: 'The email is required!'
            },
            email: {
                errorMessage: 'It is not email address!'
            }
        },
        password: {
            required: {
                errorMessage: 'The password is required!'
            }
        },
        confirmPassword: {
            required: {
                errorMessage: 'The confirm password is required!'
            },
            equal: {
                field: 'password',
                errorMessage: 'The password and confirm password are not matched!'
            }
        }
    },
    mode: {
        login: {
            type: 'login',
            title: 'Log in to InQnA'
        },
        signup: {
            type: 'signup',
            title: 'Sign up InQna'
        },
        passwordReset: {
            type: 'passwordReset',
            title: 'Send Password Reset Email'
        },
    }
}

@Component({
    selector: 'mc-login',
    moduleId: module.id,
    styleUrls: ['login.component.css'],
    templateUrl: 'login.component.html'
})

export class LoginComponent extends AppBaseComponent {

    mode: string = CONS.mode.login; // login, signup
    validator: any;

    @HostBinding('class.mode__signup') get mode__signup() { return this.mode === 'signup'; }

    @HostListener('click',['$event'])
    onPress(e: any) {
        let dom = this.service.getDom();
        if (dom.findParent(e.target,'.button__login__login')) {
            this.onPressLogin();
        } else if (dom.findParent(e.target,'.button__login__facebook')) {
            this.onPressLoginFacebook();
        } else if (dom.findParent(e.target,'.button__login__google')) {
            this.onPressLoginGoogle();
        } else if (dom.findParent(e.target,'.button__login__forgot-password')) {
            this.onPressForgotPassword();
        } else if (dom.findParent(e.target,'.button__login__sign-up-now')) {
            this.onPressSignUpNow();
        } else if (dom.findParent(e.target,'.button__login__sign-up')) {
            this.onPressSignUp();
        } else if (dom.findParent(e.target,'.button__login__go-login')) {
            this.onPressGoLogin();
        } else if (dom.findParent(e.target,'.button__login__password-reset')) {
            this.onPressPasswordReset();
        }
    }

    @ViewChild('frmLogin') frm: FormComponent;

    @Output() hide: EventEmitter<any> = new EventEmitter();

    constructor(
        protected el: ViewContainerRef,
        protected service: SharedService,
        private _loginService: LoginService
    ) {
        super(el,service);
        this.validator = CONS.validator;
        this._loginService.loggedin.subscribe((e: any) => this.close());
        this._loginService.createduser.subscribe((e: any) => this.onCreatedUser(e));
        this._loginService.resetpassword.subscribe((e: any) => this.onResetPassword(e));
    }

    onPressLogin() {
        if (this.frm.validate()) {
            let values = this.frm.getValues();
            this._loginService.login('email',values.email,values.password,values.rememberMe);
        }
    }

    onPressLoginFacebook() {
        this._loginService.loginFacebook();
    }

    onPressLoginGoogle() {
        this._loginService.loginGoogle();
    }

    onPressForgotPassword() {
        this.changeMode(CONS.mode.passwordReset);
    }

    onPressSignUpNow() {
        this.changeMode(CONS.mode.signup);
    }

    onPressGoLogin() {
        this.changeMode(CONS.mode.login);
    }

    onPressPasswordReset() {
        if (this.frm.validate()) {
            let values = this.frm.getValues();
            this._loginService.sendPasswordResetEmail(values.email);
        }
    }

    onResetPassword(e: any) {
        this.changeMode(CONS.mode.login);
    }

    changeMode(mode: any) {
        this.mode = mode;
    }

    onPressSignUp() {
        if (this.frm.validate()) {
            let values = this.frm.getValues();
            this._loginService.createUser(values.userName, values.email, values.password);
        }
    }

    onCreatedUser(e: any) {
        this.changeMode('login');
    }

    onValueChange(value: any) {}

    close() {
        this.hide.emit({target:this});
    }
}
