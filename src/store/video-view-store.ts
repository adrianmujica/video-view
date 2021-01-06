import {action, makeObservable, observable} from 'mobx';
import {Injectable} from '@angular/core';

export class VideoViewStore {

  @observable history: string[] = [];

  @action addToHistory(videoURL: string) {
    if (this.history.includes(videoURL)) return;

    this.history = [...this.history, videoURL];
  }
}

export const videoViewStore = new VideoViewStore();
