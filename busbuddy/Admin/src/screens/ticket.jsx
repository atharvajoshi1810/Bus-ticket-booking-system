import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';

const Ticket = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Received state in Ticket component:", location.state);
  }, [location.state]);

  const { busId, seatNumber, customerName, source, destination, journeyDate } = location.state || {};

  if (!busId || !seatNumber) {
    navigate('/error');
    return null;
  }

  const customerString = sessionStorage.getItem('customer');
  const customer = JSON.parse(customerString);
  const customerNname = customer.customerFname;


  return (
    <div>
      <Navbar />

      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow-sm" style={{ width: '350px' }}>
          <div className="card-header text-center">
            <h2 className="card-title mb-0">Ticket</h2>
            <p className="text-muted">Bus ID: {busId}</p>
          </div>
          <div className="card-body text-center">
            <div className="mb-3">
              <p className="mb-2">Seat Number: <span className="fw-bold">{seatNumber}</span></p>
              <p className="mb-2">Customer Name: <span className="fw-bold">{customerNname}</span></p>
              {/* <p className="mb-2">Source: <span className="fw-bold">{source}</span></p>
              <p className="mb-2">Destination: <span className="fw-bold">{destination}</span></p>
              <p className="mb-2">Journey Date: <span className="fw-bold">{journeyDate}</span></p> */}
              <p className="mb-2">Date: <span className="fw-bold">{new Date().toLocaleDateString()}</span></p>
              <p className="mb-0">Time: <span className="fw-bold">{new Date().toLocaleTimeString()}</span></p>
            </div>
          </div>
          <div className="card-footer text-center">
            <p className="text-muted mb-0">Thank you for choosing our service!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;