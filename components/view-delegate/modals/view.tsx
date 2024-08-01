import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  delegate: string[];
};

const ViewRecord = ({ isOpen, onClose, delegate }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>View Delegate Record</ModalHeader>
        <ModalBody>
          <Stack>
            <Text>First Name: {delegate?.[2]}</Text>
            <Text>Last Name: {delegate?.[3]}</Text>
            <Text>Street: {delegate?.[4]}</Text>
            <Text>City: {delegate?.[5]}</Text>
            <Text>State: {delegate?.[6]}</Text>
            <Text>Zip Code: {delegate?.[7]}</Text>
            <Text>Phone: {delegate?.[8]}</Text>
            <Text>Fax Number: {delegate?.[9]}</Text>
            <Text>Email: {delegate?.[10]}</Text>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ViewRecord;
