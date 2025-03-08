import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArtworkService } from '../../core/services/artwork.service';
import { Artwork } from '../../core/models/artwork.model';
import { ImageModalComponent } from '../shared/image-modal/image-modal.component';

@Component({
  selector: 'app-artwork',
  standalone: true,
  imports: [CommonModule, ImageModalComponent],
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {
  @ViewChild('modal') modal!: ImageModalComponent;
  artwork?: Artwork;
  artworks: Artwork[] = [];
  currentIndex: number = 0;

  constructor(private route: ActivatedRoute, private artworkService: ArtworkService) {}

  ngOnInit(): void {
    this.artworkService.getArtworks().subscribe((data) => {
      this.artworks = data;
      this.route.paramMap.subscribe((params) => {
        const name = params.get('name');
        this.currentIndex = this.artworks.findIndex((art) => art.name === name);
        this.artwork = this.artworks[this.currentIndex];
      });
    });
  }

  nextArtwork(): void {
    this.currentIndex = (this.currentIndex + 1) % this.artworks.length;
    this.artwork = this.artworks[this.currentIndex];
  }

  previousArtwork(): void {
    this.currentIndex = (this.currentIndex - 1 + this.artworks.length) % this.artworks.length;
    this.artwork = this.artworks[this.currentIndex];
  }

  openModal(): void {
    this.modal.open();
  }
}