import * as actionTypes from './actionTypes';


export const getTweets = () => {
   return {
      type: actionTypes.FETCH_TWEETS
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
            console.log(data.response);
            dispatch(getTweets())
         }).catch(err => {
            console.error(err);
         });
   } 
}