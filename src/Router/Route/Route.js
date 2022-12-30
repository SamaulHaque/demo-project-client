import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../pages/AddTask/AddTask";
import CompletedTask from "../../pages/CompletedTask/CompletedTask";
import Home from "../../pages/Home/Home/Home";
import MyTask from "../../pages/MyTask/MyTask";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-task',
                element: <AddTask></AddTask>
            },
            {
                path: '/my-task',
                element: <MyTask></MyTask>
            },
            {
                path: '/completed-task',
                element: <CompletedTask></CompletedTask>
            }
        ]
    }
])