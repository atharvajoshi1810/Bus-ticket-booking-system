import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GetAllBuses } from "../services/customer";
import Navbar from "../components/navbar";


function Home() {
    
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const navigate = useNavigate();

  const onSearch = async () => {
    if (origin.length === 0) {
      toast.error("Enter origin");
    } else if (destination.length === 0) {
      toast.error("Enter destination");
    } else if (journeyDate.length === 0) {
      toast.error("Enter journey date");
    } else {

        debugger;
            const result = await GetAllBuses();
            console.log(result);
            if (result['status'] == 200) {
                toast.success("Searching for buses...");
                // Redirect or perform the search action
                navigate(`/buses?origin=${origin}&destination=${destination}&journeyDate=${journeyDate}`);
            } else {
                toast.error(result['error'])
            }



      
    }
  };

  return (
    <div>
        <Navbar />
      <h1 className="page-header">Bus Ticket Booking</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col mb-3">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="origin" className="">Origin</label>
              <input onChange={(e) => setOrigin(e.target.value)} type="text" className="form-control" id="origin"/>
            </div>
            <div className="mb-3">
              <label htmlFor="destination" className="">Destination</label>
              <input
                onChange={(e) => setDestination(e.target.value)}
                type="text"
                className="form-control"
                id="destination"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="journeyDate" className="">Journey Date</label>
              <input
                onChange={(e) => setJourneyDate(e.target.value)}
                type="date"
                className="form-control"
                id="journeyDate"
              />
            </div>
            <div className="mb-3">
              <button onClick={onSearch} className="btn btn-success mb-3">Search Buses</button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Home;
