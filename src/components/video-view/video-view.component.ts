import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {videoViewStore} from '../../store/video-view-store';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  store = videoViewStore;

  @Input()
  videoURL: SafeUrl;

  @Output()
  bookmarkVideo = new EventEmitter<void>();

  ngOnInit(): void {
  }

}
