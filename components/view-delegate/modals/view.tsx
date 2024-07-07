import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const ViewRecord = ({ isOpen, onClose }: Props) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} size="xl">
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalHeader>View Delegate Record</ModalHeader>
				<ModalBody>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
					consequatur accusamus omnis reprehenderit nisi molestias qui ipsam
					est, quisquam minima tempora id eum doloribus vero nostrum cum ullam
					odit fuga?
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
