export class URLValidator {

  static readonly YOUTUBE_URL_REGEX = /^https:\/\/www.youtube.com\/watch\?v=/;

  static processYouTubeURL(videoURL: string): string {
    if (!videoURL.match(this.YOUTUBE_URL_REGEX)) {
      return null;
    }

    return videoURL.replace('watch?v=', 'embed/');
  }


}
