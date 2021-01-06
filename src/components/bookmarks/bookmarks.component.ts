import { Component, OnInit } from '@angular/core';
import {videoViewStore} from '../../store/video-view-store';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {


  store = videoViewStore;

  ngOnInit(): void {
  }

}
