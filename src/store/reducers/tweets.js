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
   return {
      ...state, 
      tweets: [
         {
            name: "Kyra Lei",
            handlerName: "leideroda",
            message: "Hi, I like art",
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
}

const reducer = (state = initState, action) => {
   switch (action.type) {
      case actionTypes.FETCH_TWEETS: return fetchTweets(state);
      case actionTypes.POST_TWEET: return {
         ...state, 
         tweets: [
            {
               name: "Someone else",
               handlerName: "leideroda",
               message: "Hi, I like art",
               date: '6/30/1998'
            },
         ]
      }
      default: return state;
   }
}

export default reducer;


