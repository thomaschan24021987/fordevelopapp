import { knownFolders, path } from "@nativescript/core";

export class FileUtils {
    static getUniqueFileName(baseName: string, extension: string): string {
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2, 8);
        return `${baseName}_${timestamp}_${randomString}.${extension}`;
    }

    static getDocumentsPath(): string {
        return knownFolders.documents().path;
    }

    static joinPaths(...paths: string[]): string {
        return path.join(...paths);
    }
}