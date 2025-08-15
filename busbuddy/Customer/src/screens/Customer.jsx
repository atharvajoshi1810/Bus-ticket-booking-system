import { useState } from 'react'
import Navbar from '../components/navbar'
import customersData from '../dummy/users.json'
import { getCustomers } from "../services/admin"
import { useEffect } from 'react'

function Customers() {
  
    const [customers, setCustomers] = useState([])
    const loadCustomers = async () => {
        const result = await getCustomers()
        if (result['status'] == 200) {
          setCustomers(result['data'])

        }
        console.log("Customer:"+customers)
      }
    
      useEffect(() => {
        debugger;
        // this function will be called immediately after component gets loaded
        loadCustomers()
    }, [])
  return (
    <div>
     <Navbar />
      <h2 className='page-header'>Customers</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {customers.map((customer, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {customer['customerFname']} {customer['customerLname']}
                </td>
                <td>{customer['customerEmail']}</td>
                <td>{customer['customerPhone']}</td>
                <td>{customer['gender']}</td>
                <td>{customer['address']}</td>
                
                <td>
                  <button className='btn btn-sm btn-success me-2'>
                    Deactivate
                  </button>
                  <button className='btn btn-sm btn-primary'>Details</button>
                </td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    </div>
  )
}

export default Customers
