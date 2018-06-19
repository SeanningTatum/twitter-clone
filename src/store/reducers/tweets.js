const initState = {
   tweets: [
      {
         name: "Sean Urgel",
         handlerName: "@mrseanurgel",
         message: "Making a project to impress employers hehe please accept me",
         date: '10/10/1998'
      }
   ],
   addTweetInput: true
}

const reducer = (state = initState, action) => {
   switch (action.type) {
      case "FETCH_TWEETS": return {...state, tweets: [1,2]}
      default: return state;
   }
}

export default reducer;


