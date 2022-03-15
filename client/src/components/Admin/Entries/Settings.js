import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import AdminNavbar from "../AdminNavbar";
import { useHistory } from "react-router-dom";
import ApiContext from "../../context/api-context";

const Settings = () => {
  const toast = useToast();
  const history = useHistory();

  const apiContext = useContext(ApiContext);
  const { editSettings, homeDetail, getSettings, isLoading } = apiContext;

  const [settingsData, setSettingsData] = useState(null);

  useEffect(() => {
    getSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (homeDetail !== null) {
      setSettingsData(homeDetail);
    }
  }, [homeDetail]);

  const [password, setPassword] = useState("");
  const [fieldsErrors, setFieldsErrors] = useState({});

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChange = (e) => {
    setSettingsData({ ...settingsData, [e.target.name]: e.target.value });
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    setFieldsErrors(validate(settingsData, password));
    await handleFormChange();
  };

  const handleFormChange = async () => {
    const res = validate(settingsData, password);
    if (Object.keys(res).length === 0) {
      await editSettings(settingsData, password);
    } else {
      toast({
        title: "All fields are required",
        description: "Please fill up all the fields to continue.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  //   validation
  const validate = (values, password) => {
    const errors = {};
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!values.details) {
      errors.details = "Details is required";
    }
    if (!values.competitionPeriod) {
      errors.competitionPeriod = "Competition Period is required";
    }
    if (!values.eligibility) {
      errors.eligibility = "Eligibility is required";
    }
    if (values.isFee === true) {
      if (!values.entryFee) {
        errors.entryFee = "Entry Fee is required";
      }
    }
    if (!values.firstPrize) {
      errors.firstPrize = "First Prize is required";
    }
    if (!values.secondPrize) {
      errors.secondPrize = "Second Prize is required";
    }
    if (!values.thirdPrize) {
      errors.thirdPrize = "Third Prize is required";
    }
    return errors;
  };

  const handleExit = () => {
    setSettingsData(null);
    history.push("/navarasa/admin/entries");
  };

  return (
    <>
      {isLoading || settingsData === null ? (
        <Box
          width="100vw"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="bgPurple"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#fad01c"
            size="xl"
          />
        </Box>
      ) : (
        <>
          <AdminNavbar />
          <Box className="bgPurple">
            <Box mx="auto" maxWidth="1400px" padding="20px 100px 100px 100px">
              <Text
                textAlign="center"
                fontSize="20px"
                className="text-yellow font-bold"
              >
                Competition details
              </Text>
              <Text fontSize="18px" className="text-white mt-4">
                This page allows changes to the competition details which are
                displayed on Navarasa Creative’s home page. Please be careful
                and double check the changes made to this page. Changes once
                saved, will be updated to the live website.
              </Text>
              <Box className="mt-4">
                <FormControl>
                  <FormLabel
                    className="form-label text-purpleLight font-bold"
                    fontSize="16px"
                  >
                    Details
                  </FormLabel>
                  <CKEditor
                    editor={ClassicEditor}
                    data={settingsData.details}
                    onChange={(e, editor) => {
                      const data = editor.getData();
                      setSettingsData({ ...settingsData, details: data });
                    }}
                  />
                  {fieldsErrors.details && (
                    <FormHelperText>
                      <Alert className="mb-4 text-dark" status="error">
                        <AlertIcon />
                        <AlertTitle mr={2}>{fieldsErrors.details}</AlertTitle>
                      </Alert>
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
              <Flex
                direction="row"
                justifyContent="start"
                alignItems="center"
                className="mt-4"
              >
                <Box className="form-control">
                  <FormControl>
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="dateSubmitted"
                    >
                      Competition period
                    </FormLabel>
                    <Input
                      width="300px"
                      className="input bgWhite text-grey mt-1"
                      borderRadius="2px"
                      size="md"
                      //   isRequired
                      fontSize="18px"
                      id="competitionPeriod"
                      name="competitionPeriod"
                      type="text"
                      value={settingsData.competitionPeriod}
                      onChange={handleChange}
                    />
                    {fieldsErrors.competitionPeriod && (
                      <FormHelperText>
                        <Alert className="mb-4 text-dark" status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>
                            {fieldsErrors.competitionPeriod}
                          </AlertTitle>
                        </Alert>
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>
                <Box className="form-control ml-4">
                  <FormControl>
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="entryFee"
                    >
                      Entry fee
                    </FormLabel>
                    <Input
                      width="300px"
                      className="input bgWhite text-grey mt-1"
                      borderRadius="2px"
                      size="md"
                      //   isRequired
                      fontSize="18px"
                      id="entryFee"
                      name="entryFee"
                      type="number"
                      value={settingsData.entryFee}
                      onChange={handleChange}
                    />
                    {fieldsErrors.entryFee && (
                      <FormHelperText>
                        <Alert className="mb-4 text-dark" status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>
                            {fieldsErrors.entryFee}
                          </AlertTitle>
                        </Alert>
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>
                <Box className="form-control ml-4">
                  <Flex
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    className="terms-checkbox mt-4"
                  >
                    <input
                      className="text-yellow bgYellow  mt-4"
                      type="checkbox"
                      checked={settingsData.isFee}
                      onChange={() =>
                        setSettingsData({
                          ...settingsData,
                          isFee: !settingsData.isFee,
                        })
                      }
                      id="isFee"
                      name="isFee"
                      value="fee"
                    />

                    <label
                      className="font-bold text-yellow  mt-4"
                      htmlFor="isFee"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      Enable entry fee
                    </label>
                  </Flex>
                </Box>
              </Flex>
              <Box className="mt-4">
                <FormControl>
                  <FormLabel
                    className="form-label text-purpleLight font-bold"
                    fontSize="16px"
                  >
                    Eligibility
                  </FormLabel>
                  <CKEditor
                    editor={ClassicEditor}
                    data={settingsData.eligibility}
                    onChange={(e, editor) => {
                      const data = editor.getData();
                      setSettingsData({ ...settingsData, eligibility: data });
                    }}
                  />
                  {fieldsErrors.eligibility && (
                    <FormHelperText>
                      <Alert className="mb-4 text-dark" status="error">
                        <AlertIcon />
                        <AlertTitle mr={2}>
                          {fieldsErrors.eligibility}
                        </AlertTitle>
                      </Alert>
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
              <Text className="mt-4 text-purpleLight font-bold" fontSize="16px">
                Prize amount
              </Text>
              <Flex
                direction="row"
                justifyContent="start"
                alignItems="center"
                className="mt-2"
              >
                <Box display="flex" flexGrow="1" className="form-control">
                  <FormControl>
                    <FormLabel
                      className="form-label text-white font-bold"
                      fontSize="16px"
                      htmlFor="1stPrize"
                    >
                      1st prize
                    </FormLabel>
                    <Input
                      className="input bgWhite text-grey mt-1"
                      borderRadius="2px"
                      size="md"
                      //   isRequired
                      fontSize="18px"
                      id="1stPrize"
                      name="firstPrize"
                      type="number"
                      value={settingsData.firstPrize}
                      onChange={handleChange}
                    />
                    {fieldsErrors.firstPrize && (
                      <FormHelperText>
                        <Alert className="mb-4 text-dark" status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>
                            {fieldsErrors.firstPrize}
                          </AlertTitle>
                        </Alert>
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>
                <Box display="flex" flexGrow="1" className="form-control ml-4">
                  <FormControl>
                    <FormLabel
                      className="form-label text-white font-bold"
                      fontSize="16px"
                      htmlFor="2ndPrize"
                    >
                      2nd prize
                    </FormLabel>
                    <Input
                      className="input bgWhite text-grey mt-1"
                      borderRadius="2px"
                      size="md"
                      //   isRequired
                      fontSize="18px"
                      id="2ndPrize"
                      name="secondPrize"
                      type="number"
                      value={settingsData.secondPrize}
                      onChange={handleChange}
                    />
                    {fieldsErrors.secondPrize && (
                      <FormHelperText>
                        <Alert className="mb-4 text-dark" status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>
                            {fieldsErrors.secondPrize}
                          </AlertTitle>
                        </Alert>
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>
                <Box display="flex" flexGrow="1" className="form-control ml-4">
                  <FormControl>
                    <FormLabel
                      className="form-label text-white font-bold"
                      fontSize="16px"
                      htmlFor="3rdPrize"
                    >
                      3rd prize
                    </FormLabel>
                    <Input
                      className="input bgWhite text-grey mt-1"
                      borderRadius="2px"
                      size="md"
                      //   isRequired
                      fontSize="18px"
                      id="3rdPrize"
                      name="thirdPrize"
                      type="number"
                      value={settingsData.thirdPrize}
                      onChange={handleChange}
                    />
                    {fieldsErrors.thirdPrize && (
                      <FormHelperText>
                        <Alert className="mb-4 text-dark" status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>
                            {fieldsErrors.thirdPrize}
                          </AlertTitle>
                        </Alert>
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>
              </Flex>
              <Box width="386px" className="form-control mt-4">
                <FormControl>
                  <FormLabel
                    className="form-label text-purpleLight font-bold"
                    fontSize="16px"
                    htmlFor="password"
                  >
                    Confirm password
                  </FormLabel>
                  <Input
                    className="input bgWhite text-grey mt-1"
                    borderRadius="2px"
                    size="md"
                    //   isRequired
                    fontSize="18px"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handlePassword}
                  />
                  {fieldsErrors.password && (
                    <FormHelperText>
                      <Alert className="mb-4 text-dark" status="error">
                        <AlertIcon />
                        <AlertTitle mr={2}>{fieldsErrors.password}</AlertTitle>
                      </Alert>
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
              <Box className="mt-4">
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text
                    cursor="pointer"
                    fontSize="16px"
                    className="text-white font-bold"
                    onClick={handleExit}
                  >
                    Exit without saving changes
                  </Text>
                  <button
                    style={{
                      fontSize: "16px",
                      width: "180px",
                      height: "50px",
                      borderRadius: "3px",
                      outline: "none",
                      border: "none",
                    }}
                    className="text-white form-control bgPurpleLight font-bold"
                    type="button"
                    onClick={handleContinue}
                  >
                    Save changes
                  </button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Settings;
