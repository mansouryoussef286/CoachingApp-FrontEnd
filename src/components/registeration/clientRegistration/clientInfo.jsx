import React from 'react'
import {ClientSignup2} from './clientInformation/clientSignup2'
import { useLocation } from 'react-router'
export const ClientInfo= (props) => {
  const location = useLocation();

 // console.log(location.state);

  return (

    <ClientSignup2 data={location.state}></ClientSignup2>
  )
}
