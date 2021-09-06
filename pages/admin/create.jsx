import React from "react";
import CreatePageForm from "../../components/createPageForm"
import LoginVerifiacation from '../../components/loginVerifiacation'


const Form = () => {
  return (
    <LoginVerifiacation>

      <CreatePageForm url={'http://localhost:5000/'+ "/api/post/create"}/>
    </LoginVerifiacation>
  );
};

export default Form