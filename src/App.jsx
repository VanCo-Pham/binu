import './App.css'
import { useState, useEffect, useRef } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth'
import Account from './Account'
import AddFarmer from './components/AddFarmer'
import FarmerList from './components/FarmerList'
import HomePage from './components/HomePage'
import ReactDOM from "react-dom/client";
import ErrorPage from "./components/ErrorPage";
import FarmerPage from './components/FarmerPage'
import InputGood from './components/InputGood'
import GiaoGiong from './components/GiaoGiong'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FarmerView from './components/FarmerView'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quanlynd",
    element: <FarmerPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quanlynd/themnongdan",
    element: <AddFarmer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quanlynd/tracuu",
    element: <FarmerView />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quanlynd/nhanhang",
    element: <InputGood />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quanlynd/giaogiong",
    element: <GiaoGiong />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const [session, setSession] = useState(null)
  const ChildRef = useRef();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  function handleRefresh(name) {
    ChildRef.current.getAlert();
  }
  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {/* {!session ? <Auth /> : <Account key={session.user.id} session={session} />} */}
      <RouterProvider basename={process.env.PUBLIC_URL} router={router} />
      {/* <AddFarmer handleRefresh = {handleRefresh}/>
      <FarmerList ref={ChildRef} /> */}
    </div>


  )
}

export default App