import * as actionTypes from './actionTypes';

const getTweets = (tweets) => {
   return {
      type: actionTypes.FETCH_TWEETS,
      tweets
   }
}

const postTweet = (tweet) => {  
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

export const onPostTweet = (tweet) => {
   return dispatch => {
      fetch("http://localhost:3000", {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({message: tweet})
      }).then((response) => {
         console.log(response);
         dispatch(postTweet(tweet));
         fetchTweets();
      })
   }
}

