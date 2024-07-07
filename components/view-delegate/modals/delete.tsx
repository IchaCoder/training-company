import DeleteRecord from "@/library/actions/delete-record";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	useToast,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

type Props = {
	isOpen: boolean;
	onClose: () => void;
	id: string;
	setId: Dispatch<SetStateAction<string>>;
};

const Delete = ({ isOpen, onClose, id, setId }: Props) => {
	const cancelRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const toast = useToast();

	const deleteRecord = async () => {
		setLoading(true);

		const { status, message } = await DeleteRecord(id);
		onClose();
		setId("");
		toast({
			title: status === "error" ? "Error" : "Success",
			description: message,
			status: status === "error" ? "error" : "success",
			duration: 5000,
			isClosable: true,
			position: "top",
		});
		setLoading(false);
	};
	return (
		<AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize="lg" fontWeight="bold">
						Delete Delegate
					</AlertDialogHeader>

					<AlertDialogBody>
						Are you sure? You cannot undo this action afterwards.
					</AlertDialogBody>

					<AlertDialogFooter>
						<Button ref={cancelRef} onClick={onClose}>
							Cancel
						</Button>
						<Button
							colorScheme="red"
							ml={3}
							onClick={deleteRecord}
							isLoading={loading}
						>
							Delete
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
};

export default Delete;
