import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { getBusList, deleteBus } from '../services/admin';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import bg from "../Images/BusHome.jpeg";  // Import the background image

function BusList() {
    const [buslist, setBuslist] = useState([]);
    const navigate = useNavigate();

    const loadBusList = async () => {
        try {
            const result = await getBusList();
            if (result['status'] === 200) {
                setBuslist(result['data']);
            } else {
                toast.error("Failed to load bus list.");
            }
        } catch (error) {
            toast.error("An error occurred while fetching bus list.");
        }
    };

    useEffect(() => {
        loadBusList();
    }, []);

    const onDetails = (busId) => {
        debugger;
        navigate(`/busdetails/${busId}`);
    };

    const onDelete = async (busId) => {
        try {
            const result = await deleteBus(busId);
            if (result['status'] === 200) {
                toast.success("Bus deleted successfully.");
                setBuslist(buslist.filter(bus => bus.id !== busId));
            } else {
                toast.error("Failed to delete bus.");
            }
        } catch (error) {
            toast.error("An error occurred while deleting the bus.");
        }
    };

    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
            padding: "20px"
        }}>
            <Navbar />
            <h2 className='page-header' style={{ color: "white", textAlign: "center" }}>Bus List</h2>
            <div className='d-flex justify-content-center mb-3'>
                <button onClick={() => navigate('/addBus')} className='btn btn-primary'>
                    Add Bus
                </button>
            </div>
            {buslist.length === 0 && (
                <h3 className='mt-5 text-center' style={{ color: "white" }}>
                    There are no buses at the moment. Please use the Add Bus button to add one.
                </h3>
            )}
            {buslist.length > 0 && (
                <div className='container'>
                    <table className='table table-striped' style={{ borderRadius: "10px", overflow: "hidden", backgroundColor: "white" }}>
                        <thead style={{ backgroundColor: "#f8f9fa" }}>
                            <tr>
                                <th>#</th>
                                <th>Bus Number</th>
                                <th>Bus Type</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Journey Date</th>
                                <th>Source Departure Time</th>
                                <th>Destination Arrival Time</th>
                                <th>Driver Name</th>
                                <th>Bus Capacity</th>
                                <th>Available Seats</th>
                                <th>Fare</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buslist
                                .filter(bus => !bus.deletedStatus) 
                                .map((bus, index) => (
                                    <tr key={bus.id}>
                                        <td>{index + 1}</td>
                                        <td>{bus.busNumber}</td>
                                        <td>{bus.busType}</td>
                                        <td>{bus.source}</td>
                                        <td>{bus.destination}</td>
                                        <td>{bus.journeyDate}</td>
                                        <td>{bus.departureTime}</td>
                                        <td>{bus.arrivalTime}</td>
                                        <td>{bus.driverName}</td>
                                        <td>{bus.busCapacity}</td>
                                        <td>{bus.availabeSeats}</td>
                                        <td>{bus.fare}</td>
                                        <td>
                                            <div className='d-flex'>
                                                <button 
                                                    onClick={() => onDelete(bus.id)} 
                                                    className='btn btn-sm btn-danger me-2'>
                                                    Delete
                                                </button>
                                                <button 
                                                    onClick={() => onDetails(bus.id)} 
                                                    className='btn btn-sm btn-primary'>
                                                    Details
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default BusList;
