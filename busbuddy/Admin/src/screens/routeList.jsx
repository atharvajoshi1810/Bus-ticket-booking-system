import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { getRouteList, deleteRoute } from '../services/admin';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import bg from "../Images/BusHome.jpeg";  // Import the background image

function RouteList() {
    const [routeList, setRouteList] = useState([]);
    const navigate = useNavigate();

    const loadRouteList = async () => {
        try {
            const result = await getRouteList();
            if (result['status'] === 200) {
                setRouteList(result['data']);
            } else {
                toast.error("Failed to load route list.");
            }
        } catch (error) {
            toast.error("An error occurred while fetching route list.");
        }
    };

    useEffect(() => {
        loadRouteList();
    }, []);

    const onDetails = (routeId) => {
        navigate(`/routedetails/${routeId}`);
    };

    // const onDelete = async (routeId) => {
    //     try {
    //         const result = await deleteRoute(routeId);
    //         if (result['status'] === 200) {
    //             toast.success("Route deleted successfully.");
    //             setRouteList(routeList.filter(route => route.id !== routeId));
    //         } else {
    //             toast.error("Failed to delete route.");
    //         }
    //     } catch (error) {
    //         toast.error("An error occurred while deleting the route.");
    //     }
    // };

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
            <h2 className='page-header' style={{ color: "white", textAlign: "center" }}>Route List</h2>
            <div className='d-flex justify-content-center mb-3'>
                <button onClick={() => navigate('/addRoute')} className='btn btn-primary'>
                    Add Route
                </button>
            </div>
            {routeList.length === 0 && (
                <h3 className='mt-5 text-center' style={{ color: "white" }}>
                    There are no routes at the moment. Please use the Add Route button to add one.
                </h3>
            )}
            {routeList.length > 0 && (
                <div className='container'>
                    <table className='table table-striped' style={{ borderRadius: "10px", overflow: "hidden", backgroundColor: "white" }}>
                        <thead style={{ backgroundColor: "#f8f9fa" }}>
                            <tr>
                                <th>#</th>
                                <th>Origin</th>
                                <th>Destination</th>
                                <th>Distance</th>
                                {/* <th>Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {routeList
                                .filter(route => !route.deleteStatus)  // Only display routes where deleteStatus is false
                                .map((route, index) => (
                                    <tr key={route.id}>
                                        <td>{index + 1}</td>
                                        <td>{route.origin}</td>
                                        <td>{route.destination}</td>
                                        <td>{route.distance}</td>
                                        <td>
                                            <div className='d-flex'>
                                                {/* <button 
                                                    onClick={() => onDelete(route.id)} 
                                                    className='btn btn-sm btn-danger me-2'>
                                                    Delete
                                                </button> */}
                                                {/* <button 
                                                    onClick={() => onDetails(route.id)} 
                                                    className='btn btn-sm btn-primary'>
                                                    Details
                                                </button> */}
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

export default RouteList;
