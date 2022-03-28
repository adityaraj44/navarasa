import React, {  useContext, useEffect } from "react";
import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import NavbarHome from "./NavbarHome";
import HomeBanner from "../Banner/HomeBanner";
// import placeholder from "../../imgs/placeholder.JPG";
// import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../custom-hooks";
import gold from "../../imgs/gold.svg";
import silver from "../../imgs/silver.svg";
import bronze from "../../imgs/bronze.svg";
import ApiContext from "../context/api-context";
import parse from "html-react-parser";

const Home = () => {
  const apiContext = useContext(ApiContext);
  const { getSettings, homeDetail, isLoading } = apiContext;

  useEffect(() => {
    getSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isSmall = useMediaQuery("(max-width:992px)");
  const isXs = useMediaQuery("(max-width:480px)");

 

  return (
    <>
      {isLoading || homeDetail === null ? (
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
        <Box className="bgPurple">
          <NavbarHome />
          <motion.div
            exit={{
              height: "900px",
              transition: {
                type: "spring",
                delay: 0.5,
                duration: 0.8,
              },
            }}
            className="w-100 text-white dark-banner bgPurpleDark"
          >
            <HomeBanner homeDetail={homeDetail} />
            {isSmall && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: "100vh",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",

                  delay: 0.8,
                  duration: 0.8,
                }}
                exit={{
                  y: "100vh",
                  opacity: 0,
                  transition: {
                    ease: "easeInOut",
                    delay: "0.5",
                    duration: 0.6,
                  },
                }}
                style={{
                  padding: `${
                    isXs ? "65px  10px 0px 10px" : "85px  10px 0px 10px"
                  }`,
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  flexDirection="row"
                  alignItems="center"
                  className="bgPurpleDark home-banner-mobile-content"
                  border="3px solid #DD29A6"
                  borderRadius="5px"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      width="18px"
                      height="18px"
                      src={gold}
                      alt="gold_star"
                      className="mb-1"
                    />
                    <Text
                      className="text-purpleLight font-bold mb-1"
                      fontSize="14px"
                    >
                      1st Prize
                    </Text>
                    <Text
                      className="text-yellow"
                      fontWeight="black"
                      fontSize="18px"
                    >
                      Rs. {homeDetail.firstPrize.toLocaleString("en-IN")}
                    </Text>
                  </Box>
                  <Box
                    className="bgPink"
                    width="3px"
                    height="62px"
                    borderRadius="2px"
                  ></Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      width="18px"
                      height="18px"
                      src={silver}
                      alt="gold_star"
                      className="mb-1"
                    />
                    <Text
                      className="text-purpleLight font-bold mb-1"
                      fontSize="14px"
                    >
                      2nd Prize
                    </Text>
                    <Text
                      className="text-yellow"
                      fontWeight="black"
                      fontSize="18px"
                    >
                      Rs. {homeDetail.secondPrize.toLocaleString("en-IN")}
                    </Text>
                  </Box>
                  <Box
                    className="bgPink"
                    width="3px"
                    height="62px"
                    borderRadius="2px"
                  ></Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      width="18px"
                      height="18px"
                      src={bronze}
                      alt="gold_star"
                      className="mb-1"
                    />
                    <Text
                      className="text-purpleLight font-bold mb-1"
                      fontSize="14px"
                    >
                      3rd Prize
                    </Text>
                    <Text
                      className="text-yellow"
                      fontWeight="black"
                      fontSize="18px"
                    >
                      Rs. {homeDetail.thirdPrize.toLocaleString("en-IN")}
                    </Text>
                  </Box>
                </Box>
              </motion.div>
            )}
          </motion.div>
          <Box
            maxWidth="968px"
            mx="auto"
            className={`${isSmall ? "px-mobile" : "px-home"}`}
          >
            <motion.div
              className="video"
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                duration: 0.5,
                delay: 0.2,
              }}
              exit={{
                y: 100,
                opacity: 0,
                transition: {
                  ease: "easeInOut",
                  delay: "0.2",
                  duration: 0.6,
                },
              }}
            >
               <iframe
                title="video"
                className="video-frame"
                src="https://www.youtube.com/embed/bgrPoDw3MA4"
                      ></iframe>
            
             
            </motion.div>
          </Box>
          <Box maxWidth="1125px" mx="auto">
            <Box
              fontSize="20px"
              textAlign="center"
              fontWeight="bold"
              className="text-yellow mt-4"
            >
              <motion.p>Competition Details</motion.p>
            </Box>

            <Box
              fontSize="18px"
              className={`text-white ${isSmall ? "px-mobile" : "px-home"}`}
              textAlign="left"
            >
              <motion.p>{parse(homeDetail.details)}</motion.p>

              <br />
              <motion.p>
                For more information, please read the{" "}
                <span
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  <Link to="/termsandconditions">Terms & Conditions</Link>
                </span>
                .
              </motion.p>
              <br />
              <motion.p className="font-bold">Competition period:</motion.p>
              <motion.p>{homeDetail.competitionPeriod}</motion.p>
              <br />
              <Box>
                {homeDetail.isFee === true && (
                  <>
                    <motion.p className="font-bold">Entry fee:</motion.p>
                    <motion.p>
                      Rs. {homeDetail.entryFee.toLocaleString("en-IN")}/-
                    </motion.p>
                  </>
                )}
              </Box>

              <br />
              <motion.p className="font-bold">Eligibility:</motion.p>
              <Box fontFamily="Red Hat Display, sans-serif" marginLeft="30px">
                {parse(homeDetail.eligibility)}
              </Box>
              <br />
              <motion.p className="font-bold">Prizes:</motion.p>
              <motion.p>
                1st prize, Rs. {homeDetail.firstPrize.toLocaleString("en-IN")}/-
              </motion.p>
              <motion.p>
                2nd prize, Rs. {homeDetail.secondPrize.toLocaleString("en-IN")}
                /-
              </motion.p>
              <motion.p>
                3rd prize, Rs.{homeDetail.thirdPrize.toLocaleString("en-IN")}/-
              </motion.p>
              <br />

              <Box mx="auto" maxWidth="200px" marginTop="30px">
                <Link to="/submitentry">
                  <motion.div
                    className="submit-song text-yellow bgPink"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        type: "spring",

                        damping: 10,
                        yoyo: "Infinity",
                        duration: 0.5,
                      },
                    }}
                  >
                    Submit a song
                  </motion.div>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Home;
