export interface FaceLandmarks {
    positions: {
        x: number;
        y: number;
    }[];
    boundingBox: {
        topLeft: { x: number; y: number };
        bottomRight: { x: number; y: number };
    };
}