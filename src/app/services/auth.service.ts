import { Injectable } from "@angular/core";
import { firebase } from "@nativescript/firebase";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    async login(email: string, password: string): Promise<void> {
        try {
            await firebase.login({
                type: firebase.LoginType.PASSWORD,
                email,
                password
            });
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    async loginWithGoogle(): Promise<void> {
        try {
            await firebase.login({
                type: firebase.LoginType.GOOGLE
            });
        } catch (error) {
            console.error('Google login error:', error);
            throw error;
        }
    }

    async loginWithFacebook(): Promise<void> {
        try {
            await firebase.login({
                type: firebase.LoginType.FACEBOOK
            });
        } catch (error) {
            console.error('Facebook login error:', error);
            throw error;
        }
    }

    async resetPassword(email: string): Promise<void> {
        try {
            await firebase.resetPassword({
                email: email
            });
        } catch (error) {
            console.error('Password reset error:', error);
            throw error;
        }
    }
}