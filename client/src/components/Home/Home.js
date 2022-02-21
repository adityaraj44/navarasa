import React from "react";
import { Box, Image } from "@chakra-ui/react";
import NavbarHome from "./NavbarHome";
import HomeBanner from "../Banner/HomeBanner";
import placeholder from "../../imgs/placeholder.png";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../custom-hooks";
import bannerImgMobile1 from "../../imgs/banner_home_mobile1.png";

const Home = () => {
  const isSmall = useMediaQuery("(max-width:992px)");

  const inView = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
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
        <HomeBanner />
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
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems={"center"}
              className={`${isSmall ? "px-mobile" : "px"} home-banner-mobile`}
            >
              <Image width="400px" alt="banner2" src={bannerImgMobile1} />
            </Box>
          </motion.div>
        )}
      </motion.div>
      <Box className={`video ${isSmall ? "px-mobile" : "px"}`}>
        <motion.div
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
          <video src="" poster={placeholder} />
          <BsPlayFill className="video-element text-white bgPinkLight" />
        </motion.div>
      </Box>
      <Box maxWidth="1125px" mx="auto">
        <Box
          fontSize="20px"
          textAlign="center"
          fontWeight="bold"
          className="text-yellow mt-4"
        >
          <motion.p variants={inView} initial="hidden" whileInView="visible">
            Competition Details
          </motion.p>
        </Box>

        <Box
          fontSize="18px"
          className={`text-white ${isSmall ? "px-mobile" : "px"}`}
          textAlign="left"
        >
          <motion.p variants={inView} initial="hidden" whileInView="visible">
            The Navarasa Creative Indie Music Competition is for independent
            song composers, musicians and bands.
          </motion.p>
          <br />
          <motion.p variants={inView} initial="hidden" whileInView="visible">
            We are accepting entries for original music written, composed and
            recorded independently. With the vision of discovering new and raw
            talent, and to provide an equal chance for beginners, we focus on
            the musical and lyrical qualities of the song with minimal focus on
            the sound quality.
          </motion.p>
          <br />
          <motion.p variants={inView} initial="hidden" whileInView="visible">
            For more information, please read the{" "}
            <span>
              <a
                style={{
                  textDecoration: "underline",
                }}
                href="/"
              >
                Terms & Conditions
              </a>
            </span>
            .
          </motion.p>
          <br />
          <motion.p
            variants={inView}
            initial="hidden"
            whileInView="visible"
            className="font-bold"
          >
            Competition period:
          </motion.p>
          <motion.p variants={inView} initial="hidden" whileInView="visible">
            Open until 31st Aug 2022
          </motion.p>
          <br />
          <motion.p
            variants={inView}
            initial="hidden"
            whileInView="visible"
            className="font-bold"
          >
            Entry fee:
          </motion.p>
          <motion.p variants={inView} initial="hidden" whileInView="visible">
            Rs. 250/-
          </motion.p>
          <br />
          <motion.p
            variants={inView}
            initial="hidden"
            whileInView="visible"
            className="font-bold"
          >
            Eligibility:
          </motion.p>
          <ul
            style={{
              marginLeft: "30px",
            }}
          >
            <motion.li variants={inView} initial="hidden" whileInView="visible">
              <motion.p>Original lyrics, composition and music</motion.p>
            </motion.li>
            <motion.li variants={inView} initial="hidden" whileInView="visible">
              <p>Independently produced</p>
            </motion.li>
            <motion.li variants={inView} initial="hidden" whileInView="visible">
              <p>Minimum 2 min 30 sec</p>
            </motion.li>
            <motion.li variants={inView} initial="hidden" whileInView="visible">
              <p>Any genre</p>
            </motion.li>
            <motion.li variants={inView} initial="hidden" whileInView="visible">
              <motion.p
                variants={inView}
                initial="hidden"
                whileInView="visible"
              >
                Lyrics majority in Tamil. Minor usage of other languages
                acceptable.
              </motion.p>
            </motion.li>
            <motion.li variants={inView} initial="hidden" whileInView="visible">
              <p>
                Strictly no content condoning violence, hate, racism or other
                forms of derogatory content.
              </p>
            </motion.li>
          </ul>
          <br />
          <motion.p
            variants={inView}
            initial="hidden"
            whileInView="visible"
            className="font-bold"
          >
            Prizes:
          </motion.p>
          <motion.p variants={inView} initial="hidden" whileInView="visible">
            1st prize, Rs. 20,000/-
          </motion.p>
          <motion.p variants={inView} initial="hidden" whileInView="visible">
            2nd prize, Rs. 10,000/-
          </motion.p>
          <motion.p variants={inView} initial="hidden" whileInView="visible">
            3rd prize, Rs. 5,000/-
          </motion.p>
          <br />
          <motion.p variants={inView} initial="hidden" whileInView="visible">
            Shortlisted entries may be subject to a verification process. By
            submiting your entry, you grant us permission to use your submission
            across various media platforms for promotional purposes.
          </motion.p>
          <Box marginTop="30px">
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
              <Link to="/submitentry">Submit a song</Link>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
