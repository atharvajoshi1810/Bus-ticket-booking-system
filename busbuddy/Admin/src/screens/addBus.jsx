import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getRouteList, registerBus } from '../services/admin';

function AddBus() {
    const navigate = useNavigate();
    const [busNumber, setBusNumber] = useState('');
    const busCapacity = 30; // Fixed bus capacity of 30
    const [busType, setBusType] = useState('');
    const [routeId, setRouteId] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [driverName, setDriverName] = useState('');
    const [journeyDate, setJourneyDate] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [availabeSeats, setAvailabeSeats] = useState('');
    const [fare, setFare] = useState('');
    const [routeList, setRouteList] = useState([]);

    useEffect(() => {
        const loadRouteList = async () => {
            try {
                const result = await getRouteList();
                if (result['status'] === 200) {
                    setRouteList(result['data']);
                } else {
                    toast.error("Failed to load route list.");
                }
            } catch (error) {
                toast.error("An error occurred while fetching routes.");
            }
        };

        loadRouteList();
    }, []);

    const onRegisterBus = async () => {
        if (!busNumber) {
            toast.error("Enter bus Number");
        } else if (!busType) {
            toast.error("Enter Bus Type");
        } else if (!source) {
            toast.error("Enter source");
        } else if (!destination) {
            toast.error("Enter destination");
        } else if (!driverName) {
            toast.error("Enter driver name");
        } else if (!journeyDate) {
            toast.error("Enter journey date");
        } else if (!departureTime) {
            toast.error("Enter departure time");
        } else if (!arrivalTime) {
            toast.error("Enter arrival Time");
        } else if (!availabeSeats || isNaN(availabeSeats) || availabeSeats <= 0 || availabeSeats > busCapacity) {
            toast.error(`Enter a valid number of seats (1-${busCapacity})`);
        } else if (!fare || isNaN(fare) || fare <= 0) {
            toast.error("Enter a valid fare");
        } else {
            try {
                const result = await registerBus(busNumber, busCapacity, busType, source, routeId, destination, driverName, journeyDate, departureTime, arrivalTime, availabeSeats, fare);
                if (result['status'] === 201) {
                    toast.success('Successfully added new bus');
                    navigate('/buslist');
                } else {
                    toast.error(result['error'] || "Failed to add new bus.");
                }
            } catch (error) {
                toast.error("An error occurred while adding the bus.");
            }
        }
    };

    return (
        <div>
            <h1 className="page-header">Add New Bus</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col-8">
                    <div className="form row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="busNumber" className="">Bus Number</label>
                                <input
                                    id="busNumber"
                                    onChange={(e) => setBusNumber(e.target.value)}
                                    type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="busCapacity" className="">Bus Capacity</label>
                                <input
                                    id="busCapacity"
                                    value={busCapacity}
                                    readOnly
                                    type="number"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="busType" className="">Bus Type</label>
                                <select
                                    id="busType"
                                    onChange={(e) => setBusType(e.target.value)}
                                    className="form-select">
                                    <option value="">Select Bus Type</option>
                                    <option value="AC">AC</option>
                                    <option value="NON_AC">Non-AC</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="source" className="">Source</label>
                                <input
                                    id="source"
                                    onChange={(e) => setSource(e.target.value)}
                                    type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="destination" className="">Destination</label>
                                <input
                                    id="destination"
                                    onChange={(e) => setDestination(e.target.value)}
                                    type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fare" className="">Fare</label>
                                <input
                                    id="fare"
                                    onChange={(e) => setFare(e.target.value)}
                                    type="number" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="driverName" className="">Driver Name</label>
                                <input
                                    id="driverName"
                                    onChange={(e) => setDriverName(e.target.value)}
                                    type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="journeyDate" className="">Journey Date</label>
                                <input
                                    id="journeyDate"
                                    onChange={(e) => setJourneyDate(e.target.value)}
                                    type="date" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="availabeSeats" className="">Available Seats</label>
                                <input
                                    id="availabeSeats"
                                    onChange={(e) => setAvailabeSeats(e.target.value)}
                                    type="number"
                                    className="form-control"
                                    max={busCapacity} // Ensures the available seats cannot exceed bus capacity
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="departureTime" className="">Source Departure Time</label>
                                <input
                                    id="departureTime"
                                    onChange={(e) => setDepartureTime(e.target.value)}
                                    type="datetime-local" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="arrivalTime" className="">Destination Arrival Time</label>
                                <input
                                    id="arrivalTime"
                                    onChange={(e) => setArrivalTime(e.target.value)}
                                    type="datetime-local" className="form-control" />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="routeId" className="">Route</label>
                                <select
                                    id="routeId"
                                    onChange={(e) => setRouteId(e.target.value)}
                                    className="form-select ">
                                    <option value="">Select Route</option>
                                    {routeList.map((route) => (
                                        <option key={route.id} value={route.id}>{route.origin} - {route.destination}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="col-6">
                                <button onClick={onRegisterBus} className="btn btn-success mb-3">Add Bus</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default AddBus;
