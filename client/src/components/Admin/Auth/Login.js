import { Box, FormControl, Input, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import AdminNavbar from "../AdminNavbar";

const Login = () => {
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
      <AdminNavbar />
      <motion.div>
        <Box className="bgPurple">
          <Box minHeight="550px" maxWidth="1125px" mx="auto">
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
                <form className="mt-4">
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
                    />
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
                    />
                  </FormControl>
                  <Box
                    fontSize="16px"
                    className="form-control mt-2"
                    textAlign="right"
                  >
                    <motion.button
                      type="submit"
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
                </form>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Login;
