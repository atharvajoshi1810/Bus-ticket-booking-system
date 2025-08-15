import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import bg from "../Images/LoginPage.jpeg";
import { login } from "../services/customer";

function Login() {
    debugger;
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async () => {
        if (email.length === 0) {
            toast.error("Enter email");
        } else if (password.length === 0) {
            toast.error("Enter password");
        } else {
            try{
            
            const result=await login(email, password);
            console.log('result - ',result)
            //if(result['status']===201){

               // const customerdetails = result.data; 
                const { jwt, customer } = result.data; // Adjust according to your API response
                sessionStorage.setItem('token', jwt);
                sessionStorage.setItem('customer', JSON.stringify(customer));
               // sessionStorage.setItem('customerdetails', JSON.stringify(customerdetails));
                
                toast.success("Logged in successfully");
                if(customer.role=="ROLE_CUSTOMER"){
                    navigate('/home');
                }
                else{
                    navigate('/adminDashboard');
                }
            //}
        }catch{
        
            toast.error("Login failed");
        }
            
        }
    };

    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
        }}>
            <h1 className="page-header" style={{ color: "white" }}>Login</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col mb-3">
                    <div className="form" style={styles.form}>
                        <div className="mb-3">
                            <label htmlFor="" className="">Email</label>
                            <input 
                                onChange={(e) => setEmail(e.target.value)}
                                type="text" 
                                className="form-control"
                                style={styles.input} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="">Password</label>
                            <input 
                                onChange={(e) => setPassword(e.target.value)}
                                type="password" 
                                className="form-control"
                                style={styles.input} 
                            />
                        </div>
                        <div className="mb-3">
                            <div>New User? <Link to="/register">Register</Link></div>
                            <button 
                                onClick={onLogin} 
                                className="btn btn-success mb-3"
                                style={styles.button}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

const styles = {
    form: {
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(245, 245, 200, 0.8)',
        border: '1px solid #ddd'
    },
    input: {
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    button: {
        width: '100%'
    }
};

export default Login;
