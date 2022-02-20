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

  const [validSubmittername, setValidSubmittername] = React.useState(null);
  const [validRole, setValidRole] = React.useState(null);
  const [validEmail, setValidEmail] = React.useState(null);
  const [validCountry, setValidCountry] = React.useState(null);
  const [validContact, setValidContact] = React.useState(null);
  const [validState, setValidState] = React.useState(null);
  const [validCity, setValidCity] = React.useState(null);
  const [validAddress, setValidAddress] = React.useState(null);

  const validateFields = () => {
    if (
      formFields.submittername === "" ||
      formFields.submittername === null ||
      formFields.submittername === undefined ||
      formFields.submittername === " " ||
      formFields.submittername.length < 1
    ) {
      setValidSubmittername(false);
    } else {
      setValidSubmittername(true);
    }
    if (
      formFields.role === "" ||
      formFields.role === null ||
      formFields.role === undefined ||
      formFields.role === " " ||
      formFields.role.length < 1
    ) {
      setValidRole(false);
    } else {
      setValidRole(true);
    }
    if (
      formFields.email === "" ||
      formFields.email === null ||
      formFields.email === undefined ||
      formFields.email === " " ||
      formFields.email.length < 1
    ) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
    if (
      formFields.country === "" ||
      formFields.country === null ||
      formFields.country === undefined ||
      formFields.country === " " ||
      formFields.country.length < 1
    ) {
      setValidCountry(false);
    } else {
      setValidCountry(true);
    }
    if (
      formFields.contact === "" ||
      formFields.contact === null ||
      formFields.contact === undefined ||
      formFields.contact === " " ||
      formFields.contact.length < 10
    ) {
      setValidContact(false);
    } else {
      setValidContact(true);
    }

    if (
      formFields.state === "" ||
      formFields.state === null ||
      formFields.state === undefined ||
      formFields.state === " " ||
      formFields.state.length < 1
    ) {
      setValidState(false);
    } else {
      setValidState(true);
    }
    if (
      formFields.city === "" ||
      formFields.city === null ||
      formFields.city === undefined ||
      formFields.city === " " ||
      formFields.city.length < 1
    ) {
      setValidCity(false);
    } else {
      setValidCity(true);
    }
    if (
      formFields.postaladdress === "" ||
      formFields.postaladdress === null ||
      formFields.postaladdress === undefined ||
      formFields.postaladdress === " " ||
      formFields.postaladdress.length < 1
    ) {
      setValidAddress(false);
    } else {
      setValidAddress(true);
    }
  };

  return (
    <FormFieldContext.Provider
      value={{
        formFields,
        setFormFields,
        validSubmittername,
        validRole,
        validEmail,
        validCountry,
        validContact,
        validState,
        validCity,
        validAddress,
        validateFields,
      }}
    >
      {children}
    </FormFieldContext.Provider>
  );
};

export default FormFieldContext;
