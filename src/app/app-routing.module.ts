import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { DashboardComponent } from './admin/dashboard/dashboard.commponent';
import { PagesComponent } from './admin/dashboard/pages/pages.component';
import { PostlistComponent } from './admin/dashboard/posts/postlist/postlist.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { SettingsComponent } from './admin/dashboard/settings/settings.component';
import { HomeComponent } from './admin/home/home.component';

const routes: Routes = [
  {path:"*",component:HomeComponent},
  {

    path: "", component: HomeComponent, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "posts", component: PostsComponent },
      {path:"settings",component:SettingsComponent},  
      {path:"comments",component:CommentsComponent},
      {path:"pages",component:PagesComponent},

      
    ]
  },
  {path:"postlist",component:PostlistComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
