import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from './Layout'
// import Check from './Components/Check'
// import Contact from './Components/Contact'




import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Hme.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github from './Components/Github/Git.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout/>} >
    <Route path="" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path='contact' element={<Contact />} />
    <Route path='github' element={<Github />} />

    </Route>
    </>
    
  )
)


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<User />} />
//       <Route 
//       loader={githubInfoLoader}
//       path='github' 
//       element={<Github />}
//        />
//     </Route>
//   )
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     < RouterProvider router ={router}/>
  </React.StrictMode>,
)
