import {action, observable} from 'mobx';

export class VideoViewStore {

  @observable history: string[] = [];
  @observable bookmarks: string[] = [];

  @action addToHistory(videoURL: string) {
    this.history = [...this.history, videoURL];
  }

  @action addToBookmarks(videoURL: string) {
    this.bookmarks = [...this.bookmarks, videoURL];
  }
}

export const videoViewStore = new VideoViewStore();
