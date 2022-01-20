import React from "react";
//import Contact from "../components/forms/Contact";

import ContactForm from "../components/forms/ContactForm";
import ContactDogForm from "../components/forms/ContactDogForm";
const ContactFormPage = () => {
  return (
    <>
      <ContactForm />
      <hr />

      <ContactDogForm />
    </>
  );
};

export default ContactFormPage;
