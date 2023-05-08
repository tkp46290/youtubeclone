import auth from '../../firebase'
import firebase from 'firebase/compat/app';
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actionType';

export const login =()=> async dispatch  =>{
try {

dispatch({
  type:LOGIN_REQUEST,
})

  const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

  const result = await auth.signInWithPopup(provider);

  

  const accessToken=result.credential.accessToken;
  const profile={
    name:result.additionalUserInfo.profile.name,
    photoURL:result.additionalUserInfo.profile.picture,
  }


sessionStorage.setItem('access-Token',accessToken);
sessionStorage.setItem('user',JSON.stringify(profile));

  dispatch({
type:LOGIN_SUCCESS,
payload:accessToken,
})

dispatch({
  type:LOAD_PROFILE,
  payload:profile,
  })

  
} catch (error) {
  console.log(error);
  dispatch({
    type:LOGIN_FAIL,
    payload:error.message,
    })
}
}


export const logout=()=> async  dispatch =>{

await auth.signOut();
dispatch({
  type:LOG_OUT,
})

sessionStorage.removeItem('access-Token');
sessionStorage.removeItem('user');
}