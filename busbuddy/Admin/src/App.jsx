
import {Route, Routes} from 'react-router-dom'
import  { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './screens/login';
import Register from './screens/register';
import Customer from './screens/Customer'; 
import Home from './screens/home';
import AddBus from './screens/addBus';
import BusList from './screens/buslist';
import BusDetails from './screens/busDetails';
import AdminDashboard from './screens/adminDashboard';
import RouteList from './screens/routeList';
import AddRoute from './screens/addRoute';
import Buses from './screens/buses';
import Reservation from './screens/reservation';
import Ticket from './screens/ticket';
import CustomerDetails from './screens/customerDetails';
import FeedbackForm from './screens/feedBack';
import FeedbackList from './screens/feedBackList';



function App() {
  return (
    <div>
      {/* <h1 className="page-header" style={{background:"blue",height:50,color:"white",textAlign:"start"}}>BusBuddy
        </h1> */}
      <Routes>
      <Route path='' element={<Login/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/customer' element={<Customer/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/busDetails/:busId' element={<BusDetails/>}></Route>
      <Route path='/customerDetails/:customerId' element={<CustomerDetails/>}></Route>
      <Route path='/addbus' element={<AddBus/>}></Route>
      <Route path='/buslist' element={<BusList/>}></Route>
      <Route path='/adminDashboard' element={<AdminDashboard/>}></Route>
      <Route path='/routeList' element={<RouteList/>}></Route>
      <Route path='/addRoute' element={<AddRoute/>}></Route>

      <Route path='/buses' element={<Buses/>}></Route>
      <Route path='/reservation/:busId' element={<Reservation/>}></Route>
      
      
      <Route path="/ticket/:busId&&:seatNumber" element={<Ticket />}></Route>
      <Route path="/feedback" element={<FeedbackForm />} />
      <Route path="/feedbackList" element={<FeedbackList />} />
      
      
      </Routes>
      <ToastContainer/>
      {/* <h1 className="page-header" style={{background:"blue",height:50}}>Designed by PASS Group
    </h1> */}
      </div>
  )
}

export default App;
