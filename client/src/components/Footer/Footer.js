import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import instagram from "../../imgs/instagram.svg";
import twitter from "../../imgs/twitter.svg";
import youtube from "../../imgs/youtube.svg";
import arroba from "../../imgs/telegram.png";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes("admin") && (
        <Box className="footer bgYellow">
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box className="social-links mt-4" marginTop="30px">
              <Flex
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <a
                  className="social-link"
                  href="https://www.instagram.com/adinovacreative"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="instagram"
                    width="40px"
                    height="40px"
                    src={instagram}
                  />
                </a>
                <a
                  className="social-link ml-4"
                  href="https://twitter.com/adinovacreative"
                  target="_blank" rel="noreferrer"
                >
                  <Image
                    width="40px"
                    height="40px"
                    alt="twitter"
                    src={twitter}
                  />
                </a>
                <a
                  className="social-link ml-4"
                  href="https://www.youtube.com/channel/UC_JxeDKSWSR_p55PYyitPHQ"
                  target="_blank" rel="noreferrer"
                >
                  <Image
                    width="40px"
                    height="40px"
                    alt="youtube"
                    src={youtube}
                  />
                </a>
                <a
                  className="social-link ml-4"
                  href="https://t.me/adinovacommunity"
                  target="_blank" rel="noreferrer"
                >
                  <Image
                    width="40px"
                    height="40px"
                    alt="telegram"
                    src={arroba}
                  />
                </a>
              </Flex>
            </Box>
            <Box className="mt-4 text-dark" fontWeight="bold">
              <Link to="/privacypolicy">Privacy Policy</Link> |{" "}
              <Link to="/termsandconditions">Terms & Conditions</Link>
            </Box>
            <Box fontWeight="bold" className="mb-4 text-dark footer-text">
              <Text>© Copyright Adinova 2022</Text>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Footer;
