import React, { createContext, useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const ApiContext = createContext();

const host = "http://localhost:4000";

export const ApiProvider = ({ children }) => {
  const toast = useToast();
  const [currentEntry, setCurrentEntry] = useState({});
  const [refId, setRefId] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitEntry = async (formValues) => {
    try {
      const formData = new FormData();
      formData.append("submittername", formValues.submittername);
      formData.append("role", formValues.role);
      formData.append("contact", formValues.contact);
      formData.append("country", formValues.country);
      formData.append("state", formValues.state);
      formData.append("city", formValues.city);
      formData.append("postaladdress", formValues.postaladdress);
      formData.append("email", formValues.email);
      formData.append("songtitle", formValues.songtitle);
      formData.append("audio", formValues.audio);
      formData.append("artist", formValues.artist);
      formData.append("artistCategory", formValues.artistCategory);
      formData.append("instagram", formValues.instagram);
      formData.append("youtube", formValues.youtube);
      formData.append("twitter", formValues.twitter);
      formData.append("additionalinfo", formValues.additionalinfo);

      const res = await axios.post(`${host}/uploadentry`, formData);

      if (res.data.success) {
        localStorage.setItem("currentEntryId", res.data.newEntry._id);
        setCurrentEntry(res.data.newEntry);

        toast({
          title: "Success",
          description: "Entry saved successfully!",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };

  const finalizeEntry = async () => {
    setIsLoading(true);
    try {
      const res = await axios.put(`${host}/finalizeentry/${currentEntry._id}`);

      if (res.data.success) {
        localStorage.removeItem("currentEntryId");
        setCurrentEntry({});
        setRefId(res.data.entry.refId);
        setIsSuccess(true);
        setIsLoading(false);

        toast({
          title: "Success",
          description: "You have been successfully registered!",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <ApiContext.Provider
      value={{
        submitEntry,
        currentEntry,
        finalizeEntry,
        isLoading,
        isError,
        isSuccess,
        refId,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
