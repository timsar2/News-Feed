import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGurdService } from './core/auth/auth-gurd.service';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'news-feed'
  },
  {
    path: 'news-feed',
    loadChildren: () => import('./features/news/components/news-feed.module').then(m => m.NewsFeedModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/components/users.module').then(m => m.UsersModule),
    // canActivate: [AuthGurdService]
  },
    { path: 'login', loadChildren: () => import('./core/auth/login/login.module').then(m => m.LoginModule) },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
