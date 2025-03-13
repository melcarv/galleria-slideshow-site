import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'artwork/:name',
    renderMode: RenderMode.Client // Evita o Prerendering nessa rota
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

