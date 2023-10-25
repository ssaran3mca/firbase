import { useState, useRef } from 'react';
import Header from './Header';
import { checkValiData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { AVATHAR_IMG, IMG_BG } from '../utils/constant';
const Login = () => {
    const [loginDet, setLogIn] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);
    const handleClick = () => {
        setLogIn(!loginDet)
    }
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClickLoginSigin = () => {
        const message = checkValiData(email.current.value, password.current.value)
        // console.log(loginDet);
        seterrorMessage(message)
        if (message) return;
        if (!loginDet) {
            // alert("loginDet")
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    email.current.focus();
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: AVATHAR_IMG
                    }).then(() => {

                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        // navigate('/browser');
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        seterrorMessage(error.message)
                    });
                    // console.log(user);

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage)
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                    // navigate('/browser')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage)
                });

        }
    }

    return (
        <>
            <Header />
            <div className='position-relative login-logout-form'>
                <img src={IMG_BG} />
                <form onSubmit={e => e.preventDefault()} className='position-absolute'>
                    {errorMessage}
                    <h3 className='mb-4 text-center'>{loginDet ? 'Log In' : 'Sign Up'}</h3>
                    {!loginDet && <div className="form-group mb-4">
                        <input type="text" ref={name} className="form-control" placeholder="User Name " />

                    </div>}
                    <div className="form-group mb-4">
                        <input type="email" ref={email} className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group mb-4">
                        <input type="password" ref={password} className="form-control" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3" onClick={handleClickLoginSigin}>{loginDet ? 'Log In' : 'Sign Up'}</button>
                    <div className="form-group mt-2">
                        <label className="form-check-label btn btn-dark mt-3 " for="exampleCheck1" onClick={handleClick}>Netflex<b > {loginDet ? 'Sign Up' : ' Already Log In'} </b>
                        </label>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Login