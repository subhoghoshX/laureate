export interface TweetState {
  tweetInfo: TweetInfo;
  isMetricsVisible: boolean;
  isTimestampVisible: boolean;
  setTweetInfo: (callback: (tweetInfo: TweetInfo) => TweetInfo) => void;
  setIsMetricsVisible: (
    callback: (isMetricsVisible: boolean) => boolean,
  ) => void;
  setIsTimestampVisible: (
    callback: (isTimestampVisible: boolean) => boolean,
  ) => void;
}

export type TweetInfo = {
  profile_image_url: string;
  name: string;
  username: string;
  text: string;
  retweet_count: number;
  reply_count: number;
  like_count: number;
  created_at: string;
};
