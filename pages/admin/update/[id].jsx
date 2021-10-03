
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import LoginVerifiacation from '../../../components/loginVerifiacation'

import CreatePageForm from "../../../components/createPageForm"

const UpdatePage = (props) => {
  return (

    <LoginVerifiacation url={props.url}>

      <CreatePageForm url={props.url + "/api/post/" + props.id + "/update"} data={props.data} id={props.id}/>
    </LoginVerifiacation>
  );
};

export async function getStaticPaths() {
  const posts = await axios.get(process.env.BACKEND + '/api/posts/')
  const paths = posts.data.map((post) => ({
    params: { id: post._id },
  }))

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}


export async function getStaticProps(post) {
  const data = await axios.get( process.env.BACKEND + '/api/posts/' + post.params.id)
  const props = {
    url: process.env.BACKEND,
    id: post.params.id,
    data: data.data
  }
  return { props: props}
}

export default UpdatePage