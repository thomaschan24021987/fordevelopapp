export interface HairColor {
    id: string;
    name: string;
    value: string;
    preview?: string;
}

export const DEFAULT_HAIR_COLORS: HairColor[] = [
    { id: 'black', name: 'Black', value: '#000000' },
    { id: 'brown', name: 'Brown', value: '#8B4513' },
    { id: 'blonde', name: 'Blonde', value: '#FFD700' },
    { id: 'red', name: 'Red', value: '#FF0000' },
    { id: 'gray', name: 'Gray', value: '#808080' }
];