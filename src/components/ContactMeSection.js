import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const { firstName, setFirstName} = useState('');
  const { email, setEmail} = useState('');
  const { type, setType} = useState('hireMe');
  const { comment, setComment} = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: (values) => {
      submit('www.google.com', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .required("First name is required"),
      email: Yup.string()
      .email("Invalid email address")
      .required("An email is required"),
      type: Yup.string(),
      comment: Yup.string()
      .min(25, "Must be at least 25 characters")
      .required("A comment is required")
    })
  });

  useEffect(() => {
    if (response && response.type === 'success') {
      onOpen('success', 'Formulario enviado con éxito');
      console.log('Hola hola');
    }
    else {
      console.log('Algo salio mal');
    }
  }, [response, onOpen]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                id="type" 
                name="type" 
                value={formik.values.type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                  <option value="hireMe" style={{color:'#000'}}>Freelance project proposal</option>
                  <option value="openSource" style={{color:'#000'}}>
                    Open source consultancy session
                  </option>
                  <option value="other" style={{color:'#000'}}>Other</option>
                </Select>
                <FormErrorMessage>
                  {formik.touched.type && formik.errors.type ? (
                    <div>{formik.errors.type}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>
                  {formik.touched.comment && formik.errors.comment ? (
                    <div>{formik.errors.comment}</div>
                  ) : null}
              </FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                {isLoading ? 'Submitting' : 'Submit'}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;