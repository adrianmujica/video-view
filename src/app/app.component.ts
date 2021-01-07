import {Component, SecurityContext} from '@angular/core';
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

  constructor(private sanitizer: DomSanitizer) {
  }

  searchVideo(videoURL: string) {
    if (!videoURL) {
      return;
    }

    const safeUrl = this.getSafeURL(videoURL);

    if (!safeUrl) {
      return;
    }

    videoViewStore.addToHistory(videoURL);

    this.videoURL = safeUrl;
  }

  getSafeURL(videoURL: string): SafeUrl {
    const urlProcessed = URLValidator.processYouTubeURL(videoURL);

    if (!urlProcessed) {
      return null;
    }

    videoViewStore.setCurrentVideo(videoURL);

    return this.sanitizer.bypassSecurityTrustResourceUrl(urlProcessed);
  }

  bookmarkCurrentVideo() {
    videoViewStore.bookmarkCurrentVideo();
  }
}
