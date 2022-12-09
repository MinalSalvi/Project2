import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContentComponent } from './content/content.component';
import { EducationComponent } from './education/education.component';
import { UpCounterComponent } from './up-counter/up-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ContentComponent,
    EducationComponent,
    UpCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
