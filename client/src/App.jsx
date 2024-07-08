import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    HomeLayout,
    Landing,
    Error,
    CitySelection,
    VehicleSelection,
    ResultPage,
    Login
} from "./pages";
import { Children } from "react";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index:true,
                element:<Landing/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path: '/cityselection',
                element: <CitySelection />

            },
              {
                path: '/vehicleselection',
                element: <VehicleSelection />

            },
            {
                path:'/result',
                element:<ResultPage/>
            }
        ]
    },





]);

const App = () => {
    return <RouterProvider router={router} />;
};
export default App;