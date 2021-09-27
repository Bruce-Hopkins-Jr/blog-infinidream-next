import React from 'react'

const LoginPage = (props) => {
  return (
    <form action= {props.url + "/api/login/"} method="POST">
        <label htmlFor="user">First name:</label>
        <input type="text" id="user" name="user"/> <br/>
        <label htmlFor="password">Last name:</label>
        <input type="password" id="password" name="password"/>
        <input type="submit" value="Submit"></input>
    </form> 
  )
}
export async function getStaticProps() {
  const url = {url: process.env.BACKEND}
  return { props: url };
}

export default LoginPage
