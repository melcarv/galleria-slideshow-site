import { Routes } from '@angular/router';
import { GalleryComponent } from './features/gallery/gallery.component';
import { ArtworkComponent } from './features/artwork/artwork.component';

export const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'artwork/:name', component: ArtworkComponent }
];