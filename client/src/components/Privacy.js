import React from "react";
import Navbar from "./Navbar/Navbar";
import { Box, Text } from "@chakra-ui/react";
import { useMediaQuery } from "../custom-hooks";

const Privacy = () => {
  const isSmall = useMediaQuery("(max-width:992px)");

  return (
    <>
      <Navbar />
      <Box className="bgPurple">
        <Box maxWidth="1125px" mx="auto">
          <Box className={isSmall ? "px-mobile" : "px"}>
            <Text fontSize="40px" className="about-heading text-pink">
              Privacy Policy
            </Text>
            <br />
            <Text fontSize="18px" className=" text-white">
              This privacy notice applies solely to the personal information we
              collect, use, and share.
            </Text>
            <br />
            <Text className="text-white" fontSize="14px">
              When you enter The Indie Tamil Song Competition via our online
              submission form, you will be required to register for the
              competition by providing several items of personal information,
              including, but not limted to, a) your name, address, contact
              information, email address, and other registration information; b)
              information about the song entered; c) information about co-owners
              of the songs you post, such as their names; and d) social media
              account information.
            </Text>
            <br />
            <Text className="text-white" fontSize="14px">
              We may automatically collect certain technical information from
              your computer or mobile device when you visit the website and/or
              enter the competition. That information may include, but is not
              limited to a) your Internet Protocol address; b) your browser
              type, your operating system; c) the pages or content you view; d)
              the pages you view immediately before and after you access the
              website; e) unique identifiers associated with the devices you use
              to access the website; f) the URL that referred you to the
              website; and g) standard weblog information.
            </Text>
            <br />
            <Text className="text-white" fontSize="14px">
              We may collect may collect this information using “cookies”.
              Cookies are small text files that the are saved on your computer
              or device and accessed when you return. Cookies can be used to
              recognize repeat visitors or how visitors interact with the
              website. If you do not want information collected through the use
              of cookies, most browsers allow you to deny or accept cookies. See
              your browser’s help menu for more information.
            </Text>
            <br />
            <Text className="text-white" fontSize="14px">
              Any of the information we collect from you may be used in one of
              the following ways:
            </Text>
            <br />
            <ul
              style={{
                fontSize: "14px",

                color: "white",
                fontFamily: "Red Hat Display, sans-serif",
              }}
            >
              <li>
                Providing you with customer service related to the products,
                services, or information you request;
              </li>
              <li>
                Delivering marketing communications, promotional materials, or
                advertisements that may be of interest to you;
              </li>
              <li>
                Generating and analyzing statistics about how people use the
                website;
              </li>
              <li>
                Helping business partners and sponsors better understand our
                users;
              </li>
              <li>
                Detecting, investigating, preventing, and responding to fraud,
                intellectual property infringement, violations of law, or other
                misuse.
              </li>
            </ul>
            <br />
            <Text className="text-white" fontSize="14px">
              We implement a variety of security measures to maintain the safety
              of your personal information when you register and/or enter the
              competition. All supplied information is transmitted via Secure
              Socket Layer (SSL), but bear in mind that there is no method of
              transmission over the Internet or method of electronic storage
              that is 100% secure, and because of that, we cannot guarantee its
              absolute security.
            </Text>
            <br />
            <Text className="text-white" fontSize="18px">
              If you have an enquiries regarding the Privacy Policy, please feel
              free to contact us at{" "}
              <span
                style={{
                  display: "inline",
                  color: "#fad01c",
                }}
              >
                <a href="mailto:adinovacreative.com">adinovacreative.com</a>
              </span>
              . Thank you.
            </Text>
            <br />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Privacy;
