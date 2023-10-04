import { signOut } from 'firebase/auth';
import { LOGO } from '../utils/constant'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
    const navigate = useNavigate()
    const user = useSelector(stor => stor.user)
    console.log(user)
    const handleClick = () => {
        signOut(auth).then(() => {
            navigate('/')
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate('/error')
        });

    }
    return (
        <div>
            <div className={!user && 'position-absolute'} >
                <img className='position-relative logo' src={LOGO} width="260" />
                {user &&
                    <p className="float-end p-2 m-5 logout" onClick={handleClick}>   <img alt="" src={user?.photoURL} ></img>Log out user</p>
                }
            </div>

            <div className=''>
                <h1 >{user?.displayName}</h1>
            </div>
        </div>
    )

}

export default Header