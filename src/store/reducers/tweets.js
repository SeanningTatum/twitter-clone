import * as actionTypes from 'store/actions/actionTypes';

const initState = {
   tweets: [],
   addTweetInput: true
}

const fetchTweets = (state, tweets) => {
	return {
      ...state,
      tweets: tweets
	} 	
}

const postTweet = (state, tweet) => {
   return {
         ...state, 
         tweets: state.tweets.concat({
            name: "Someone else",
            handlerName: "leideroda",
            message: tweet,
            date: '6/30/1998'
         })
   }   
}

const reducer = (state = initState, action) => {
   switch (action.type) {
      case actionTypes.FETCH_TWEETS: return fetchTweets(state, action.tweets);
      case actionTypes.POST_TWEET: return postTweet(state, action.tweet);
      default: return state;
   }
}

export default reducer;

