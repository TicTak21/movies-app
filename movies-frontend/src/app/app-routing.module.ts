import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { MovieComponent } from './movie/pages/movie/movie.component';
import { MovieDetailsComponent } from './movie/pages/movie/movie-details/movie-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'movies', component: MovieComponent },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
