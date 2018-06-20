import * as actionTypes from './actionTypes';

export const getTweets = (message) => {

   return {
      type: actionTypes.FETCH_TWEETS,
      message: message
   }
}

export const fetchTweets = () => {
   return dispatch => {
      fetch('http://localhost:3000')
         .then(function(response) {
            return response.json();
         })
         .then((response) => {
            console.log(response.message);
            dispatch(getTweets(response.message))
         })
   }
}

// Add tweet to parameters
export const postTweet = (tweet) => {
   
   return {
      type: actionTypes.POST_TWEET,
      tweet
   }
}