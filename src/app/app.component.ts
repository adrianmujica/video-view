import {Component} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {URLValidator} from '../util/url-validator';
import {videoViewStore} from '../store/video-view-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'video-view';

  videoURL: SafeUrl;

  store = videoViewStore;

  constructor(private sanitizer: DomSanitizer) {
  }

  searchVideo(videoURL: string) {
    if (!videoURL) {
      return;
    }

    const urlProcessed = URLValidator.processYouTubeURL(videoURL);

    if (!urlProcessed) {
      return;
    }

    this.store.addToHistory(videoURL);

    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(urlProcessed);
  }


}
