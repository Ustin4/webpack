import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {Suspense} from "react";
import {LazyAbout} from "@/pages/about/About.lazy";
import {Shop} from "@/pages/shop";
import {App} from "@/commponents/App/App";


const root = document.getElementById('root')

if (!root) {
    throw new Error('rot not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/about',
                element:<Suspense fallback={'Loading...'}><LazyAbout/></Suspense>
            },
            {
                path: '/shop',
                element:<Suspense fallback={'Loading...'}><Shop/></Suspense>
            }
        ]
    }
])

container.render(
    <RouterProvider router={router}/>
)