import React from "react";
import { Box } from "@chakra-ui/react";
import NavbarHome from "./NavbarHome";
import HomeBanner from "../Banner/HomeBanner";
import placeholder from "../../imgs/placeholder.png";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box className="bgPurple">
      <NavbarHome />

      <Box className="w-100 dark-banner bgPurpleDark">
        <HomeBanner />
      </Box>
      <Box className="video px">
        <video src="" poster={placeholder} />
        <BsPlayFill className="video-element text-white bgPinkLight" />
      </Box>
      <Box
        fontSize="20px"
        textAlign="center"
        fontWeight="bold"
        className="text-yellow mt-4"
      >
        <p>Competition Details</p>
      </Box>
      <Box fontSize="18px" className="text-white px" textAlign="left">
        <p>
          The Navarasa Creative Indie Music Competition is for independent song
          composers, musicians and bands.
        </p>
        <br />
        <p>
          We are accepting entries for original music written, composed and
          recorded independently. With the vision of discovering new and raw
          talent, and to provide an equal chance for beginners, we focus on the
          musical and lyrical qualities of the song with minimal focus on the
          sound quality.
        </p>
        <br />
        <p>
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
        </p>
        <br />
        <p className="font-bold">Competition period:</p>
        <p>Open until 31st Aug 2022</p>
        <br />
        <p className="font-bold">Entry fee:</p>
        <p>Rs. 250/-</p>
        <br />
        <p className="font-bold">Eligibility:</p>
        <ul
          style={{
            marginLeft: "30px",
          }}
        >
          <li>
            <p>Original lyrics, composition and music</p>
          </li>
          <li>
            <p>Independently produced</p>
          </li>
          <li>
            <p>Minimum 2 min 30 sec</p>
          </li>
          <li>
            <p>Any genre</p>
          </li>
          <li>
            <p>
              Lyrics majority in Tamil. Minor usage of other languages
              acceptable.
            </p>
          </li>
          <li>
            <p>
              Strictly no content condoning violence, hate, racism or other
              forms of derogatory content.
            </p>
          </li>
        </ul>
        <br />
        <p className="font-bold">Prizes:</p>
        <p>1st prize, Rs. 20,000/-</p>
        <p>2nd prize, Rs. 10,000/-</p>
        <p>3rd prize, Rs. 5,000/-</p>
        <br />
        <p>
          Shortlisted entries may be subject to a verification process. By
          submiting your entry, you grant us permission to use your submission
          across various media platforms for promotional purposes.
        </p>
        <Box marginTop="30px">
          <Link to="/submitentry" className="submit-song text-yellow bgPink">
            Submit a song
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
