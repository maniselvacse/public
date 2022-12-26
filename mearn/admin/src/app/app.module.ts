import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LeftSideNavComponent } from './layouts/left-side-nav/left-side-nav.component';
import { RightSideNavComponent } from './layouts/right-side-nav/right-side-nav.component';
import { ThemeCustomizerComponent } from './layouts/theme-customizer/theme-customizer.component';
import { PageNotfoundComponent } from './modules/page-not-found/page-not-found.component';
import { ProfileInsertComponent } from './modules/profile/profile-insert-update/profile-insert-update.component';
import { RightSideBottomFloatingNavComponent } from './layouts/right-side-bottom-floating-nav/right-side-bottom-floating-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilesListingComponent } from './modules/profile/profiles-listing/profiles-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LeftSideNavComponent,
    RightSideNavComponent,
    ThemeCustomizerComponent,
    PageNotfoundComponent,
    ProfileInsertComponent,
    RightSideBottomFloatingNavComponent,
    ProfilesListingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
