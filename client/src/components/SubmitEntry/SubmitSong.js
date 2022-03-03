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
  Image,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../custom-hooks";
import instagram from "../../imgs/instagram.svg";
import twitter from "../../imgs/twitter.svg";
import youtube from "../../imgs/youtube.svg";
import FormFieldContext from "../context/form-field-context";

import SubmitEntry from "./SubmitEntry";

const SubmitSong = () => {
  const isSmall = useMediaQuery("(max-width:992px)");
  const history = useHistory();
  const formContext = useContext(FormFieldContext);
  const toast = useToast();
  const { formFields, setFormFields, validate, formErrors, setFormErrors } =
    formContext;

  const handleOnChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnFileInput = (e) => {
    let file = e.target.files[0];
    if (file) {
      if (file.size > 25000000) {
        toast({
          title: "Size limit",
          description: "File size should not exceed 25 MB.",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      } else {
        setFormFields({
          ...formFields,
          [e.target.name]: file,
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formFields));
    handleFormChange();
  };

  const handleFormChange = () => {
    const res = validate(formFields);

    setTimeout(() => {
      if (Object.keys(res).length === 0) {
        history.push("/finalizeentry");
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

  useEffect(() => {
    if (
      !formFields.submittername ||
      !formFields.role ||
      !formFields.email ||
      !formFields.country ||
      !formFields.state ||
      !formFields.city ||
      !formFields.postaladdress ||
      !formFields.contact
    ) {
      history.push("/submitentry");
    }
  }, [
    formFields.city,
    formFields.contact,
    formFields.country,
    formFields.email,
    formFields.postaladdress,
    formFields.role,
    formFields.state,
    formFields.submittername,
    history,
  ]);

  return (
    <>
      <SubmitEntry />
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
              <Text fontSize="16px" className="text-purpleLight font-bold mb-4">
                Upload song
              </Text>
              <FormControl>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className="audio-input-container bgPurpleDark mb-4"
                >
                  <Box fontSize="16px">
                    <p className="text-white">Pick an audio file to upload</p>{" "}
                    <p className="text-white">25 MB size limit</p>
                  </Box>
                  <Box className="form-control">
                    <label
                      htmlFor="audio"
                      className="text-white bgPinkLight audio-input-label"
                    >
                      {formFields.audio !== "" ? "Change" : "Browse"}
                    </label>
                    <input
                      onChange={handleOnFileInput}
                      type="file"
                      name="audio"
                      id="audio"
                      hidden
                      accept="audio/*"
                    />
                  </Box>
                </Flex>
                {formErrors.audio && (
                  <FormHelperText>
                    <Alert className="mb-4 text-dark" status="error">
                      <AlertIcon />
                      <AlertTitle mr={2}>Please upload your song.</AlertTitle>
                    </Alert>
                  </FormHelperText>
                )}
                {formFields.audio !== "" && (
                  <FormHelperText>
                    <Alert className="mb-4 text-dark" status="info">
                      <AlertIcon />

                      <AlertDescription>
                        {formFields.audio.name}
                      </AlertDescription>
                    </Alert>
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl className="form-control">
                <FormLabel
                  className="form-label text-purpleLight"
                  fontWeight="bold"
                  fontSize="16px"
                  htmlFor="songtitle"
                >
                  Song title
                </FormLabel>
                <Input
                  className="input bgWhite mt-2 mb-4 text-grey"
                  borderRadius="2px"
                  size="md"
                  isRequired
                  placeholder="Navarasa Naadi"
                  fontSize="18px"
                  id="songtitle"
                  name="songtitle"
                  type="text"
                  value={formFields.songtitle}
                  onChange={handleOnChange}
                />
                {formErrors.songtitle && (
                  <FormHelperText>
                    <Alert className="mb-4 text-dark" status="error">
                      <AlertIcon />
                      <AlertTitle mr={2}>
                        Please enter your song title.
                      </AlertTitle>
                    </Alert>
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl className="form-control">
                <FormLabel
                  className="form-label text-purpleLight"
                  fontWeight="bold"
                  fontSize="16px"
                  htmlFor="artist"
                >
                  Artist
                </FormLabel>
                <Input
                  className="input bgWhite mt-2 mb-4 text-grey"
                  borderRadius="2px"
                  size="md"
                  isRequired
                  placeholder="Navarasa Creative feat. Ashok"
                  fontSize="18px"
                  id="artist"
                  name="artist"
                  type="text"
                  value={formFields.artist}
                  onChange={handleOnChange}
                />
                {formErrors.artist && (
                  <FormHelperText>
                    <Alert className="mb-4 text-dark" status="error">
                      <AlertIcon />
                      <AlertTitle mr={2}>
                        Please enter the song artist name.
                      </AlertTitle>
                    </Alert>
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <Box className="select-wrapper form-control" fontSize="18px">
                  <select
                    className="text-white bgPinkLight select mt-2 mb-4"
                    name="artistCategory"
                    id="artistCategory"
                    placeholder="Pick an artist category"
                    value={formFields.artistCategory}
                    onChange={handleOnChange}
                    required
                  >
                    <option value="">Pick an artist category</option>
                    <option value="Composer">Composer</option>
                    <option value="Solo Artist">Solo Artist</option>
                    <option value="Musician">Musician</option>
                    <option value="Band">Band</option>
                    <option value="Collaboration">Collaboration</option>
                  </select>
                </Box>
                {formErrors.artistCategory && (
                  <FormHelperText>
                    <Alert className="mb-4 text-dark" status="error">
                      <AlertIcon />
                      <AlertTitle mr={2}>
                        Please pick an artist category.
                      </AlertTitle>
                    </Alert>
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl className="form-control">
                <FormLabel
                  className="form-label text-purpleLight"
                  fontWeight="bold"
                  fontSize="16px"
                  htmlFor="socialmedialinks"
                >
                  Social media links [optional]
                </FormLabel>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className="mt-4 mb-4"
                >
                  <Image
                    alt="instagram"
                    width="30px"
                    height="30px"
                    borderRadius="100%"
                    src={instagram}
                  />

                  <Input
                    className="input bgWhite ml-4 text-grey"
                    borderRadius="2px"
                    size="md"
                    placeholder="Instagram profile link"
                    fontSize="18px"
                    id="instagram"
                    name="instagram"
                    type="url"
                    value={formFields.instagram}
                    onChange={handleOnChange}
                  />
                </Flex>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className="mt-4 mb-4"
                >
                  <Image
                    alt="youtube"
                    width="30px"
                    height="30px"
                    borderRadius="100%"
                    src={youtube}
                  />

                  <Input
                    className="input bgWhite ml-4 text-grey"
                    borderRadius="2px"
                    size="md"
                    placeholder="Youtube channel link"
                    fontSize="18px"
                    id="youtube"
                    name="youtube"
                    type="url"
                    value={formFields.youtube}
                    onChange={handleOnChange}
                  />
                </Flex>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className="mt-4 mb-4"
                >
                  <Image
                    alt="twitter"
                    width="30px"
                    height="30px"
                    borderRadius="100%"
                    src={twitter}
                  />

                  <Input
                    className="input bgWhite ml-4 text-grey"
                    borderRadius="2px"
                    size="md"
                    placeholder="Twitter profile link"
                    fontSize="18px"
                    id="twitter"
                    name="twitter"
                    type="url"
                    value={formFields.twitter}
                    onChange={handleOnChange}
                  />
                </Flex>
              </FormControl>
              <FormControl className="form-control">
                <FormLabel
                  className="form-label text-purpleLight"
                  fontWeight="bold"
                  fontSize="16px"
                  htmlFor="additionalinfo"
                >
                  Additional info [optional]
                </FormLabel>
                <Textarea
                  className="input bgWhite mt-2 mb-4 text-grey"
                  borderRadius="2px"
                  size="md"
                  placeholder="More information you’d like to share about the song, the musicians involved or your musical journey."
                  fontSize="18px"
                  id="additionalinfo"
                  name="additionalinfo"
                  type="text"
                  rows="7"
                  value={formFields.additionalinfo}
                  onChange={handleOnChange}
                />
              </FormControl>
              <Flex
                className="mt-4 mb-4 font-bold text-white"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                fontSize="16px"
              >
                <Flex
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <BiChevronLeft
                    display="inline"
                    fontSize="16px"
                    className="text-white"
                  />
                  <Link to="/submitentry">Back</Link>
                </Flex>
                <motion.button
                  type="submit"
                  onClick={handleSubmit}
                  className="text-white form-control bgPurpleLight continueBtn"
                >
                  Continue
                </motion.button>
              </Flex>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default SubmitSong;
