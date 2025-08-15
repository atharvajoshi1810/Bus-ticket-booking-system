import React, { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify"
import 'bootstrap/dist/css/bootstrap.min.css';

const FeedbackForm = () => {
    const [serviceRating, setServiceRating] = useState(0);
    const [driverRating, setDriverRating] = useState(0);
    const [busNumber, setBusNumber] = useState('');
    const [comments, setComments] = useState('');

    // Retrieve customerId from session storage or default to '1'
   // const customerId = sessionStorage.getItem('customerId') || '1';
   const customerString = sessionStorage.getItem('customer');

    const customer = JSON.parse(customerString);
    
    const customerId = customer.id;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!serviceRating || !driverRating || !busNumber || !comments) {
            toast.error('Please fill in all the fields.');
            return;
        }

        const feedback = {
            customerId: customerId,
            serviceRating: serviceRating,
            driverRating: driverRating,
            busNumber: busNumber,
            comments: comments
        };

        try {
            debugger;
            const token = sessionStorage.getItem('token');
            const response = await axios.post('http://localhost:8080/customers/feedback/addFeedBack', feedback, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response)

            if (response.status === 201) {
                toast.success('Feedback submitted successfully!');
                setServiceRating(0);
                setDriverRating(0);
                setBusNumber('');
                setComments('');
            } else {
                toast.error('Failed to submit feedback.');
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    const renderRadioButtons = (rating, setRating, label) => {
        return (
            <div className="mb-3">
                <label className="form-label">{label}</label>
                <div>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <div className="form-check form-check-inline" key={value}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name={label}
                                id={`${label}-${value}`}
                                value={value}
                                checked={rating === value}
                                onChange={() => setRating(value)}
                            />
                            <label className="form-check-label" htmlFor={`${label}-${value}`}>
                                {value}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Submit Your Feedback</h2>
            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                {renderRadioButtons(serviceRating, setServiceRating, "Service Rating")}
                {renderRadioButtons(driverRating, setDriverRating, "Driver Rating")}
                <div className="mb-3">
                    <label className="form-label">Bus Number:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={busNumber}
                        onChange={(e) => setBusNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Comments:</label>
                    <textarea
                        className="form-control"
                        rows="4"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
