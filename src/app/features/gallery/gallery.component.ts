import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtworkService } from '../../core/services/artwork.service';
import { Artwork } from '../../core/models/artwork.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  artworks: Artwork[] = [];
  constructor(private artworkService: ArtworkService) {}
  ngOnInit(): void {
    this.artworkService.getArtworks().subscribe((data) => (this.artworks = data));
  }
}
