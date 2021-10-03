import React from "react";
import CreatePageForm from "../../components/createPageForm"
import LoginVerifiacation from '../../components/loginVerifiacation'

// TODO, add .env and pass the url to LoginVerifiacation
const Form = (props) => {
  return (
    <LoginVerifiacation url={props.url}>
      <CreatePageForm url={props.url + "/api/post/create"}/>
    </LoginVerifiacation>
  );
};

export async function getStaticProps() {
  const url = {url: process.env.BACKEND}
  return { props: url };
}
export default Form
