
import Brows from "./Brows"
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {

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

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}

export default Body