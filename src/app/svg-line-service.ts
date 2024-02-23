import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface MarkersResponse{
  markers:any[];
  lines:any[];
}

@Injectable({
  providedIn: 'root'
})
export class MarkerService{
  constructor (private http: HttpClient) {}

  getMarkers():Observable<MarkersResponse>{
    return this.http.get<MarkersResponse>('./assets/sample.json');
  }

}

