import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovielistComponent } from './components/movie/movielist/movielist.component';
import { MoviehotComponent } from './components/movie/moviehot/moviehot.component';
import { MoviehomeComponent } from './components/movie/moviehome/moviehome.component';
import { NovelhomeComponent } from './components/novel/novelhome/novelhome.component';
import { NovellistComponent } from './components/novel/novellist/novellist.component';
import { NovelhotComponent } from './components/novel/novelhot/novelhot.component';
import { MoviedetailsComponent } from './components/movie/moviedetails/moviedetails.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'moviehome',
    component: MoviehomeComponent,
    children: [
      {
        path: 'movielist',
        component: MovielistComponent
      },
      {
        path: 'moviehot',
        component: MoviehotComponent
      },
      {
        path: 'moviedetails/:id',
        component: MoviedetailsComponent
      },
      {
        path: '',
        redirectTo: 'movieList',
        pathMatch: 'full'
      },
      {
        path: '',
        component: MovielistComponent
      }
    ]
  },
  {
    path: 'novel',
    component: MoviehomeComponent,
    children: [
      {
        path: 'novellist',
        component: NovellistComponent
      },
      {
        path: 'novelhot',
        component: NovelhotComponent
      },
      {
        path: '',
        redirectTo: 'novellist',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NovellistComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
