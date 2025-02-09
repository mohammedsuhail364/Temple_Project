import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Festivals from './pages/Festivals'
import Location from './pages/Location'
import Prebooking from './pages/Prebooking'
import Booking from './pages/Booking'
import Feedback from './pages/Feedback'
import Announcement from './pages/Announcement'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Introduction from './pages/Introduction'
import Payonline from './pages/Payonline'
import Donation from './pages/Donation'
import Specialities from './pages/Specialities'
import Fooddonation from './pages/Fooddonation'
import Songs from './pages/Songs'

const App = () => {
  return (
    <div className="bg-yellow-200 min-h-screen flex flex-col"> 
      <Navbar/>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Festivals/>} path="/festivals"/>
        <Route element={<Location/>} path="/map"/>
        <Route element={<Prebooking/>} path="/prebooking" />
        <Route element={<Booking/>} path="/booking"/> 
        <Route element={<Feedback/>} path="/feedback"/>
        <Route element={<Announcement/>} path='/announcement'/>
        <Route element={<Gallery/>}  path="/photos"/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element={<Introduction/>} path="/arimugam"/>
        <Route element={<Payonline/>} path="/payment"/>
        <Route element={<Donation/>} path="/donation"/>
        <Route element={<Specialities/>} path="/specialities"/>
        <Route element={<Fooddonation/>} path="/annadhanam"/>
        <Route element={<Songs/>} path="/songs"/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
