import {Component, Input, OnInit} from '@angular/core';
import {SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  @Input()
  videoURL: SafeUrl;

  ngOnInit(): void {
  }

}
