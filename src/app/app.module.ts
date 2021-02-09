import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { TvComponent } from './tv/tv.component';
import { MovieComponent } from './movie/movie.component';
import { PeopleComponent } from './people/people.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http'
import { ReviewsModule } from './reviews/reviews.module';
import { SendmessageComponent } from './reviews/sendmessage/sendmessage.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AllDetailComponent } from './all-detail/all-detail.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    TvComponent,
    MovieComponent,
    PeopleComponent,
    ContactsComponent,
    MovieDetailComponent,
    AllDetailComponent,
    PeopleDetailComponent,
    TvDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReviewsModule,
    ReactiveFormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
