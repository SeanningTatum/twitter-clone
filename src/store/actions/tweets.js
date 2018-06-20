import * as actionTypes from './actionTypes';


export const getTweets = (tweets) => {
   return {
      type: actionTypes.FETCH_TWEETS,
      tweets
   }
}

// Add tweet to parameters
export const postTweet = (tweet) => {  
   return {
      type: actionTypes.POST_TWEET,
      tweet
   }
}

export const fetchTweets = () => {
   return dispatch => {
      fetch("http://localhost:3000/")
         .then(response => response.json())
         .then(data => {
            const tweets = data.response;
            dispatch(getTweets(tweets));
         }).catch(err => {
            console.error(err);
         });
   } 
}