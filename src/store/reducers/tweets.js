import * as actionTypes from 'store/actions/actionTypes';

const initState = {
   tweets: [
      {
         name: "Sean Urgel",
         handlerName: "mrseanurgel",
         message: "Making a project to impress employers hehe please accept me",
         date: '10/10/1998'
      }
   ],
   addTweetInput: true
}

const fetchTweets = (state) => {
	fetch('http://localhost:3000', {method: "GET"})
		.then(function(response) {
			return response.json();
		})
		.then((message) => {
			return {
				...state, 
				tweets: [
					{
						name: "Kyra Lei",
						handlerName: "leideroda",
						message: message,
						date: '6/30/1998'
					},
					{
						name: "Sean Urgel",
						handlerName: "mrseanurgel",
						message: "Making a project to impress employers hehe please accept me",
						date: '10/10/1998'
					}
				]
			}
		}).catch((err) => {
			console.error("error");
		});

		
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
      case actionTypes.FETCH_TWEETS: return fetchTweets(state);
      case actionTypes.POST_TWEET: return postTweet(state, action.tweet);
      default: return state;
   }
}

export default reducer;

