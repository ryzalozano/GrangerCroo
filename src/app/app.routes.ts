import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./home/home').then(m => m.Home)
  },

  {
    path: 'book-details/:id',
    loadComponent: () =>
      import('./book-details/book-details').then(m => m.BookDetails)
  }

];