import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PageNotfoundComponent } from './modules/page-not-found/page-not-found.component';
import { ProfileInsertComponent } from './modules/profile/profile-insert-update/profile-insert-update.component';
import { ProfilesListingComponent } from './modules/profile/profiles-listing/profiles-listing.component';

const routes: Routes = [
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
  { path: 'profile-insert', title: 'Profile Insert', component: ProfileInsertComponent },
  { path: 'profile-update/:profileId', title: 'Profile Update', component: ProfileInsertComponent },
  { path: 'profiles', title: 'Profile', component: ProfilesListingComponent},
  { path: '**', title: '404 Not Found', component: PageNotfoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
