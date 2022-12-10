import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContentComponent } from './content/content.component';
import { EducationComponent } from './education/education.component';
import { UpCounterComponent } from './up-counter/up-counter.component';
import { RAndSComponent } from './r-and-s/r-and-s.component';
import { RecentlyAccComponent } from './recently-acc/recently-acc.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { FourInOneComponent } from './four-in-one/four-in-one.component';
import { ChaptersComponent } from './chapters/chapters.component';



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ContentComponent,
    EducationComponent,
    UpCounterComponent,
    RAndSComponent,
    RecentlyAccComponent,
    SubjectsComponent,
    FourInOneComponent,
    ChaptersComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
