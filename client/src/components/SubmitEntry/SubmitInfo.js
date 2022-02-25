import {
  Alert,
  AlertDescription,
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
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../custom-hooks";
import FormFieldContext from "../context/form-field-context";
import SubmitEntry from "./SubmitEntry";
import { Country, State, City } from "country-state-city";

const SubmitInfo = () => {
  const isSmall = useMediaQuery("(max-width:992px)");
  const history = useHistory();

  const formContext = useContext(FormFieldContext);
  const {
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
  } = formContext;

  const handleOnChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    validateFields();
  }, [validateFields]);

  const toast = useToast();
  const handleInfoContinue = (e) => {
    e.preventDefault();

    if (
      validSubmittername === true &&
      validRole === true &&
      validEmail === true &&
      validCountry === true &&
      validContact === true &&
      validState === true &&
      validCity === true &&
      validAddress === true
    ) {
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
  };

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
  const countries = Country.getAllCountries();

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }));

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

  const getPhoneCode = (countryId) => {
    const resp = Country.getCountryByCode(countryId);
    return resp;
  };

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
                    {validSubmittername === false && (
                      <FormHelperText>
                        <Alert className="mb-4 text-dark" status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>Name required!</AlertTitle>
                          <AlertDescription>
                            You have to enter your name.
                          </AlertDescription>
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
                    {validRole === false && (
                      <FormHelperText>
                        <Alert className="mb-4 text-dark" status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>Role required!</AlertTitle>
                          <AlertDescription>
                            You role in the song is required.
                          </AlertDescription>
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
                    {validEmail === false && (
                      <FormHelperText>
                        <Alert className="mb-4 text-dark" status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>Email required!</AlertTitle>
                          <AlertDescription>Enter your email.</AlertDescription>
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
                              {updatedCountries &&
                                updatedCountries.map((updatedCountry) => {
                                  return (
                                    <option
                                      key={updatedCountry.isoCode}
                                      value={`${updatedCountry.label},${updatedCountry.isoCode}`}
                                    >
                                      {updatedCountry.label}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                          {validCountry === false && (
                            <FormHelperText>
                              <Alert className="mb-4 text-dark" status="error">
                                <AlertIcon />
                                <AlertTitle mr={2}>
                                  Country required!
                                </AlertTitle>
                                <AlertDescription>
                                  Select your country.
                                </AlertDescription>
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
                              placeholder={
                                formFields.country !== ""
                                  ? getPhoneCode(
                                      formFields.country.split(",")[1]
                                    ).phonecode
                                  : "91"
                              }
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
                              pattern="[1-9]{10}"
                              value={formFields.contact}
                              onChange={handleOnChange}
                            />
                          </InputGroup>
                          {validContact === false && (
                            <FormHelperText>
                              <Alert className="mb-4 text-dark" status="error">
                                <AlertIcon />
                                <AlertTitle mr={2}>
                                  Enter your contact number!
                                </AlertTitle>
                                <AlertDescription>
                                  Please enter a valid contact number.
                                </AlertDescription>
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
                          {validState === false && (
                            <FormHelperText>
                              <Alert className="mb-4 text-dark" status="error">
                                <AlertIcon />
                                <AlertTitle mr={2}>State required!</AlertTitle>
                                <AlertDescription>
                                  Select your state.
                                </AlertDescription>
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
                          {validCity === false && (
                            <FormHelperText>
                              <Alert className="mb-4 text-dark" status="error">
                                <AlertIcon />
                                <AlertTitle mr={2}>City required!</AlertTitle>
                                <AlertDescription>
                                  Select your city.
                                </AlertDescription>
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
                            {updatedCountries &&
                              updatedCountries.map((updatedCountry) => {
                                return (
                                  <option
                                    key={updatedCountry.isoCode}
                                    value={`${updatedCountry.label},${updatedCountry.isoCode}`}
                                  >
                                    {updatedCountry.label}
                                  </option>
                                );
                              })}
                          </select>
                        </div>
                        {validCountry === false && (
                          <FormHelperText>
                            <Alert className="mb-4 text-dark" status="error">
                              <AlertIcon />
                              <AlertTitle mr={2}>Country required!</AlertTitle>
                              <AlertDescription>
                                Select your country.
                              </AlertDescription>
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
                              placeholder={
                                formFields.country !== ""
                                  ? getPhoneCode(
                                      formFields.country.split(",")[1]
                                    ).phonecode
                                  : "91"
                              }
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
                          {validContact === false && (
                            <FormHelperText>
                              <Alert className="mb-4 text-dark" status="error">
                                <AlertIcon />
                                <AlertTitle mr={2}>
                                  Enter your contact number!
                                </AlertTitle>
                                <AlertDescription>
                                  Please enter a valid contact number.
                                </AlertDescription>
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
                        {validState === false && (
                          <FormHelperText>
                            <Alert className="mb-4 text-dark" status="error">
                              <AlertIcon />
                              <AlertTitle mr={2}>State required!</AlertTitle>
                              <AlertDescription>
                                Select your state.
                              </AlertDescription>
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
                        {validCity === false && (
                          <FormHelperText>
                            <Alert className="mb-4 text-dark" status="error">
                              <AlertIcon />
                              <AlertTitle mr={2}>City required!</AlertTitle>
                              <AlertDescription>
                                Select your city.
                              </AlertDescription>
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
                    {validAddress === false && (
                      <FormHelperText>
                        <Alert className="mb-4 text-dark" status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>Address required!</AlertTitle>
                          <AlertDescription>
                            Enter your postal address.
                          </AlertDescription>
                        </Alert>
                      </FormHelperText>
                    )}
                  </FormControl>
                  <Box className="mt-4 mb-4">
                    <p className="text-purpleLight form-info">
                      We will only contact you regarding Navarasa Creative’s
                      competitions and your personal data will not be used for
                      any other purposes. Read our{" "}
                      <Link
                        to="/"
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
                      type="submit"
                      onClick={handleInfoContinue}
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          type: "spring",

                          damping: 10,
                          yoyo: "Infinity",
                          duration: 0.5,
                        },
                      }}
                      whileTap={{
                        scale: 1.1,
                        transition: {
                          type: "spring",

                          damping: 10,
                          yoyo: "Infinity",
                          duration: 0.5,
                        },
                      }}
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
