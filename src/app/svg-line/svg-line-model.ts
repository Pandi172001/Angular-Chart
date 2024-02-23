export interface Markers{
    "marker":Marker[]
}

export class Marker{
    "markerType":string;
    "markerId":string; 
    "markerName":string;
    "markerPoint": [number, number];
}

export interface Lines{
    lines:{
        lat: number;
        lng: number;
    }[][];
    }