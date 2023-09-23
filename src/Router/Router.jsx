
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../LayOut/Layout';
import HomePage from '../Pages/HomePage/HomePage';
import BookMark from '../Pages/BookMarkPage/BookMark';
import Login from '../Pages/LoginPage/Login';
import SinglePhone from '../Pages/SinglePhone/SinglePhone';

const myCreateRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/bookmark",
                element: <BookMark></BookMark>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/phone/:id",
                element: <SinglePhone></SinglePhone>,
                loader: () => fetch('phone.json')
            },
        ]
    }
])

export default myCreateRouter;