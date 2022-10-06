import create from "zustand";
import { TweetState } from "./types";

export const useTweetStore = create<TweetState>((set) => ({
  tweetInfo: {
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1510928172686225411/bTCh20YN_400x400.jpg",
    name: "Andrej",
    username: "reactive_dude",
    text: "It's not possible to learn everything.\n\nGreat software engineers are not those who know everything but those who can solve problems and adapt.",
    retweet_count: 51,
    reply_count: 26,
    like_count: 323,
  },
  setTweetInfo(callback) {
    set(({ tweetInfo }) => ({ tweetInfo: callback(tweetInfo) }));
  },
}));
