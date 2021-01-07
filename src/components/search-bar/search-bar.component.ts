import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {URLValidator} from '../../util/url-validator';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output()
  searchVideo = new EventEmitter<string>();

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      videoURL: new FormControl('',
        [Validators.required, Validators.pattern(URLValidator.YOUTUBE_URL_REGEX)])
    });
  }

}
