import {action, computed, observable} from 'mobx';

export class VideoViewStore {

  @observable history: string[] = [];
  @observable bookmarks: string[] = [];
  @observable currentVideo: string;

  constructor(bookmarks: string[]) {
    this.bookmarks = bookmarks;
  }

  @action addToHistory(videoURL: string) {
    this.history = [...this.history, videoURL];
    localStorage.setItem('history', JSON.stringify(this.history));
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

    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }

  @computed bookmarked(): boolean {
    return this.bookmarks.includes(this.currentVideo);
  }

}

const bookmarksStored = JSON.parse(localStorage.getItem('bookmarks'));
const videoViewStore = new VideoViewStore(!!bookmarksStored ? bookmarksStored : []);

export {videoViewStore};
