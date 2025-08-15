import axios from 'axios'
import { config } from './config'

export async function register(customerFname, customerLname, customerEmail, password,address, gender, customerPhone, age) {
  try {
    debugger;
    // post body
    const body = { customerFname, customerEmail, customerLname, password,address, gender ,customerPhone, age}

    // send the post request
    console.log("Inside Axios")
    const response = await axios.post(`${config.serverUrl}/customers/register`, body )

    // return the json body from response object
    console.log("Response:"+response)
    console.log("Response Data:"+response.data);
    return response
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  //return null
}

export async function getAvailableSeats(busId) {
  try {
    debugger;
    const token = sessionStorage.getItem('token');
    const response = await axios.get(`${config.serverUrl}/customers/availabilSet/${busId}`, {
      headers:{
        Authorization: `Bearer ${token}`,
       } ,
      
    })
    console.log("Response Data:"+response.data);
    return response;
  } catch (ex) {
    console.error('Exception:', ex);
    return null;
  }
}

export async function reserveSeats(data) {
  debugger;
  try {
    const token = sessionStorage.getItem('token');
    console.log("InseatReservation",data)
    const response = await axios.post(`${config.serverUrl}/customers/seatReservation`, data, {
      headers:{
        Authorization: `Bearer ${token}`,
       } ,
      
    })
    console.log("Response:"+response)
    return response;
  } catch (ex) {
    console.error('Exception:', ex);
    return null;
  }
}

export async function GetAllBuses() {
  try {
    debugger;
    const token = sessionStorage.getItem('token');
   // const token = sessionStorage['token']
    const response = await axios.get(`${config.serverUrl}/customers/GetAllBuses`, {
      headers:{
        Authorization: `Bearer ${token}`,
       } ,
      
    })
    console.log(response)
    return response
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
}

export async function login(customerEmail, password) {
  const body = { customerEmail, password }
  try {
    debugger;
    const response = await axios.post(`${config.serverUrl}/customers/login`, body)
    console.log('Response',response)
    return response
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
  //   axios
  //     .post(`${config.serverUrl}/admin/login`, body)
  //     .then((response) => {
  //       console.log(response.data)
  //       return response.data
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
}
export const getTicketDetails = async (busId, seatNumber) => {
  try {
    const response = await axios.get(`/api/tickets/${busId}/${seatNumber}`);
    return response;
  } catch (error) {
    console.error('Error fetching ticket details:', error);
    throw error;
  }
};