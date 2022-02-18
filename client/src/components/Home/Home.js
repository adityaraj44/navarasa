import React from "react";
import { Box } from "@chakra-ui/react";
import NavbarHome from "./NavbarHome";
import HomeBanner from "../Banner/HomeBanner";
import placeholder from "../../imgs/placeholder.png";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box className="bgPurple">
      <NavbarHome />
      <Box className="w-100 dark-banner bgPurpleDark">
        <HomeBanner />
      </Box>
      <Box className="video px">
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
        >
          <video src="" poster={placeholder} />
          <BsPlayFill className="video-element text-white bgPinkLight" />
        </motion.div>
      </Box>
      <Box
        fontSize="20px"
        textAlign="center"
        fontWeight="bold"
        className="text-yellow mt-4"
      >
        <motion.p
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
        >
          Competition Details
        </motion.p>
      </Box>
      <Box fontSize="18px" className="text-white px" textAlign="left">
        <motion.p
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
        >
          The Navarasa Creative Indie Music Competition is for independent song
          composers, musicians and bands.
        </motion.p>
        <br />
        <motion.p
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
        >
          We are accepting entries for original music written, composed and
          recorded independently. With the vision of discovering new and raw
          talent, and to provide an equal chance for beginners, we focus on the
          musical and lyrical qualities of the song with minimal focus on the
          sound quality.
        </motion.p>
        <br />
        <motion.p
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
        >
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
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
          className="font-bold"
        >
          Competition period:
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
        >
          Open until 31st Aug 2022
        </motion.p>
        <br />
        <motion.p
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
          className="font-bold"
        >
          Entry fee:
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
        >
          Rs. 250/-
        </motion.p>
        <br />
        <motion.p
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
          className="font-bold"
        >
          Eligibility:
        </motion.p>
        <ul
          style={{
            marginLeft: "30px",
          }}
        >
          <motion.li
            initial={{
              opacity: 0,
              y: -30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <motion.p>Original lyrics, composition and music</motion.p>
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
              y: -30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <p>Independently produced</p>
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
              y: -30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <p>Minimum 2 min 30 sec</p>
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
              y: -30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <p>Any genre</p>
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
              y: -30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <motion.p
              initial={{
                opacity: 0,
                y: -30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                duration: 0.5,
                delay: 0.2,
              }}
            >
              Lyrics majority in Tamil. Minor usage of other languages
              acceptable.
            </motion.p>
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
              y: -30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <p>
              Strictly no content condoning violence, hate, racism or other
              forms of derogatory content.
            </p>
          </motion.li>
        </ul>
        <br />
        <motion.p
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
          className="font-bold"
        >
          Prizes:
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
        >
          1st prize, Rs. 20,000/-
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
        >
          2nd prize, Rs. 10,000/-
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
        >
          3rd prize, Rs. 5,000/-
        </motion.p>
        <br />
        <motion.p
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
        >
          Shortlisted entries may be subject to a verification process. By
          submiting your entry, you grant us permission to use your submission
          across various media platforms for promotional purposes.
        </motion.p>
        <Box marginTop="30px">
          <motion.div
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
            <Link to="/submitentry" className="submit-song text-yellow bgPink">
              Submit a song
            </Link>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
