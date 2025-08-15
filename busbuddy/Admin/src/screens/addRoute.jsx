import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getRouteList, registerRoute } from '../services/admin'; 

function AddRoute() {
    const navigate = useNavigate();
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [distance, setDistance] = useState('');
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

    const onRegisterRoute = async () => {
        if (!origin) {
            toast.error("Enter origin");
        } else if (!destination) {
            toast.error("Enter destination");
        } else if (!distance || isNaN(distance)) {
            toast.error("Enter a valid distance");
        } else {
            try {
                debugger;
                const result = await registerRoute(origin, destination, distance);
                console.log(result);
               // if (result['status'] === 201) {
                    toast.success('Successfully added new route');
                    navigate('/routelist');
              //  } else {
                   // toast.error(result['error'] || "Failed to add new route.");
               // }
            } catch (error) {
                toast.error("An error occurred while adding the route.");
            }
        }
    };

    return (
        <div>
            <h1 className="page-header">Add New Route</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col-8">
                    <div className="form row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="origin" className="">Origin</label>
                                <input
                                    id="origin"
                                    onChange={(e) => setOrigin(e.target.value)}
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
                                <label htmlFor="distance" className="">Distance (km)</label>
                                <input
                                    id="distance"
                                    onChange={(e) => setDistance(e.target.value)}
                                    type="number" className="form-control" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="col-6">
                                <button onClick={onRegisterRoute} className="btn btn-success mb-3">Add Route</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default AddRoute;
