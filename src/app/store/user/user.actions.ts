import { Type } from '@angular/core'
import { Action } from '@ngrx/store'
import { User, EmailPasswordCredentials } from './user.models'


export enum Types {
    SIGN_IN_EMAIL = '[User] Sign In with email: Start',
    SIGN_IN_EMAIL_SUCCESS = '[User] Sign In with email:Success',
    SIGN_IN_EMAIL_ERROR = '[User] Sign In with email:Error',

    SIGN_UP_EMAIL = '[User] Sign Up with email: Start',
    SIGN_UP_EMAIL_SUCCESS = '[User] Sign Up with email:Success',
    SIGN_UP_EMAIL_ERROR = '[User] Sign Up with email:Error',


    SIGN_OUT_EMAIL = '[User] Sign Out with email: Start',
    SIGN_OUT_EMAIL_SUCCESS = '[User] Sign Out with email:Success',
    SIGN_OUT_EMAIL_ERROR = '[User] Sign Out with email:Error',
}


export class SignInEmail implements Action {
    readonly type: Types.SIGN_IN_EMAIL;
    constructor(public credentials: EmailPasswordCredentials) { }
}
export class SignInEmailSuccess implements Action {
    readonly type: Types.SIGN_IN_EMAIL_SUCCESS;
    constructor(public uid: string, public user: User) { }
}
export class SignInEmailError implements Action {
    readonly type: Types.SIGN_IN_EMAIL_ERROR;
    constructor(public error: string) { }
}





export class SignUpEmail implements Action {
    readonly type: Types.SIGN_UP_EMAIL;
    constructor(public credentials: EmailPasswordCredentials) { }
}
export class SignUpEmailSuccess implements Action {
    readonly type: Types.SIGN_UP_EMAIL_SUCCESS;
    constructor(public uid: string) { }
}
export class SignUpEmailError implements Action {
    readonly type: Types.SIGN_UP_EMAIL_ERROR;
    constructor(public error: string) { }
}




export class SignOutEmail implements Action {
    readonly type: Types.SIGN_OUT_EMAIL;
    constructor() { }
}
export class SignOutEmailSuccess implements Action {
    readonly type: Types.SIGN_OUT_EMAIL_SUCCESS;
    constructor() { }
}
export class SignOutEmailError implements Action {
    readonly type: Types.SIGN_OUT_EMAIL_ERROR;
    constructor(public error: string) { }
}


export type All =
    SignInEmail
    | SignInEmailSuccess
    | SignInEmailError
    | SignUpEmail
    | SignUpEmailSuccess
    | SignUpEmailError
    | SignOutEmail
    | SignOutEmailError
    | SignOutEmailSuccess;