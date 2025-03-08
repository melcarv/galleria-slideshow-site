import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artwork } from '../models/artwork.model';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  constructor(private http: HttpClient) {}
  
  getArtworks(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>('assets/data.json');
  }
}