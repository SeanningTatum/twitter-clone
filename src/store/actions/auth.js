import * as actionTypes from './actionTypes';

export const onSignUp = (user) => {
   return dispatch => {
      fetch("http://localhost:3000/user/signup", {
         method: "POST",
         headers: { "Content-Type": "application/json"},
         body: {
            email: user.email,
            name: user.name,
            username: user.username,
            password: user.password,
         }
      })
   }
}
