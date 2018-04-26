import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewrestComponent } from './newrest/newrest.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EditComponent } from './edit/edit.component';
import { NewreviewComponent } from './newreview/newreview.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'restraunts/new', component: NewrestComponent},
  { path: 'restraunts/edit/:id', component: EditComponent},
  { path: 'write/:id', component: NewreviewComponent},
  { path: 'reviews/:id', component: ReviewsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
