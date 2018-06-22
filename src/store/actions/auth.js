import * as actionTypes from './actionTypes';
import { Signup } from '../../containers/Signup/Signup';

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
            email: this.state.email,
            name: this.state.name,
            handle: this.state.username,
            password: this.state.password,
         }).then(response => {
            if (response.json().status === 200) {
               dispatch(login());
            }
         })
      });
   }
}
