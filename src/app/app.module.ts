import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './admin/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { PagesComponent } from './admin/dashboard/pages/pages.component';
import { SettingsComponent } from './admin/dashboard/settings/settings.component';
import { PostlistComponent } from './admin/dashboard/posts/postlist/postlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from './admin/dashboard/posts/postlist/posts.service';
import { DashboardComponent } from './admin/dashboard/dashboard.commponent';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    PostsComponent,
    CommentsComponent,
    PagesComponent,
    SettingsComponent,
    PostlistComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
