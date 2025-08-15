
import { useNavigate } from "react-router-dom";
import bg from "../Images/LoginPage.jpeg";  // Import the background image
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesome for icons
import { faUsers, faRoute, faBus,  faMessage } from '@fortawesome/free-solid-svg-icons';  // Import specific icons

function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
        }}>
            <h1 className="page-header" style={{ marginBottom: "40px", fontSize: "3rem", fontWeight: "bold" }}>Admin Dashboard</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3 col-sm-6 mb-3">
                        <div className="card text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "10px" }}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faUsers} size="3x" className="mb-3" style={{ color: "#007bff" }} />
                                <h5 className="card-title">Manage Users</h5>
                                <button 
                                    onClick={() => navigate('/customer')} 
                                    className="btn btn-primary"
                                    style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                                >
                                    Go to Users
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3">
                        <div className="card text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "10px" }}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faRoute} size="3x" className="mb-3" style={{ color: "#007bff" }} />
                                <h5 className="card-title">Manage Routes</h5>
                                <button 
                                    onClick={() => navigate('/routeList')} 
                                    className="btn btn-primary"
                                    style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                                >
                                    Go to Routes
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3">
                        <div className="card text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "10px" }}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faBus} size="3x" className="mb-3" style={{ color: "#007bff" }} />
                                <h5 className="card-title">Manage Buses</h5>
                                <button 
                                    onClick={() => navigate('/buslist')} 
                                    className="btn btn-primary"
                                    style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                                >
                                    Go to Buses
                                </button>
                            </div>
                        </div>
                    </div>




                    <div className="col-md-3 col-sm-6 mb-3">
                        <div className="card text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "10px" }}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faMessage} size="3x" className="mb-3" style={{ color: "#007bff" }} />
                                <h5 className="card-title">See FeedBacks</h5>
                                <button 
                                    onClick={() => navigate('/feedbackList')} 
                                    className="btn btn-primary"
                                    style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                                >
                                    Go to Feed-Backs
                                </button>
                            </div>
                        </div>
                    </div>









                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
