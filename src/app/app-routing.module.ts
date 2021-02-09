import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AllDetailComponent } from './all-detail/all-detail.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import {TvDetailComponent} from './tv-detail/tv-detail.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'movies', component:MovieComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'people', component:PeopleComponent},
  {path:'people/peopleDetail/:id', component:PeopleDetailComponent},
  {path:'tv', component:TvComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'about', component:AboutComponent},
  {path:'reviews', loadChildren:'./reviews/reviews.module#ReviewsModule'},
  {path:'movies/movieDetail/:id', component:MovieDetailComponent},
  {path:'tv/tvDetail/:id', component:TvDetailComponent},
  {path:'home/allDetail/:mediaType/:id', component:AllDetailComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
