import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output()
  searchVideo = new EventEmitter<string>();
  videoURL = new FormControl();

  ngOnInit(): void {
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchVideo.emit(this.videoURL.value.trim());
    }
  }

}
