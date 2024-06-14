import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Home from "./routes/home";
import ErrorPage from './ErrorPage';
import Courses from './routes/courses/courses';
import CoursesDetails from './routes/courses/courses-details';
import "./index.css";
import Blogs from './routes/blogs/blogs';
import BlogDetails from './routes/blogs/blog-details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/:id",
        element: <CoursesDetails />
      },
      {
        path: "blogs",
        element: <Blogs />
      }
      ,
      {
        path: "blogs/:id",
        element: <BlogDetails />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
