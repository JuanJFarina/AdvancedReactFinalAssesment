import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
      backgroundColor="#FFF"
      color="#000"
      borderRadius="5px"
      height="350px"
      width="350px"
    >
      <Image src={imageSrc} borderRadius="5px" />
      <div style={{margin:'10px'}}>
        <Heading size="xs" marginTop="10px">{title}</Heading>
        <Text color="#88c" marginTop="10px" fontSize="xs">{description}</Text>
        <Text marginTop="10px" fontSize="xs">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </div>
    </Box>
  )
};

export default Card;
