import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate, useParams } from 'react-router-dom';
import { reserveSeats,getAvailableSeats } from '../services/customer';
import { toast } from 'react-toastify';

const Reservation = () => {
  const { busId } = useParams();
  const [userId, setUserId] = useState(1);
  const [seatNumber, setseatNumber] = useState([]);


  const createSeats = (num) => {
    return Array.from({ length: num }, (_, i) => ({
      id: i+1,
      reserved: false,
      selected: false,
    }));
  };

  const initialSeats = createSeats(30);
  // initialSeats[2].reserved = true; // Example reserved seat
  // initialSeats[6].reserved = true; // Example reserved seat

  const loadAvailableBusSeat = async () => {
    debugger;
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
      // Optionally log the error
      console.error("Error fetching buses:", err);
    }
  };

  useEffect(() => {
    loadAvailableBusSeat();
  }, []);


  const [seats, setSeats] = useState(initialSeats);
  const [name, setName] = useState('');
  

  const nav = useNavigate();

  const toggleSeatSelection = (id) => {
    setSeats(
      seats.map((seat) =>
        seat.id === id
          ? { ...seat, selected: !seat.selected }
          : seat
      )
    );
  };

  const confirmReservation = async () => {
    const selectedSeats = seats.filter((seat) => seat.selected);
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }
    // alert(
    //   `Reservation confirmed for seats: ${selectedSeats
    //     .map((seat) => seat.id)
    //     .join(', ')}`
    // );
    
    try {
      const data = await reserveSeats({busId, userId, seatNumber,
        headers: {
          'Content-Type': 'application/json'
        }});
      console.log(seatNumber);
      console.log(userId);
      console.log(busId);
      toast.success('Seat Reservation Successful!!!');
      nav(`/ticket/${busId}&&${seatNumber}`);
    }
    catch(er){
      console.log(er);
      toast.error('Reservation Failed. Please Try Again');
    }
  };

  return (
    <div>
      <header>
        <h1>Bus Seat Reservation System</h1>
      </header>

      <div className="bus-layout">
        {seats.map((seat) => (
          <div
            key={seat.id}

            

            className={`seat ${seat.reserved ? 'reserved' : ''} ${seat.selected ? 'selected' : ''
              }`}
            // onClick={() => !seat.reserved && toggleSeatSelection(seat.id) &&  setseatNumber(seat.id)}
            onClick={() => {
              if (!seat.reserved) {
                toggleSeatSelection(seat.id);
                setseatNumber(seat.id-1);
              }
            }}
            

            
            
          >
            {seat.id}
          </div>
        ))}
      </div>

      <div className="details-form">
        
        <form>
                   <button type="button" className='btn btn-success' onClick={confirmReservation}>
            Confirm Reservation
          </button>
        </form>
      </div>

      
    </div>
  );
};

export default Reservation;


