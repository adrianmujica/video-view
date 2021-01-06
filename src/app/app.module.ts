import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchBarComponent} from '../components/search-bar/search-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VideoViewComponent} from '../components/video-view/video-view.component';
import {MobxAngularModule} from 'mobx-angular';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    MobxAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
