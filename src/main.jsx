import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./index.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import FriendDeatils from "./components/FriendDeatais/FriendDeatils";
import Post from "./components/Post/Post";
import SingleCom from "./components/SingleCom/SingleCom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:"/about",
        element:<About></About>
      },
      {
       path:"/contact",
       element:<Contact></Contact>
      },
      {
        path:"friends",
        element:<Friends></Friends>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:"friend/:friendId",
        element:<FriendDeatils></FriendDeatils>,
        loader:({params})=>{
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        }
      },
      {
        path:"posts",
        element:<Post></Post>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:"post/:postId",
        element:<SingleCom></SingleCom>,
        loader:({params})=>{
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        }
        
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);