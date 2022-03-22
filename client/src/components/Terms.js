import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "../custom-hooks";
import Navbar from "./Navbar/Navbar";

const Terms = () => {
  const isSmall = useMediaQuery("(max-width:992px)");
  return (
    <>
      <Navbar />
      <Box className="bgPurple">
        <Box maxWidth="1125px" mx="auto">
          <Box className={isSmall ? "px-mobile" : "px"}>
            <Text fontSize="40px" className="about-heading text-pink">
              Terms & Conditions
            </Text>
            <br />
            <Text fontSize="18px" className=" text-white">
              The Indie Tamil Song Competition is created to give amateur and
              professional indie musicians the opportunity to submit original
              indie music and win prizes.
            </Text>
            <br />
            <Text className="text-white font-bold" fontSize="14px">
              Competition Rules
            </Text>
            <br />
            <ol
              style={{
                fontSize: "14px",

                color: "white",
                fontFamily: "Red Hat Display, sans-serif",
              }}
            >
              <li>
                The competition is open to participants of all ages and
                nationality.
              </li>
              <li>
                By submitting an entry, the participant agrees that the
                composition is original and solely belongs to them and does not
                infringe upon any other parties’ intellectual property.
              </li>
              <li>
                There are no instrumentation restrictions. Any MIDI instruments,
                Electronics or Live recordings may be used.
              </li>
              <li>There are no restrictions on the genre of composition.</li>
              <li>
                The submitted song must contain lyrics, majority of which must
                be in the Tamil language. It is acceptable to have minor
                portions in any other language.
              </li>
              <li>
                The participant must submit their personal information, upload
                their song along with the song information via the submission
                form at www.website.com, before the deadline stated on the
                hompage of the website.
              </li>
              <li>
                Any submission containing offensive content, as judged by the
                organisers, will be disqualified.
              </li>
            </ol>

            <br />
            <Text className="text-white font-bold" fontSize="14px">
              Prizes
            </Text>
            <br />
            <ol
              style={{
                fontSize: "14px",

                color: "white",
                fontFamily: "Red Hat Display, sans-serif",
              }}
            >
              <li>
                The winners will be notified via the contact information they
                provide in the submission form. The decisions of the judges will
                be final and there will be no appeal.
              </li>
              <li>
                In the event that a participant is uncontactable, the prizes are
                forfeit by the winner.
              </li>
              <li>
                The prizes shown on the homepage are for illustrative purposes.
                The organizers reserve the right to change the prize structure
                and individual prizes, or award additional prizes at their sole
                discretion.
              </li>
              <li>
                The organizer reserves the right to cancel the competition, in
                the event of insufficient participants, or any other reason that
                may prevent the effective execution of the competition according
                to their sole discretion.
              </li>
              <li>
                All prize winners may receive the prize packages courtesy of our
                competition sponsors. In the unlikely event that a sponsor is
                unable to provide a prize, the organizers are not to be held
                accountable
              </li>
            </ol>

            <br />
            <Text className="text-white font-bold" fontSize="14px">
              Copyrights
            </Text>
            <br />
            <ol
              style={{
                fontSize: "14px",

                color: "white",
                fontFamily: "Red Hat Display, sans-serif",
              }}
            >
              <li>
                The participant retains full ownership of their work. But by
                submitting an entry, the participant assigns the organizers, on
                a non-exclusive basis and free of charge, permission to use the
                song submitted for the contest, any artistic performances and
                recordings in a territorially and time unlimited way. The
                organizers may use the submitted song as promotional material
                across any of their social media platforms. The participant
                grants the organizer permission to use the submitted song in any
                way the organizer sees fit.
              </li>
              <li>
                The participant submitting an entry, the participant confirms
                that they are authorized to submit the song.
              </li>
              <li>
                You agree to indemnify and hold harmless the Indie Tamil Song
                Competition, its organizers, sponsors, and partners,
                individually and collectively, from and against any and all
                claims, liabilities, losses, damages, and expenses (including
                but not limited to attorney’s fees, and costs of the court)
                which may be incurred by reason of any claim involving
                copyright, trademark, credits, publicity, screening, and loss of
                or damage to submitted material. The burden of determining that
                any material is not protected by copyright, trademark, rights of
                privacy, publicity or any other proprietary rights rests with
                the composer. The participant shall bear the sole liability for
                any damage resulting from any infringement of copyrights,
                proprietary rights, or any other harm resulting from such a
                submission.
              </li>
              <li>
                By taking part in the Competition, the participant declares to
                hold exclusive and unlimited copyright to the sent compositions
                and to assume responsibility towards the Organizer for legal
                faults of the submitted compositions and in particular for
                claims of third parties against the Organizer connected with
                breaking their copyright.
              </li>
              <li>
                Should third parties lay a claim against the Organizer on
                account of breach by the participants of copyright or personal
                rights of third parties connected with the usage of the
                compositions, the participants of the Contest shall indemnify
                the Organizer against any and all of such third parties.
              </li>
            </ol>

            <br />
            <Text className="text-white font-bold" fontSize="14px">
              Additional Provisions
            </Text>
            <br />
            <ol
              style={{
                fontSize: "14px",

                color: "white",
                fontFamily: "Red Hat Display, sans-serif",
              }}
            >
              <li>
                The Organizer of the competition makes final decisions upon all
                organizational issues. Such decisions are irrevocable and
                non-claimable.
              </li>
              <li>
                The Organizer has the right to change the rules of
                participation.
              </li>
            </ol>

            <br />

            <Text className="text-white" fontSize="14px">
              By registering and submitting an entry, the participants agree
              that they shall be bound by the terms of this agreement. Updated
              on 16 March 2022.
            </Text>
            <br />
            <Text className="text-white" fontSize="18px">
              If you have an enquiries regarding the Terms & Conditions, please
              feel free to contact us at{" "}
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

export default Terms;
