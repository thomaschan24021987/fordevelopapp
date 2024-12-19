import { knownFolders, path } from '@nativescript/core';

export class FilePathUtils {
    static getDocumentsPath(): string {
        return knownFolders.documents().path;
    }

    static joinPaths(...paths: string[]): string {
        return path.join(...paths);
    }

    static getFolder(folderName: string): any {
        return knownFolders.documents().getFolder(folderName);
    }

    static getFile(filePath: string): any {
        return knownFolders.documents().getFile(filePath);
    }
}