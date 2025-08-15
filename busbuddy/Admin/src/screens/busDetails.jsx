import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { getBusDetails, getRouteList } from '../services/admin';
function BusDetails() {
    const { busId } = useParams(); 
    const navigate = useNavigate();
    const [bus, setBus] = useState(null);
    const [routeList, setRouteList] = useState([]);

    useEffect(() => {
        const loadBusDetails = async () => {
            try {
                debugger;
                const result = await getBusDetails(busId);
                if (result['status'] === 200) {
                    setBus(result['data']);
                } else {
                    toast.error("Failed to load bus details.");
                }
            } catch (error) {
                toast.error("An error occurred while fetching bus details.");
            }
        };

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

        loadBusDetails();
        loadRouteList();
    }, [busId]);

    const handleEdit = () => {
        navigate(`/buslist`);
    };

    if (!bus) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="page-header">Bus Details</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col-8">
                    <div className="form row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="busNumber" className="">Bus Number</label>
                                <input
                                    id="busNumber"
                                    value={bus.busNumber}
                                    readOnly
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="busCapacity" className="">Bus Capacity</label>
                                <input
                                    id="busCapacity"
                                    value={bus.busCapacity}
                                    readOnly
                                    type="number"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="busType" className="">Bus Type</label>
                                <input
                                    id="busType"
                                    value={bus.busType}
                                    readOnly
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="source" className="">Source</label>
                                <input
                                    id="source"
                                    value={bus.source}
                                    readOnly
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="destination" className="">Destination</label>
                                <input
                                    id="destination"
                                    value={bus.destination}
                                    readOnly
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fare" className="">Fare</label>
                                <input
                                    id="fare"
                                    value={bus.fare}
                                    readOnly
                                    type="number"
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="driverName" className="">Driver Name</label>
                                <input
                                    id="driverName"
                                    value={bus.driverName}
                                    readOnly
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="journeyDate" className="">Journey Date</label>
                                <input
                                    id="journeyDate"
                                    value={bus.journeyDate}
                                    readOnly
                                    type="date"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="availableSeats" className="">Available Seats</label>
                                <input
                                    id="availableSeats"
                                    value={bus.availabeSeats}
                                    readOnly
                                    type="number"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="departureTime" className="">Source Departure Time</label>
                                <input
                                    id="departureTime"
                                    value={bus.departureTime}
                                    readOnly
                                    type="time"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="arrivalTime" className="">Destination Arrival Time</label>
                                <input
                                    id="arrivalTime"
                                    value={bus.arrivalTime}
                                    readOnly
                                    type="time"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="routeId" className="">Route</label>
                                <select
                                    id="routeId"
                                    value={bus.routeId}
                                    readOnly
                                    className="form-control">
                                    {routeList.map((route) => (
                                        <option key={route.id} value={route.id}>
                                            {route.origin} - {route.destination}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="col-6">
                                <button onClick={handleEdit} className="btn btn-primary mb-3">Back</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default BusDetails;
