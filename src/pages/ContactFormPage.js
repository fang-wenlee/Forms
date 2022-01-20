import React from "react";
//import Contact from "../components/forms/Contact";

import ContactForm from "../components/forms/ContactForm";
//import ContactDogForm from "../components/forms/ContactDogForm";
import LoginForm from "../components/forms/LoginForm";

const ContactFormPage = () => {
  return (
    <>
      <ContactForm />
      <hr />

      {/* <ContactDogForm /> */}
      <hr />

      <LoginForm />
    </>
  );
};

export default ContactFormPage;
