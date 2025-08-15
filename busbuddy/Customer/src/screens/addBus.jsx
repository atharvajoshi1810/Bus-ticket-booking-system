import { useState } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { register } from '../services/admin'


function AddBus() {
    const navigate = useNavigate()
    const [busNumber,setbusNumber] = useState('')
    const [busCapacity, setbusCapacity] = useState('')
    const [busType, setbusType] = useState('')
    const [source, setSource] = useState('')
    const [destination , setDestination]=useState('')
    const [driverName, setdriverName ] = useState('')
    const [journeyDate, setjourneyDate] = useState('')
    const [departureTime, setdepartureTime] = useState('')
    const [arrivalTime, setarrivalTime] = useState('')
    const [availableSeats, setavailableSeats]=useState('')
    const [fare, setfare] = useState('')
   

    const onRegister = async () => {
        if (busNumber.length == 0) {
            toast.error("Enter bus Number")
        }
        else if (busCapacity.length == 0) {
            toast.error("Enter busCapacity")
        }
        else if (busType.length == 0) {
            toast.error("Enter Bus Type")
        }
        else if (source.length == 0) {
            toast.error("Enter source ")
        }
        else if (destination.length == 0) {
            toast.error("Enter destination")
        }
        else if (driverName.length == 0) {
            toast.error("Enter driver name")
        }
        else if (journeyDate.length == 0) {
            toast.error("Enter journey date")
        }
        else if (departureTime.length == 0) {
            toast.error("Enter departure time")
        }
        else if (arrivalTime.length == 0) {
            toast.error("Enter arrival Time")
        }
        else if (availableSeats.length == 0) {
            toast.error("Enter Seats")
        }
        else if (fare.length == 0) {
            toast.error("Enter fare")
        }
        else {
            debugger;
            console.log("Inside Else")
            // call post /admin/register api
            const result = await register(busNumber,busCapacity,busType,source,destination,driverName,journeyDate,departureTime,arrivalTime,availableSeats,fare)
            console.log(result);
            if (result['status'] == 201) {
                toast.success('Successfully added new bus')
                navigate('/login')
            } else {
                toast.error(result['error'])
            }
        }
        
    }
    return (
        <div>
            <h1 className="page-header">Add New Bus</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col-8">
                    <div className="form row">
                      <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="">Bus Number</label>
                            <input
                                onChange={(e) => setbusNumber(e.target.value)}
                                type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="">Bus Capacity</label>
                            <input
                                onChange={(e) => setbusCapacity(e.target.value)}
                                type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="">BusType</label>
                            <select
                                onChange={(e) => setbusType(e.target.value)}
                                type="busType" className="form-control" >
                                
                                <option value="">BusType</option>
                                <option value="ac">AC</option>
                                <option value="non-ac">Non-AC</option>         
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="">Source</label>
                            <input
                                onChange={(e) => setSource(e.target.value)}
                                type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="">Destination</label>
                            <input
                                onChange={(e) => setDestination(e.target.value)}
                                type="text" className="form-control" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="">Driver Name</label>
                            <input
                                onChange={(e) => setdriverName(e.target.value)}
                                type="text" className="form-control"  />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="" className="">Journey Date</label>
                            <input
                                onChange={(e) => setjourneyDate(e.target.value)}
                                type="date" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="">Departure Time</label>
                            <input
                                onChange={(e) => setdepartureTime(e.target.value)}
                                type="time" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="">Arrival Time</label>
                            <input
                                onChange={(e) => setarrivalTime(e.target.value)}
                                type="time" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="">Seats</label>
                            <input
                                onChange={(e) => setavailableSeats(e.target.value)}
                                type="number" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="">Fare</label>
                            <input
                                onChange={(e) => setfare(e.target.value)}
                                type="number" className="form-control" />
                        </div>
                        </div>
                        
                        <div className="mb-3">
                            <div className="col-6">

                                <button on onClick={onRegister} className="btn btn-success mb-3">Add Bus</button>

                            </div>
                        </div>

                    </div>


                </div>
                <div className="col"></div>
            </div>
        </div>
        
    )
}
export default AddBus
