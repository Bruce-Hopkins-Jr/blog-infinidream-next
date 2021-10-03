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
<<<<<<< HEAD
export default Form
=======
export default Form
>>>>>>> 9ce1eef8da080438492db63ab3078aa0f7ccbb88
