import {Routes, Route, Navigate} from 'react-router-dom'
import Home from "../pages/Home"
import Market from "../pages/Market"
import Create from "../pages/Create"
import EditProfile from "../pages/EditProfile"
import NftDetails from "../pages/NftDetails"
import SellerProfile from "../pages/SellerProfile"
import Wallet from "../pages/Wallet"
import Signup from '../components/Signup/Signup'
import Dashboard from '../pages/Dashboard'
import { useContextAPI } from '../components/features/contextapi'

const Routers= () =>{

  const {connectedUser} = useContextAPI()

  console.log({connectedUser});
  return (
    <Routes>
      <Route path='/' element={<Navigate to ='/home'/>}/>
      <Route path='/home' element={<Home/>}/>
      {/* <Route path='/contact' element={<Contact/>}/> */}
      <Route path='/Create' element={<Create/>}/>
      <Route path='/market' element={<Market/>}/>
      <Route path='/edit-profile' element={<EditProfile/>}/>
      <Route path='/sellerProfile' element={<SellerProfile/>}/>
      <Route path='/wallet' element={<Wallet/>}/>
      <Route path='/market/:id' element={<NftDetails/>}/>
      <Route path="/signup" element={connectedUser?.signedUp ? <Navigate to="/dashboard" /> : <Signup/>} />
      <Route path="/dashboard" element={!connectedUser?.signedUp ? <Navigate to="/signup" /> : <Dashboard/>} />
    </Routes>
  )
}

export default Routers