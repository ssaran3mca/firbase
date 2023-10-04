import { useEffect } from "react";
import Brows from "./Brows"
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () => {
    const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '/browser',
            element: <Brows />
        }
    ]);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                // ...
            } else {

                dispatch(removeUser());
                // User is signed out
                // ...
            }
        });
    }, [])
    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}

export default Body