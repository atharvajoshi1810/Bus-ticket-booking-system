import { useState } from 'react'
//import Navbar from '../components/navbar'
import customersData from '../dummy/users.json'

import { useEffect } from 'react'
import { getBusList } from '../services/admin'

function BusList() {
    
    const [buslist, setBuslist] = useState([])
    const loadBusList = async () => {
        const result = await getBusList()
        if (result['status'] == 200) {
           setBuslist(result['data'])

        }
        console.log("bUS LIST:"+buslist)
      }
    
      useEffect(() => {
        debugger;
        // this function will be called immediately after component gets loaded
        loadBusList()
    }, [])
  return (
    <div>
     
      <h2 className='page-header'>Bus List</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Bus No.</th>
            <th>Bus Capacity</th>
            <th>Bus Type</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Date</th>
            <th>departure Time</th>
            <th>Arrival Time</th>
            <th>Seats</th>
            <th>fare</th>
          </tr>
        </thead>
        <tbody>
        {buslist.map((buslist, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {buslist['Bus No.']}
                </td>
                <td>{buslist['Bus Capacity']}</td>
                <td>{buslist['Bus Type']}</td>
                <td>{buslist['Source']}</td>
                <td>{buslist['Destination']}</td>
                <td>{buslist['Date']}</td>
                <td>{buslist['Departure Time']}</td>
                <td>{buslist['Arrival Time']}</td>
                
                
                <td>
                  <button className='btn btn-sm btn-danger me-2'>
                    Delete
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

export default BusList
