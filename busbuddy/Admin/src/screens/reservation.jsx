import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate, useParams } from 'react-router-dom';
import { reserveSeats, getAvailableSeats } from '../services/customer';
import { toast } from 'react-toastify';
import NavbarCustomer from '../components/navbarCustomer';
import bg from "../Images/BusHome.jpeg";

const Reservation = () => {
  const customerString = sessionStorage.getItem('customer');
  const customer = JSON.parse(customerString);
  const userId = customer.id;

  const { busId } = useParams();
 // busId, seatNumber, customerName, source, destination, journeyDate 
  // const { customerName } = useParams();
  // const { source } = useParams();
  // const { destination }= useParams();
  // const { journeyDate } = useParams();
  const [seatNumber, setSeatNumber] = useState([]);
  const [seats, setSeats] = useState(createSeats(30));
  const navigate = useNavigate();

  useEffect(() => {
    loadAvailableBusSeat();
  }, []);

  const loadAvailableBusSeat = async () => {
    try {
      const result = await getAvailableSeats(busId);
      if (result.status === 200) {
        const updatedSeats = seats.map((seat, index) => ({
          ...seat,
          reserved: result.data[index] === 'FALSE'
        }));
        setSeats(updatedSeats);
      }
    } catch (err) {
      console.error("Error fetching buses:", err);
    }
  };

  const toggleSeatSelection = (id) => {
    setSeats(
      seats.map((seat) =>
        seat.id === id
          ? { ...seat, selected: !seat.selected }
          : seat
      )
    );
    setSeatNumber(id);
  };

  const confirmReservation = async () => {
    const selectedSeats = seats.filter((seat) => seat.selected);
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }

    try {
      const data = await reserveSeats({ busId, userId, seatNumber });
      toast.success('Seat Reservation Successful!!!');
      navigate('/ticket/:busId&&:seatNumber', {
        state: {
          busId,
          seatNumber,
          customerName: customer.name,
          source: data.source,
          destination: data.destination,
          journeyDate: data.journeyDate
        }
      });
    } catch (er) {
      console.log(er);
      toast.error('Reservation Failed. Please Try Again');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        padding: "20px"
      }}>
      <NavbarCustomer />
      <h2 className='page-header' style={{ color: "white" }}>Reserve Seat</h2>

      <div className="bus-layout">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${seat.reserved ? 'reserved' : ''} ${seat.selected ? 'selected' : ''}`}
            onClick={() => !seat.reserved && toggleSeatSelection(seat.id)}
          >
            {seat.id}
          </div>
        ))}
      </div>
      <div className='' style={{ display: 'grid', gridTemplateRows: 'repeat(3, auto)', gap: '10px' }}>
       <div className='seatD'>Available</div>
      <div className='seatD' style={{ backgroundColor: 'greenyellow' }}>Booking in progress</div>
       <div className='seatD' style={{ backgroundColor: '#faa0a0' }}><p>Booked</p></div>    </div>
      <div className="details-form mt-3">
        <button type="button" className='btn btn-success mt-3 shadow p-3 mb-5 rounded' onClick={confirmReservation} style={{ margin: '56px' }}>
          Confirm Reservation
        </button>
      </div>
    </div>
  );
};

const createSeats = (num) => {
  return Array.from({ length: num }, (_, i) => ({
    id: i + 1,
    reserved: false,
    selected: false,
  }));
};

export default Reservation;



