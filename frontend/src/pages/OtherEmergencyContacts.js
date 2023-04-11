import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Container, Table, Button, FormSelect } from 'react-bootstrap'
import { useAuth } from '../context/authContext'

const OtherEmergencyContacts = () => {
  const [contacts, setContacts] = useState([{hi: "hi"}])
  const [message, setMessage] = useState(null)
  const [messageTo, setMessageTo] = useState(null)
  const [error, setError] = useState(null)
  const {getToken} = useAuth();
  const token = getToken()
  const url = process.env.REACT_APP_SERVER_URL

  const getContacts = async () => {

  }

  
  const sendMessage = async (id) => {
    try {
      if (!messageTo){
        return setError("Please select the contact")
      }
      if (!message){
        return setError("Please enter a message")
      }
      const response = await axios.put(`${url}/emergency/sendMessage/${id}`, {message: message}, { headers: {
          'Authorization': 'Bearer ' + token
      }})
      setError(null)
    } catch (error) {
      setError(error.response?.data?.message)
    }
  }

  useEffect(() => {
    getContacts()
  } ,[])

  return (
    <Container>
        <h4>I am Emergency Contact of: </h4>
        <Table striped className='my-4'>
        <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.length > 0 && contacts?.map((contact, i) => {
            return (
            <tr>
              <th>{i + 1}</th>
              <th>{contact?.lastName} {contact?.firstName}</th>
              <th>{contact?.username}</th>
              <th>{contact?.email}</th>
              <th>{contact?.address}</th>
              <th>{contact?.phone}</th>
            </tr>       
            )
          })
        }
        
        </tbody>
        </Table>
        <div className="w-75 mx-auto border border-secondary border-2 rounded text-center">
          <FormSelect className="w-75 mx-auto mt-4" onChange={(e) => setMessageTo(e.target.value)}>
          <option disabled selected>Please select the contact</option>
            {
              contacts?.map((contact, index) => {
                 return <option key={index} value={contact._id}>{contact?.username}</option>
              })
            }
          </FormSelect>
          <textarea className='my-4 w-75 mx-auto form-control' placeholder='Enter your message here' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <Button variant='success' className='mb-3' onClick={() => sendMessage(messageTo)}>Send Message</Button>
          </div>
        <span className='text-danger text-center d-block my-3'>{error}</span>
    </Container>
  )
}

export default OtherEmergencyContacts