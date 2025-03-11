

import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home"
import ListUsers from "../Pages/ListUsers"
import Testes from "../Pages/Home/Testes"



const router = createBrowserRouter([

        {

            path: "/",
            element: <Home />
        },

        {

            path: "/lista",
            element: <ListUsers />

        },

        {

            path: "/pageteste",
            element: <Testes />


        }


])



export default router







// import { createBrowserRouter } from "react-router-dom"
// import Home from "./Pages/Home"
// import ListUsers from "./Pages/Home/ListUsers"

// const router = createBrowserRouter([    

//         {

//             path: "/",
//             element: <Home />

//         },

//         {

//             path: "/lista",
//             element: <ListUsers />

//         }


// ])


// export default router




// // {
// //     path: "/",
// //     element: <Home />
// // },

// // {

// //     path: "/lista-de-usuarios",
// //     element: <ListUsers />

// // }