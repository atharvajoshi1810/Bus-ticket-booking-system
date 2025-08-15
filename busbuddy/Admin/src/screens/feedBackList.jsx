import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import bg from "../Images/BusHome.jpeg";  // Import the background image

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Admin/feedback/getAllFeedBack');
        if (response.status === 200) {
          setFeedbacks(response.data);
        } else {
          toast.error("Failed to load feedback list.");
        }
      } catch (error) {
        toast.error("An error occurred while fetching the feedback list.");
      }
    };
    loadFeedbacks();
  }, []);

  const onDetails = (feedbackId) => {
    navigate(`/feedbackdetails/${feedbackId}`);
  };

  const onDelete = async (feedbackId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/Admin/feedback/deleteFeedback/${feedbackId}`);
      if (response.status === 200) {
        toast.success("Feedback deleted successfully.");
        setFeedbacks(feedbacks.filter(feedback => feedback.id !== feedbackId));
      } else {
        toast.error("Failed to delete feedback.");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the feedback.");
    }
  };

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
      <h2 className='page-header' style={{ color: "white", textAlign: "center" }}>Feedback List</h2>
      
      {feedbacks.length === 0 && (
        <h3 className='mt-5 text-center' style={{ color: "white" }}>
          There are no feedback entries at the moment. Please use the Add Feedback button to add one.
        </h3>
      )}
      {feedbacks.length > 0 && (
        <div className='container'>
          <table className='table table-striped' style={{ borderRadius: "10px", overflow: "hidden", backgroundColor: "white" }}>
            <thead style={{ backgroundColor: "#f8f9fa" }}>
              <tr>
                <th>#</th>
                <th>Service Rating</th>
                <th>Driver Rating</th>
                <th>Overall Rating</th>
                <th>Comments</th>
                <th>Customer</th>
                <th>Bus</th>
               
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback, index) => (
                <tr key={feedback.id}>
                  <td>{index + 1}</td>
                  <td>{feedback.serviceRating}</td>
                  <td>{feedback.driverRating}</td>
                  <td>{feedback.overallRatilng}</td>
                  <td>{feedback.comments}</td>
                  <td>{feedback.user?.customerFname || 'N/A'}</td>
                  <td>{feedback.bus?.busNumber || 'N/A'}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FeedbackList;
