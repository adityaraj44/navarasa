import React, { createContext, useState } from "react";

const FormFieldContext = createContext();

export const FormFieldProvider = ({ children }) => {
  const [formFields, setFormFields] = useState({
    submittername: "",
    role: "",
    email: "",
    country: "",
    contact: "",
    state: "",
    city: "",
    postaladdress: "",
  });

  return (
    <FormFieldContext.Provider value={{ formFields, setFormFields }}>
      {children}
    </FormFieldContext.Provider>
  );
};

export default FormFieldContext;
