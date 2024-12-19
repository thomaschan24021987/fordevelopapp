export class ValidationUtils {
    static isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static isValidImageFormat(fileName: string): boolean {
        const validFormats = ['.jpg', '.jpeg', '.png'];
        return validFormats.some(format => fileName.toLowerCase().endsWith(format));
    }
}