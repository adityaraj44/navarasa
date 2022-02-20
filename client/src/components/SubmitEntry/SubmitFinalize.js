import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormFieldContext from "../context/form-field-context";
import SubmitEntry from "./SubmitEntry";

const SubmitFinalize = () => {
  const history = useHistory();

  const formContext = useContext(FormFieldContext);

  const {
    validSubmittername,
    validRole,
    validEmail,
    validCountry,
    validContact,
    validState,
    validCity,
    validAddress,

    validArtist,
    validAudio,
    validArtistCategory,
    validSongTitle,
  } = formContext;

  useEffect(() => {
    if (
      validSubmittername !== true &&
      validRole !== true &&
      validEmail !== true &&
      validCountry !== true &&
      validContact !== true &&
      validState !== true &&
      validCity !== true &&
      validAddress !== true
    ) {
      history.push("/submitentry");
    } else if (
      validAudio !== true &&
      validArtist !== true &&
      validSongTitle !== true &&
      validArtistCategory !== true
    ) {
      history.push("/submitsong");
    }
  }, [
    history,
    validAddress,
    validArtist,
    validArtistCategory,
    validAudio,
    validCity,
    validContact,
    validCountry,
    validEmail,
    validRole,
    validSongTitle,
    validState,
    validSubmittername,
  ]);

  return (
    <>
      <SubmitEntry />
    </>
  );
};

export default SubmitFinalize;
