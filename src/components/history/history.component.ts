import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {videoViewStore} from '../../store/video-view-store';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  store = videoViewStore;

  @Output()
  videoURL = new EventEmitter<string>();

  ngOnInit(): void {
  }

}
