import * as actionTypes from './actionTypes';

export const fetchTweets = () => {
   return {
      type: actionTypes.FETCH_TWEETS
   }
}

// Add tweet to parameters
export const postTweet = () => {
   return {
      type: actionTypes.POST_TWEET
   }
}