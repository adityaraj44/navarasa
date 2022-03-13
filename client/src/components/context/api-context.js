import React, { createContext, useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const ApiContext = createContext();

const host = "https://navarasa-creative.herokuapp.com";
// const host = "http://localhost:4000";

export const ApiProvider = ({ children }) => {
  const history = useHistory();
  const toast = useToast();
  const [currentEntry, setCurrentEntry] = useState({});
  const [refId, setRefId] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [entries, setEntries] = useState([]);
  const [entryDetail, setEntryDetail] = useState(null);
  const [homeDetail, setHomeDetail] = useState(null);

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
      } else {
        setIsLoading(false);
        setIsError(true);
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

  const getEntries = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${host}/admin/entries`, {
        headers: {
          "navarasa-auth-token": localStorage.getItem("navarasa-auth-token"),
        },
      });
      if (res.data.success) {
        setEntries(res.data.entries);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
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

  const shortlistEntry = async (id) => {
    try {
      const res = await axios.put(
        `${host}/admin/entries/shortlist/${id}`,
        {},
        {
          headers: {
            "navarasa-auth-token": localStorage.getItem("navarasa-auth-token"),
          },
        }
      );
      if (res.data.shortlist) {
        await getEntries();
        toast({
          title: "Success",
          description: "Entry shortlisted successfully!",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      } else {
        await getEntries();
        toast({
          title: "Success",
          description: "Entry unshortlisted successfully!",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      setIsLoading(false);
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

  const deleteEntry = async (id) => {
    setIsLoading(true);
    try {
      const res = await axios.delete(
        `${host}/admin/entries/entry/delete/${id}`,
        {
          headers: {
            "navarasa-auth-token": localStorage.getItem("navarasa-auth-token"),
          },
        }
      );
      if (res.data.success) {
        history.push("/navarasa/admin/entries");
        setIsLoading(false);
        toast({
          title: "Success",
          description: "Entry deleted successfully!",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      setIsLoading(false);
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

  const getEntryDetail = async (id) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${host}/admin/entries/entry/${id}`, {
        headers: {
          "navarasa-auth-token": localStorage.getItem("navarasa-auth-token"),
        },
      });
      if (res.data.success) {
        setEntryDetail(res.data.entry);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
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

  const editEntry = async (id, values) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("dateSubmitted", values.dateSubmitted);
      formData.append("submittername", values.submittername);
      formData.append("role", values.role);
      formData.append("contact", values.contact);
      formData.append("country", values.country);
      formData.append("state", values.state);
      formData.append("city", values.city);
      formData.append("postaladdress", values.postaladdress);
      formData.append("email", values.email);
      formData.append("songtitle", values.songtitle);
      if (values.newAudio) {
        formData.append("audio", values.newAudio);
      } else {
        formData.append("audio", values.audio);
      }
      formData.append("artist", values.artist);
      formData.append("artistCategory", values.artistCategory);
      formData.append("instagram", values.instagram);
      formData.append("youtube", values.youtube);
      formData.append("twitter", values.twitter);
      formData.append("additionalinfo", values.additionalinfo);
      const res = await axios.put(
        `${host}/admin/entries/entry/editentry/${id}`,
        formData,
        {
          headers: {
            "navarasa-auth-token": localStorage.getItem("navarasa-auth-token"),
          },
        }
      );
      if (res.data.success) {
        await getEntries();
        toast({
          title: "Success",
          description: "Entry edited successfully!",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
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

  const getSettings = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${host}/settings`);

      if (res.data.success) {
        setHomeDetail(res.data.homeDetail);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
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

  const editSettings = async (values, password) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("details", values.details);
      formData.append("competitionPeriod", values.competitionPeriod);
      formData.append("eligibility", values.eligibility);
      formData.append("isFee", values.isFee);
      formData.append("entryFee", values.entryFee);
      formData.append("firstPrize", values.firstPrize);
      formData.append("secondPrize", values.secondPrize);
      formData.append("thirdPrize", values.thirdPrize);
      formData.append("password", password);
      const res = await axios.put(
        `${host}/admin/settings/${localStorage.getItem("adminId")}`,
        formData,
        {
          headers: {
            "navarasa-auth-token": localStorage.getItem("navarasa-auth-token"),
          },
        }
      );
      if (res.data.success) {
        setHomeDetail(res.data.homeDetail);
        toast({
          title: "Success",
          description: "Details edited successfully!",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
        await getSettings();
        setIsLoading(false);
      } else {
        setIsLoading(false);
        toast({
          title: "Error",
          description: res.data.message,
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      setIsLoading(false);
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

  const loginAdmin = async (formValues) => {
    try {
      const res = await axios.post(`${host}/admin/login`, formValues);

      if (res.data.success) {
        localStorage.setItem("navarasa-auth-token", res.data.token);

        if (res.data.isNew) {
          localStorage.setItem("role", res.data.newAdmin.role);
          localStorage.setItem("adminId", res.data.newAdmin._id);
          toast({
            title: "Success",
            description: "You have been successfully registered as an admin!",
            status: "success",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        } else {
          localStorage.setItem("role", res.data.admin.role);
          localStorage.setItem("adminId", res.data.admin._id);
          toast({
            title: "Success",
            description: "You have been successfully logged in!",
            status: "success",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Error",
          description: res.data.error,
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
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
        loginAdmin,
        getEntries,
        entries,
        setEntries,
        shortlistEntry,
        getEntryDetail,
        entryDetail,
        deleteEntry,
        editEntry,
        editSettings,
        getSettings,
        homeDetail,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
