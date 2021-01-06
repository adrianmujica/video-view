import {action, computed, observable} from 'mobx';

export class VideoViewStore {

  @observable history: string[] = [];
  @observable bookmarks: string[] = [];
  @observable currentVideo: string;

  @action addToHistory(videoURL: string) {
    this.history = [...this.history, videoURL];
  }

  @action setCurrentVideo(videoURL: string) {
    this.currentVideo = videoURL;
  }

  @action bookmarkCurrentVideo() {
    const index = this.bookmarks.indexOf(this.currentVideo);
    if (index > -1) {
    this.bookmarks.splice(index, 1);
    } else {
    this.bookmarks = [...this.bookmarks, this.currentVideo];
    }

  }

  @computed bookmarked(): boolean{
    return this.bookmarks.includes(this.currentVideo);
  }

}

export const videoViewStore = new VideoViewStore();
