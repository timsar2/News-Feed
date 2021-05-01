import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'news-feed'
  },
  {
    path: 'news-feed',
    loadChildren: () => import('./features/news/components/news-feed.module').then(m => m.NewsFeedModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/components/users.module').then(m => m.UsersModule)
  },
  {
    path: '**',
    redirectTo: 'news-feed'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
