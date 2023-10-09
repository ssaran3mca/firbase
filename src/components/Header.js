import { signOut } from 'firebase/auth';
import { LOGO, MULTI_LANGUAGE } from '../utils/constant'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from '../utils/gptSlice';
import { chnageLanguages } from '../utils/configSlice';
const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(stor => stor.user)

    const handleClick = () => {
        signOut(auth).then(() => {
            // navigate('/')
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate('/error')
        });

    }

    // const {slectLag, setSelectLag} = useState("")
    const handleClickGpt = () => {
        dispatch(toggleGptSearchView())
    }
    const handleChange = (e) => {
        dispatch(chnageLanguages(e.target.value))
    }
    const showGptSearch = useSelector(stor => stor.gpt.showGptSearch);
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
        <div className='position-absolute w-100 header'>
            <div className={!user && 'position-absolute'} >
                <img className='position-relative logo' src={LOGO} width="260" />
                {user &&
                    <div className="float-end logout">
                        {showGptSearch && <select className=" btn btn-light mx-1" aria-label="Default select example" onChange={handleChange}>
                            {MULTI_LANGUAGE.map((langu) => (
                                <option key={langu.identifier} value={langu.identifier}>{langu.name}</option>
                            ))}
                        </select>}

                        <button type="button" className="btn btn-info mx-5" onClick={handleClickGpt}>{
                            showGptSearch ? "Home Page" : "GO to GPT Search"
                        }</button>
                        <img alt="" src={user?.photoURL} ></img>
                        <span onClick={handleClick} className="p-2 m-5  text-white ">Log out user</span></div>
                }
            </div>


        </div>
    )

}

export default Header