import { useState } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { register } from '../services/admin'


function Register() {
    const navigate = useNavigate()
    const [customerFname, setcustomerFname] = useState('')
    const [customerLname, setcustomerLname] = useState('')
    const [customerEmail, setcustomerEmail] = useState('')
    const [customerPhone, setcustomerPhone] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState("MALE")
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    // const[gender,setGender]=useState('Male')

    const onRegister = async () => {
        if (customerFname.length == 0) {
            toast.error("Enter FirstName")
        }
        else if (customerLname.length == 0) {
            toast.error("Enter customerLname")
        }
        else if (customerEmail.length == 0) {
            toast.error("Enter customerEmail")
        }
        else if (customerPhone.length == 0) {
            toast.error("Enter customerPhone")
        }
        else if (address.length == 0) {
            toast.error("Enter Address")
        }
        else if (password.length == 0) {
            toast.error("Enter password")
        }
        else if (confirmPassword.length == 0) {
            toast.error("Enter ConfirmedPassword")
        }
        else if (password != confirmPassword) {
            toast.error("Password mismatched")
        }
        else {
            debugger;
            console.log("Inside Esle")
            // call post /admin/register api
            const result = await register(customerFname, customerLname, customerEmail, password,address, gender, customerPhone, age)
            console.log(result);
            if (result['status'] == 201) {
                toast.success('Successfully registered a new user')
                navigate('/login')
            } else {
                toast.error(result['error'])
            }
        }
        
    }
    return (
        <div>
            <h1 className="page-header">Register</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form">

                        <div className="mb-3">
                            <label htmlFor="" className="">First Name</label>
                            <input
                                onChange={(e) => setcustomerFname(e.target.value)}
                                type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="">Last Name</label>
                            <input
                                onChange={(e) => setcustomerLname(e.target.value)}
                                type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="">Email</label>
                            <input
                                onChange={(e) => setcustomerEmail(e.target.value)}
                                type="customerEmail" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="">Phone</label>
                            <input
                                onChange={(e) => setcustomerPhone(e.target.value)}
                                type="customerPhone" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="">Address</label>
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="">Age</label>
                            <input
                                onChange={(e) => setAge(e.target.value)}
                                type="number" className="form-control" min="0" />
                        </div>

                        <div className="mb-3">
                            <label className="">Gender</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input
                                    onChange={(e) => setGender(e.target.value)}
                                    type="radio"
                                    name="gender"
                                    value="MALE"
                                    id="male"
                                    className="form-check-input"
                                />
                                <label htmlFor="male" className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    onChange={(e) => setGender(e.target.value)}
                                    type="radio"
                                    name="gender"
                                    value="FEMALE"
                                    id="female"
                                    className="form-check-input"
                                />
                                <label htmlFor="female" className="form-check-label">Female</label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="">Confirm Password</label>
                            <input
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="text" className="form-control" />
                        </div>
                        <div className="mb-3">

                            <div className="mb-3">

                                <button on onClick={onRegister} className="btn btn-success mb-3">Register</button>

                            </div>
                        </div>

                    </div>


                </div>
                <div className="col"></div>
            </div>

        </div>
    )
}
export default Register