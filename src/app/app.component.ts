import {Component} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {URLValidator} from './util/url-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'video-view';

  videoURL: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  searchVideo(videoURL: string) {
    if (!videoURL) return;

    const urlProcessed = URLValidator.processYouTubeURL(videoURL);

    if (!urlProcessed) return;

    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(urlProcessed);

  }

}
