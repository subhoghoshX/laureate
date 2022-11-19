import create from "zustand";
import { TweetState } from "./types";

export const useTweetStore = create<TweetState>((set) => ({
  tweetInfo: {
    profile_image_url: "/Andrej_400x400.jpg",
    name: "Andrej",
    username: "reactive_dude",
    text: "It's not possible to learn everything.\n\nGreat software engineers are not those who know everything but those who can solve problems and adapt.",
    retweet_count: 51,
    reply_count: 26,
    like_count: 323,
    created_at: "2022-09-12T06:40:30.000Z",
  },
  isMetricsVisible: true,
  isTimestampVisible: false,
  setTweetInfo(callback) {
    set(({ tweetInfo }) => ({ tweetInfo: callback(tweetInfo) }));
  },
  setIsMetricsVisible(callback) {
    set(({ isMetricsVisible }) => ({
      isMetricsVisible: callback(isMetricsVisible),
    }));
  },
  setIsTimestampVisible(callbak) {
    set(({ isTimestampVisible }) => ({
      isTimestampVisible: callbak(isTimestampVisible),
    }));
  },
}));
