import React from 'react'
import { LocalFileStorage } from "@remix-run/file-storage/local";
export const fileStorage = new LocalFileStorage(
  passIn = document.getElementById('2'),
  nameIn = document.getElementById('0')
);
const Signup = () => {
  return (
    <>
    <p>UserName</p>
    <input id='0' type="text" />
    <p>Password</p>
    <input id='2' type="password" />
    </>
  )
}

export default Signup