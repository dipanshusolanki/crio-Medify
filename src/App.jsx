import {
   createBrowserRouter, RouterProvider
} from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import Home from "./components/Home/Home.jsx";
import Hospital from "./components/Hospital/Hospital.jsx";
import Booking from "./components/Booking/Booking.jsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import ThrowError from "./components/ThrowError.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path:"/hospitals",
                element: <Hospital />
            },
            {
                path:"/bookings",
                element: <Booking />
            },
            {
                path:"/doctors",
                element:<ThrowError/>,
                hasErrorBoundary: true,
                errorElement: <ErrorBoundary />
            },
            {
                path:"/medicines",
                element:<ThrowError/>,
                hasErrorBoundary: true,
                errorElement: <ErrorBoundary />
            },
            {
                path:"/surgeries",
                element:<ThrowError/>,
                hasErrorBoundary: true,
                errorElement: <ErrorBoundary />
            },
            {
                path:"/providers",
                element:<ThrowError/>,
                hasErrorBoundary: true,
                errorElement: <ErrorBoundary />
            },
            {
                path:"/facilities",
                element:<ThrowError/>,
                hasErrorBoundary: true,
                errorElement: <ErrorBoundary />
            }
        ]
    }
])


function App(){
    return <RouterProvider router={router}/>
}

export default App;
