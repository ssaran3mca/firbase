import { signOut } from 'firebase/auth';
import { LOGO } from '../utils/constant'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(stor => stor.user)
    // console.log(user)
    const handleClick = () => {
        signOut(auth).then(() => {
            // navigate('/')
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate('/error')
        });

    }
    useEffect(() => {
        const unsubscription = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate('/browser')
                // ...
            } else {

                dispatch(removeUser());
                navigate('/')
                // User is signed out
                // ...
            }
        });
        return unsubscription;
    }, [])
    return (
        <div className='position-absolute w-100'>
            <div className={!user && 'position-absolute'} >
                <img className='position-relative logo' src={LOGO} width="260" />
                {user &&
                    <p className="float-end p-2 m-5 logout text-white " onClick={handleClick}>   <img alt="" src={user?.photoURL} ></img>Log out user</p>
                }
            </div>

            {/* <div className=''>
                <h1 >{user?.displayName}</h1>
            </div> */}
        </div>
    )

}

export default Header