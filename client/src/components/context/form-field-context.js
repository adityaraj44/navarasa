import React, { createContext, useState } from "react";

const FormFieldContext = createContext();

export const FormFieldProvider = ({ children }) => {
  const [authFields, setAuthFields] = useState({
    username: "",
    password: "",
  });
  const [formFields, setFormFields] = useState({
    submittername: "",
    role: "",
    email: "",
    country: "",
    contact: "",
    state: "",
    city: "",
    postaladdress: "",
    audio: "",
    songtitle: "",
    artist: "",
    artistCategory: "",
    instagram: "",
    youtube: "",
    twitter: "",
    additionalinfo: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [authErrors, setAuthErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^[6-9]{1}[0-9]{9}$/;
    if (!values.submittername) {
      errors.submittername = "Please enter your full name.";
    }
    if (!values.email) {
      errors.email = " Please enter a valid email.";
    } else if (!regex.test(values.email)) {
      errors.email = " Please enter a valid email.";
    }
    if (!values.role) {
      errors.role = "Please enter your role in the song.";
    }
    if (!values.country) {
      errors.country = "Please select your country.";
    }
    if (!values.state) {
      errors.state = "Please select your state.";
    }
    if (!values.city) {
      errors.city = "Please select your city.";
    }
    if (!values.contact) {
      errors.contact = "Please enter your mobile number.";
    } else if (values.contact.length < 10 || values.contact.length > 10) {
      errors.contact = "Please enter your mobile number.";
    } else if (!phoneRegex.test(values.contact)) {
      errors.contact = "Please enter your mobile number.";
    }
    if (!values.postaladdress) {
      errors.postaladdress = "Please enter your postal address.";
    }
    if (!values.audio) {
      errors.audio = "Please upload your song.";
    }
    if (!values.songtitle) {
      errors.songtitle = "Please enter your song title.";
    }
    if (!values.artist) {
      errors.artist = "Please enter the song artist name.";
    }
    if (!values.artistCategory) {
      errors.artistCategory = "Please pick an artist category.";
    }

    return errors;
  };

  const authValidate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Please enter username";
    }

    if (!values.password) {
      errors.password = "Please enter your password.";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    return errors;
  };

  return (
    <FormFieldContext.Provider
      value={{
        formFields,
        setFormFields,
        validate,
        formErrors,
        setFormErrors,
        authFields,
        setAuthFields,
        authValidate,
        authErrors,
        setAuthErrors,
      }}
    >
      {children}
    </FormFieldContext.Provider>
  );
};

export default FormFieldContext;
