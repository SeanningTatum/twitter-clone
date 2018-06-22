import * as actionTypes from './actionTypes';

const login = () => {
   return {
      type: actionTypes.LOGIN
   }
}

export const onSignUp = (user) => {
   return dispatch => {
      fetch("http://localhost:3000/user/signup", {
         method: "POST",
         headers: { "Content-Type": "application/json"},
         body: JSON.stringify({
            email: user.email,
            name: user.name,
            handle: user.handle,
            password: user.password,
         })
      }).then(response => {
         if (response.json().status === 200) {
            dispatch(login());
         }
      });
   }
}
