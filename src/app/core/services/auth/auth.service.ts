import { Injectable } from '@angular/core';
import { firebase } from '@nativescript/firebase';
import { AuthProvider } from '../../models/auth.model';
import { User } from '../../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUser: User | null = null;

    async login(email: string, password: string): Promise<User> {
        try {
            const result = await firebase.login({
                type: firebase.LoginType.PASSWORD,
                email,
                password
            });
            this.currentUser = this.mapFirebaseUser(result);
            return this.currentUser;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    async loginWithProvider(provider: AuthProvider): Promise<User> {
        try {
            const result = await firebase.login({
                type: provider === AuthProvider.GOOGLE 
                    ? firebase.LoginType.GOOGLE 
                    : firebase.LoginType.FACEBOOK
            });
            this.currentUser = this.mapFirebaseUser(result);
            return this.currentUser;
        } catch (error) {
            console.error(`${provider} login error:`, error);
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

    async logout(): Promise<void> {
        try {
            await firebase.logout();
            this.currentUser = null;
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    }

    private mapFirebaseUser(firebaseUser: any): User {
        return {
            id: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL
        };
    }
}