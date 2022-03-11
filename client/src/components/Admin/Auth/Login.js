import React, { useContext, useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  FormControl,
  FormHelperText,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import AdminNavbar from "../AdminNavbar";
import FormFieldContext from "../../context/form-field-context";
import ApiContext from "../../context/api-context";
import { useHistory } from "react-router-dom";

const Login = () => {
  const toast = useToast();
  const fieldsContext = useContext(FormFieldContext);
  const { authFields, setAuthFields, authValidate, authErrors, setAuthErrors } =
    fieldsContext;

  const apiContext = useContext(ApiContext);
  const { loginAdmin } = apiContext;

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

  const handleChange = (e) => {
    setAuthFields({ ...authFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthErrors(authValidate(authFields));
    await handleFormChange();
  };

  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const handleFormChange = async () => {
    const res = authValidate(authFields);

    if (Object.keys(res).length === 0) {
      setIsLoading(true);
      await loginAdmin(authFields);
      setIsLoading(false);
      if (localStorage.getItem("navarasa-auth-token")) {
        history.push("/notes");
      }
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

  return (
    <>
      {isLoading ? (
        <Box
          width="100vw"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="bgPurple"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#fad01c"
            size="xl"
          />
        </Box>
      ) : (
        <>
          <AdminNavbar />
          <motion.div>
            <Box className="bgPurple">
              <Box minHeight="100vh" maxWidth="1125px" mx="auto">
                <motion.div
                  variants={fieldsVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Box padding="30px 30px" mx="auto" maxWidth="500px">
                    <Text
                      textAlign="center"
                      className="text-yellow font-bold"
                      fontSize="20px"
                    >
                      Log in to access Admin Portal
                    </Text>
                    <Box className="mt-4">
                      <FormControl className="form-control">
                        <Input
                          className="input bgWhite mt-2 mb-4 text-grey"
                          borderRadius="2px"
                          size="md"
                          //   isRequired
                          placeholder="Username"
                          fontSize="18px"
                          id="username"
                          name="username"
                          type="text"
                          value={authFields.username}
                          onChange={handleChange}
                        />
                        {authErrors.username && (
                          <FormHelperText>
                            <Alert className="mb-4 text-dark" status="error">
                              <AlertIcon />
                              <AlertTitle mr={2}>
                                Please enter username.
                              </AlertTitle>
                            </Alert>
                          </FormHelperText>
                        )}
                      </FormControl>
                      <FormControl className="form-control">
                        <Input
                          className="input bgWhite mt-2 mb-4 text-grey"
                          borderRadius="2px"
                          size="md"
                          //   isRequired
                          placeholder="Password"
                          fontSize="18px"
                          id="password"
                          name="password"
                          type="password"
                          value={authFields.password}
                          onChange={handleChange}
                        />
                        {authErrors.password && (
                          <FormHelperText>
                            <Alert className="mb-4 text-dark" status="error">
                              <AlertIcon />
                              <AlertTitle mr={2}>
                                {authErrors.password}
                              </AlertTitle>
                            </Alert>
                          </FormHelperText>
                        )}
                      </FormControl>
                      <Box
                        fontSize="16px"
                        className="form-control mt-2"
                        textAlign="right"
                      >
                        <motion.button
                          type="submit"
                          onClick={handleSubmit}
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
                          className="text-yellow bgPink font-bold loginBtn"
                          style={{
                            margin: "0 auto",
                          }}
                        >
                          Log in
                        </motion.button>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Login;
