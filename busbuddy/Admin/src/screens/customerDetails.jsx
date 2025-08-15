import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomersById } from '../services/admin'; 

function CustomerDetails() {
    const { customerId } = useParams(); 
    const navigate = useNavigate();
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        const loadCustomerDetails = async () => {
            try {
                const result = await getCustomersById(customerId);
                if (result['status'] === 200) {
                    setCustomer(result['data']);
                } else {
                    toast.error("Failed to load customer details.");
                }
            } catch (error) {
                toast.error("An error occurred while fetching customer details.");
            }
        };

        loadCustomerDetails();
    }, [customerId]);

    const handleBack = () => {
        navigate(`/customer`);
    };

    if (!customer) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="page-header">Customer Details</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col-8">
                    <div className="form row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="customerFname" className="">First Name</label>
                                <input
                                    id="customerFname"
                                    value={customer.customerFname}
                                    readOnly
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="customerLname" className="">Last Name</label>
                                <input
                                    id="customerLname"
                                    value={customer.customerLname}
                                    readOnly
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="customerEmail" className="">Email</label>
                                <input
                                    id="customerEmail"
                                    value={customer.customerEmail}
                                    readOnly
                                    type="email"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="customerPhone" className="">Phone</label>
                                <input
                                    id="customerPhone"
                                    value={customer.customerPhone}
                                    readOnly
                                    type="tel"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="">Address</label>
                                <input
                                    id="address"
                                    value={customer.address}
                                    readOnly
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className="">Gender</label>
                                <input
                                    id="gender"
                                    value={customer.gender}
                                    readOnly
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="">Age</label>
                                <input
                                    id="age"
                                    value={customer.age}
                                    readOnly
                                    type="number"
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="col-6">
                                <button onClick={handleBack} className="btn btn-primary mb-3">Back</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default CustomerDetails;
