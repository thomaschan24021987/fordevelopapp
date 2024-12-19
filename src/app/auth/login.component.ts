import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { AuthService } from "../services/auth.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
    email: string = "";
    password: string = "";

    constructor(
        private authService: AuthService,
        private routerExtensions: RouterExtensions
    ) {}

    login() {
        this.authService.login(this.email, this.password)
            .then(() => this.routerExtensions.navigate(["/editor"]));
    }

    loginWithGoogle() {
        this.authService.loginWithGoogle()
            .then(() => this.routerExtensions.navigate(["/editor"]));
    }

    loginWithFacebook() {
        this.authService.loginWithFacebook()
            .then(() => this.routerExtensions.navigate(["/editor"]));
    }

    skip() {
        this.routerExtensions.navigate(["/editor"], { 
            clearHistory: true,
            queryParams: { guestMode: true }
        });
    }
}