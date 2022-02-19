import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../custom-hooks";
import SubmitEntry from "./SubmitEntry";

const SubmitInfo = () => {
  const isSmall = useMediaQuery("(max-width:992px)");

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
                    isRequired
                    placeholder="Full name"
                    fontSize="18px"
                    id="submittername"
                    name="submittername"
                    type="text"
                  />
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
                    isRequired
                    placeholder="Composer, Band Manager, Etc"
                    fontSize="18px"
                    id="role"
                    name="role"
                    type="text"
                  />
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
                    isRequired
                    placeholder="contact@email.com"
                    fontSize="18px"
                    id="email"
                    name="email"
                    type="email"
                  />
                </FormControl>
                {!isSmall && (
                  <>
                    <Flex
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <FormControl className="form-control mr-3">
                        <FormLabel
                          className="form-label text-purpleLight font-bold"
                          fontSize="16px"
                          htmlFor="country"
                        >
                          India
                        </FormLabel>
                        <div className="select-wrapper">
                          <select
                            className="text-white bgPinkLight select mt-2 mb-4"
                            name="country"
                            id="country"
                            required
                          >
                            <option value="india">India</option>
                          </select>
                        </div>
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
                            width="80px"
                            className="input bgWhite mt-2 mb-4 mr-3 text-grey"
                            borderRadius="2px"
                            size="md"
                            defaultValue="+91"
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
                            isRequired
                            placeholder="9XXXX-XXXXX"
                            fontSize="18px"
                            id="contact"
                            name="contact"
                            type="text"
                          />
                        </InputGroup>
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
                            required
                          >
                            <option value="tamilnadu">Tamil Nadu</option>
                          </select>
                        </div>
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
                            required
                          >
                            <option value="chennai">Chennai</option>
                          </select>
                        </div>
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
                        India
                      </FormLabel>
                      <div className="select-wrapper">
                        <select
                          className="text-white bgPinkLight select mt-2 mb-4"
                          name="country"
                          id="country"
                          required
                        >
                          <option value="india">India</option>
                        </select>
                      </div>
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
                            defaultValue="+91"
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
                            isRequired
                            placeholder="9XXXX-XXXXX"
                            fontSize="18px"
                            id="contact"
                            name="contact"
                            type="text"
                          />
                        </InputGroup>
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
                          required
                        >
                          <option value="tamilnadu">Tamil Nadu</option>
                        </select>
                      </div>
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
                          required
                        >
                          <option value="chennai">Chennai</option>
                        </select>
                      </div>
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
                    isRequired
                    placeholder="42 Varsham Street, Chennai 400750"
                    fontSize="18px"
                    id="postaladdress"
                    name="postaladdress"
                    type="text"
                  />
                </FormControl>
                <Box className="mt-4 mb-4">
                  <p className="text-purpleLight form-info">
                    We will only contact you regarding Navarasa Creative’s
                    competitions and your personal data will not be used for any
                    other purposes. Read our{" "}
                    <Link to="/" className="font-bold">
                      Privacy Policy
                    </Link>{" "}
                    for more details.
                  </p>
                </Box>
                <Box className="mt-4 mb-4" textAlign="center">
                  <Link
                    to="/submitsong"
                    className="text-white  bgPurpleLight continueBtn"
                  >
                    Continue
                  </Link>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default SubmitInfo;
