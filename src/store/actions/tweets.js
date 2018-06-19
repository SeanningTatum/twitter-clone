import * as actionTypes from './actionTypes';

export const fetchTweets = () => {
   return {
      type: actionTypes.FETCH_TWEETS
   }
}

export const postTweet = (tweet) => {
   return {
      type: actionTypes.POST_TWEET,
      tweet: tweet
   }
}