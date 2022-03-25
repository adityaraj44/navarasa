import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../custom-hooks";
import FormFieldContext from "../context/form-field-context";
import SubmitEntry from "./SubmitEntry";
import { Country, State, City } from "country-state-city";

const SubmitInfo = () => {
  const isSmall = useMediaQuery("(max-width:992px)");
  const history = useHistory();
  const continueRef = useRef();

  const formContext = useContext(FormFieldContext);
  const { formFields, setFormFields } = formContext;

  const [formErrors, setFormErrors] = useState({});

  const handleOnChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const toast = useToast();

  const handleInfoContinue = (e) => {
    e.preventDefault();

    setFormErrors(validate(formFields));

    handleFormChange();
  };

  const handleFormChange = () => {
    const res = validate(formFields);

    setTimeout(() => {
      if (Object.keys(res).length === 0) {
        history.push("/submitsong");
      } else {
        toast({
          title: "All fields are required",
          description: "Please fill up all the fields to proceed.",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    }, 1000);
  };

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

    return errors;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fieldsVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 0.8,
      },
    },
  };

  // countries-states-cities
  const country = Country.getCountryByCode("IN");

  const updatedStates = (countryId) =>
    State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.id,
      ...state,
    }));
  const updatedCities = (countryId, stateId) =>
    City.getCitiesOfState(countryId, stateId).map((city) => ({
      label: city.name,
      value: city.id,
      ...city,
    }));

  return (
    <>
      <SubmitEntry />
      <motion.div>
        <Box className="bgPurple">
          <Box maxWidth="1125px" mx="auto">
            <motion.div
              variants={fieldsVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Box
                mx="auto"
                maxWidth="900px"
                className={isSmall ? "px-mobile" : "px"}
              >
                <form>
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="submittername"
                    >
                      Submitter's real name
                    </FormLabel>
                    <Input
                      className="input bgWhite mt-2 mb-4 text-grey"
                      borderRadius="2px"
                      size="md"
                      //   isRequired
                      placeholder="Full name"
                      fontSize="18px"
                      id="submittername"
                      name="submittername"
                      type="text"
                      value={formFields.submittername}
                      onChange={handleOnChange}
                    />
                    {formErrors.submittername && (
                      <FormHelperText>
                        <Alert className="mb-4 text-dark" status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>
                            Please enter your full name.
                          </AlertTitle>
                        </Alert>
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="role"
                    >
                      Role in the song
                    </FormLabel>
                    <Input
                      className="input bgWhite mt-2 mb-4 text-grey"
                      borderRadius="2px"
                      size="md"
                      //   isRequired
                      placeholder="Composer, Band Manager, Etc"
                      fontSize="18px"
                      id="role"
                      name="role"
                      type="text"
                      value={formFields.role}
                      onChange={handleOnChange}
                    />
                    {formErrors.role && (
                      <FormHelperText>
                        <Alert className="mb-4 text-dark" status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>
                            Please enter your role in the song.
                          </AlertTitle>
                        </Alert>
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="email"
                    >
                      Email address
                    </FormLabel>
                    <Input
                      className="input bgWhite mt-2 mb-4 text-grey"
                      borderRadius="2px"
                      size="md"
                      //   isRequired
                      placeholder="contact@email.com"
                      fontSize="18px"
                      id="email"
                      name="email"
                      type="email"
                      value={formFields.email}
                      onChange={handleOnChange}
                    />
                    {formErrors.email && (
                      <FormHelperText>
                        <Alert className="mb-4 text-dark" status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>
                            Please enter a valid email.
                          </AlertTitle>
                        </Alert>
                      </FormHelperText>
                    )}
                  </FormControl>
                  {!isSmall && (
                    <>
                      <Flex
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="start"
                      >
                        <FormControl className="form-control mr-3">
                          <FormLabel
                            className="form-label text-purpleLight font-bold"
                            fontSize="16px"
                            htmlFor="country"
                          >
                            Country
                          </FormLabel>
                          <div className="select-wrapper">
                            <select
                              className="text-white bgPinkLight select mt-2 mb-4"
                              name="country"
                              id="country"
                              value={formFields.country}
                              onChange={handleOnChange}
                            >
                              <option value="">Select country</option>
                              {country && (
                                <option
                                  value={`${country.name},${country.isoCode}`}
                                >
                                  {country.name}
                                </option>
                              )}
                            </select>
                          </div>
                          {formErrors.country && (
                            <FormHelperText>
                              <Alert className="mb-4 text-dark" status="error">
                                <AlertIcon />
                                <AlertTitle mr={2}>
                                  Please select your country.
                                </AlertTitle>
                              </Alert>
                            </FormHelperText>
                          )}
                        </FormControl>
                        <FormControl className="form-control">
                          <FormLabel
                            className="form-label text-purpleLight font-bold"
                            fontSize="16px"
                            htmlFor="contact"
                          >
                            Contact number
                          </FormLabel>
                          <InputGroup>
                            <Input
                              width="100px"
                              className="input bgWhite mt-2 mb-4 mr-3 text-grey"
                              borderRadius="2px"
                              size="md"
                              readOnly
                              placeholder="+91"
                              fontSize="18px"
                              id="countrycode"
                              name="countrycode"
                              type="text"
                            />
                            <Input
                              width={"200px"}
                              className="input bgWhite mt-2 mb-4 text-grey"
                              borderRadius="2px"
                              size="md"
                              placeholder="9XXXX-XXXXX"
                              fontSize="18px"
                              id="contact"
                              name="contact"
                              type="tel"
                              pattern="^[6-9]{1}[0-9]{9}$"
                              value={formFields.contact}
                              onChange={handleOnChange}
                            />
                          </InputGroup>
                          {formErrors.contact && (
                            <FormHelperText>
                              <Alert className="mb-4 text-dark" status="error">
                                <AlertIcon />
                                <AlertTitle mr={2}>
                                  Please enter your mobile number.
                                </AlertTitle>
                              </Alert>
                            </FormHelperText>
                          )}
                        </FormControl>
                      </Flex>
                      <Flex
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <FormControl className="form-control mr-3">
                          <FormLabel
                            className="form-label text-purpleLight font-bold"
                            fontSize="16px"
                            htmlFor="state"
                          >
                            State
                          </FormLabel>
                          <div className="select-wrapper">
                            <select
                              className="text-white bgPinkLight select mt-2 mb-4"
                              name="state"
                              id="state"
                              value={formFields.state}
                              onChange={handleOnChange}
                            >
                              <option value="">Select state</option>
                              {updatedStates(
                                formFields.country !== ""
                                  ? formFields.country.split(",")[1]
                                  : null
                              ).map((updatedState) => {
                                return (
                                  <option
                                    key={updatedState.isoCode}
                                    value={`${updatedState.label},${updatedState.isoCode}`}
                                  >
                                    {updatedState.label}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          {formErrors.state && (
                            <FormHelperText>
                              <Alert className="mb-4 text-dark" status="error">
                                <AlertIcon />
                                <AlertTitle mr={2}>
                                  Please select your state.
                                </AlertTitle>
                              </Alert>
                            </FormHelperText>
                          )}
                        </FormControl>
                        <FormControl className="form-control">
                          <FormLabel
                            className="form-label text-purpleLight font-bold"
                            fontSize="16px"
                            htmlFor="city"
                          >
                            City
                          </FormLabel>
                          <div className="select-wrapper">
                            <select
                              className="text-white bgPinkLight select mt-2 mb-4"
                              name="city"
                              id="city"
                              value={formFields.city}
                              onChange={handleOnChange}
                            >
                              <option value="">Select city</option>
                              {updatedCities(
                                formFields.country.split(",")[1],
                                formFields.state.split(",")[1]
                              ).map((updatedCity) => {
                                return (
                                  <option
                                    key={updatedCity.label}
                                    value={updatedCity.label}
                                  >
                                    {updatedCity.label}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          {formErrors.city && (
                            <FormHelperText>
                              <Alert className="mb-4 text-dark" status="error">
                                <AlertIcon />
                                <AlertTitle mr={2}>
                                  Please select your city.
                                </AlertTitle>
                              </Alert>
                            </FormHelperText>
                          )}
                        </FormControl>
                      </Flex>
                    </>
                  )}
                  {isSmall && (
                    <>
                      <FormControl className="form-control mr-3">
                        <FormLabel
                          className="form-label text-purpleLight font-bold"
                          fontSize="16px"
                          htmlFor="country"
                        >
                          Country
                        </FormLabel>
                        <div className="select-wrapper">
                          <select
                            className="text-white bgPinkLight select mt-2 mb-4"
                            name="country"
                            id="country"
                            value={formFields.country}
                            onChange={handleOnChange}
                          >
                            <option value="">Select your country</option>
                            {country && (
                              <option
                                value={`${country.name},${country.isoCode}`}
                              >
                                {country.name}
                              </option>
                            )}
                          </select>
                        </div>
                        {formErrors.country && (
                          <FormHelperText>
                            <Alert className="mb-4 text-dark" status="error">
                              <AlertIcon />
                              <AlertTitle mr={2}>
                                Please select your country.
                              </AlertTitle>
                            </Alert>
                          </FormHelperText>
                        )}
                      </FormControl>
                      <Flex
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <FormControl className="form-control">
                          <FormLabel
                            className="form-label text-purpleLight font-bold"
                            fontSize="16px"
                            htmlFor="contact"
                          >
                            Contact number
                          </FormLabel>
                          <InputGroup>
                            <Input
                              width="70px"
                              className="input bgWhite mt-2 mb-4 mr-3 text-grey"
                              borderRadius="2px"
                              size="md"
                              readOnly
                              placeholder="+91"
                              fontSize="18px"
                              id="countrycode"
                              name="countrycode"
                              type="text"
                            />
                            <Input
                              className="input bgWhite mt-2 mb-4 text-grey"
                              borderRadius="2px"
                              size="md"
                              placeholder="9XXXX-XXXXX"
                              fontSize="18px"
                              id="contact"
                              name="contact"
                              type="tel"
                              pattern="[1-9]{10}"
                              value={formFields.contact}
                              onChange={handleOnChange}
                            />
                          </InputGroup>
                          {formErrors.contact && (
                            <FormHelperText>
                              <Alert className="mb-4 text-dark" status="error">
                                <AlertIcon />
                                <AlertTitle mr={2}>
                                  Please enter your mobile number.
                                </AlertTitle>
                              </Alert>
                            </FormHelperText>
                          )}
                        </FormControl>
                      </Flex>
                      <FormControl className="form-control">
                        <FormLabel
                          className="form-label text-purpleLight font-bold"
                          fontSize="16px"
                          htmlFor="state"
                        >
                          State
                        </FormLabel>
                        <div className="select-wrapper">
                          <select
                            className="text-white bgPinkLight select mt-2 mb-4"
                            name="state"
                            id="state"
                            value={formFields.state}
                            onChange={handleOnChange}
                          >
                            <option value="">Select state</option>
                            {updatedStates(
                              formFields.country !== ""
                                ? formFields.country.split(",")[1]
                                : null
                            ).map((updatedState) => {
                              return (
                                <option
                                  key={updatedState.isoCode}
                                  value={`${updatedState.label},${updatedState.isoCode}`}
                                >
                                  {updatedState.label}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        {formErrors.state && (
                          <FormHelperText>
                            <Alert className="mb-4 text-dark" status="error">
                              <AlertIcon />
                              <AlertTitle mr={2}>
                                Please select your state.
                              </AlertTitle>
                            </Alert>
                          </FormHelperText>
                        )}
                      </FormControl>
                      <FormControl className="form-control">
                        <FormLabel
                          className="form-label text-purpleLight font-bold"
                          fontSize="16px"
                          htmlFor="city"
                        >
                          City
                        </FormLabel>
                        <div className="select-wrapper">
                          <select
                            className="text-white bgPinkLight select mt-2 mb-4"
                            name="city"
                            id="city"
                            value={formFields.city}
                            onChange={handleOnChange}
                          >
                            <option value="">Select city</option>
                            {updatedCities(
                              formFields.country.split(",")[1],
                              formFields.state.split(",")[1]
                            ).map((updatedCity) => {
                              return (
                                <option
                                  key={updatedCity.label}
                                  value={updatedCity.label}
                                >
                                  {updatedCity.label}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        {formErrors.city && (
                          <FormHelperText>
                            <Alert className="mb-4 text-dark" status="error">
                              <AlertIcon />
                              <AlertTitle mr={2}>
                                Please select your city.
                              </AlertTitle>
                            </Alert>
                          </FormHelperText>
                        )}
                      </FormControl>
                    </>
                  )}
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="postaladdress"
                    >
                      Postal address
                    </FormLabel>
                    <Input
                      className="input bgWhite mt-2 mb-4 text-grey"
                      borderRadius="2px"
                      size="md"
                      placeholder="42 Varsham Street, Chennai 400750"
                      fontSize="18px"
                      id="postaladdress"
                      name="postaladdress"
                      type="text"
                      value={formFields.postaladdress}
                      onChange={handleOnChange}
                    />
                    {formErrors.postaladdress && (
                      <FormHelperText>
                        <Alert className="mb-4 text-dark" status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>
                            Please enter your postal address.
                          </AlertTitle>
                        </Alert>
                      </FormHelperText>
                    )}
                  </FormControl>
                  <Box className="mt-4 mb-4">
                    <p className="text-purpleLight form-info">
                      We will only contact you regarding Adinova Creative’s
                      competitions and your personal data will not be used for
                      any other purposes. Read our{" "}
                      <Link
                        to="/privacypolicy"
                        target="_blank"
                        className="font-bold"
                        style={{
                          textDecoration: "underline",
                        }}
                      >
                        Privacy Policy
                      </Link>{" "}
                      for more details.
                    </p>
                  </Box>
                  <Box className="mt-4 mb-4 form-control" textAlign="center">
                    <motion.button
                      ref={continueRef}
                      type="submit"
                      onClick={handleInfoContinue}
                      className="text-white  bgPurpleLight continueBtn"
                      style={{
                        margin: "0 auto",
                      }}
                    >
                      Continue
                    </motion.button>
                  </Box>
                </form>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default SubmitInfo;
