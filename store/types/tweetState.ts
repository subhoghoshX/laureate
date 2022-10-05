export interface TweetState {
  tweetInfo: TweetInfo;
  setTweetInfo: (callback: (tweetInfo: TweetInfo) => TweetInfo) => void;
}

export type TweetInfo = {
  profile_image_url: string;
  name: string;
  username: string;
  text: string;
  retweet_count: number;
  reply_count: number;
  like_count: number;
};
