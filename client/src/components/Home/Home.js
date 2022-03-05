import React, { useState, useRef } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import NavbarHome from "./NavbarHome";
import HomeBanner from "../Banner/HomeBanner";
import placeholder from "../../imgs/placeholder.png";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../custom-hooks";
import videoLarge from "../../videos/Navarasa Promo.mp4";
import gold from "../../imgs/gold.svg";
import silver from "../../imgs/silver.svg";
import bronze from "../../imgs/bronze.svg";

const Home = () => {
  const isSmall = useMediaQuery("(max-width:992px)");
  const isXs = useMediaQuery("(max-width:480px)");

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

  const videoRef = useRef();

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(null);

  // hover the video to show the play/pause button
  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };

  const handleVideo = () => {
    let prev = isVideoPlaying;
    setIsVideoPlaying(!prev);
    if (!prev) {
      videoRef.current.play();
      setTimeout(() => {
        setIsButtonVisible(false);
      }, 3000);
    } else {
      videoRef.current.pause();
      setTimeout(() => {
        setIsButtonVisible(false);
      }, 3000);
    }
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
                  Rs. 20,000
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
                  Rs. 10,000
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
                  Rs. 5,000
                </Text>
              </Box>
            </Box>
          </motion.div>
        )}
      </motion.div>
      <Box className={`video ${isSmall ? "px-mobile" : "px-home"}`}>
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={() => setIsButtonVisible(true)}
          onBlur={() => setIsButtonVisible(false)}
        >
          <video
            ref={videoRef}
            src={videoLarge}
            poster={placeholder}
            controls
            onEnded={() => setIsVideoPlaying(false)}
            onPause={() => setIsVideoPlaying(false)}
            onPlay={() => setIsVideoPlaying(true)}
          />
          {isButtonVisible === null || isButtonVisible === true ? (
            <>
              {isVideoPlaying ? (
                <BsPauseFill
                  onClick={handleVideo}
                  className="video-element text-white bgPinkLight"
                />
              ) : (
                <BsPlayFill
                  onClick={handleVideo}
                  className="video-element text-white bgPinkLight"
                />
              )}
            </>
          ) : (
            ""
          )}
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
          className={`text-white ${isSmall ? "px-mobile" : "px-home"}`}
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
  );
};

export default Home;
