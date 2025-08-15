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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

    const onRegister = async () => {
        if (customerFname.length === 0) {
            toast.error("Enter First Name")
        } else if (customerLname.length === 0) {
            toast.error("Enter Last Name")
        } else if (customerEmail.length === 0) {
            toast.error("Enter Email")
        } else if (!emailRegex.test(customerEmail)) {
            toast.error("Enter a valid email")
        } else if (customerPhone.length === 0) {
            toast.error("Enter Phone Number")
        } else if (!phoneRegex.test(customerPhone)) {
            toast.error("Enter a valid 10-digit phone number")
        } else if (address.length === 0) {
            toast.error("Enter Address")
        } else if (password.length === 0) {
            toast.error("Enter Password")
        } else if (!passwordRegex.test(password)) {
            toast.error("Password must be at least 5 characters long, contain letters, numbers, and at least one special character")
        } else if (confirmPassword.length === 0) {
            toast.error("Enter Confirmed Password")
        } else if (password !== confirmPassword) {
            toast.error("Passwords do not match")
        } else {
            console.log("Inside Else")
            // Call the register API
            const result = await register(customerFname, customerLname, customerEmail, password, address, gender, customerPhone, age)
            console.log(result);
            if (result['status'] === 201) {
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
                            <label htmlFor="firstName" className="">First Name</label>
                            <input
                                id="firstName"
                                onChange={(e) => setcustomerFname(e.target.value)}
                                type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="">Last Name</label>
                            <input
                                id="lastName"
                                onChange={(e) => setcustomerLname(e.target.value)}
                                type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="">Email</label>
                            <input
                                id="email"
                                onChange={(e) => setcustomerEmail(e.target.value)}
                                type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="">Phone</label>
                            <input
                                id="phone"
                                onChange={(e) => setcustomerPhone(e.target.value)}
                                type="tel" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="">Address</label>
                            <input
                                id="address"
                                onChange={(e) => setAddress(e.target.value)}
                                type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="">Age</label>
                            <input
                                id="age"
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
                                    defaultChecked
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
                            <label htmlFor="password" className="">Password</label>
                            <input
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                type="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <button onClick={onRegister} className="btn btn-success mb-3">Register</button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
export default Register
