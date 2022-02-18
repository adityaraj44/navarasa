import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import masthead from "../../imgs/placeholder.png";

const About = () => {
  return (
    <>
      <Navbar />
      <Box className="bgPurpleDark">
        <Box className="px">
          <Box className="about-masthead ">
            <Image alt="about-masthead mt-4" width="100%" src={masthead} />
          </Box>
          <Box textAlign="left" className="mt-4">
            <Text className="about-subheading text-yellow">
              We want to discover and experience
            </Text>
            <Text className="about-heading text-pink mt-2">
              fresh indie talent
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="bgPurple px">
        <Box className="text-white" textAlign="left" fontSize="18px">
          <p className="text-white">
            Navarasa Creative is an initiative to get involved with the abundant
            creative talent in the indie-sphere. We are starting our journey
            with Tamil Music as it has been an integral part of our youth and
            continues to be a source of inspiration in our daily lives.
          </p>
          <p className="mt-4 text-white">
            As the Tamil music indie space blooms, our vision is to connect new
            talent with the more experienced artists in the community as well as
            the global online audiences.
          </p>
          <p className="mt-4 text-white">
            Conducting competitions with the ultimate aim of culminating in
            collaborations, we would like to see newer talent become part of the
            musical community; which has always been welcoming and nurturing
            toward the next generation of musicians.
          </p>
          <br />
        </Box>
        <Box textAlign="right" className="mt-4">
          <Text className="about-subheading text-yellow">
            There is something
          </Text>
          <Text className="about-heading text-pink mt-2">
            magical about music
          </Text>
        </Box>
        <Box className="text-white mt-4" textAlign="left" fontSize="18px">
          <p className="text-white">
            Songs are a great unifier. Trending songs come in so many flavours.
            From sick beats to killer baselines, from heart wrenching meladies
            to soulful vocals, music is practically infinite in it’s nature.
          </p>
          <p className="mt-4 text-white">
            On a deeper level, music has a certain trancendental quality. It
            touches every listener in a unique way and has the ability to unite
            people beyond petty differences and disputes. When music is coupled
            with the right message and intent, it can be a powerful means to
            create joy, harmony and awareness.
          </p>
          <p className="mt-4 text-white">
            No one goes untouched by the magic of music.
          </p>
          <br />
        </Box>
      </Box>
    </>
  );
};

export default About;
