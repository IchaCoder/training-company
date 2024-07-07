"use client";
import { Box, Button, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useDisclosure,
	// useToast,
} from "@chakra-ui/react";
import { IoTrashBin } from "react-icons/io5";
import { FiEdit2, FiEye, FiMoreVertical } from "react-icons/fi";
import ViewRecord from "./modals/view";
import Delete from "./modals/delete";
import Edit from "./modals/edit";

type Props = {};

const TableColumns = [
	{ name: "#" },
	{ name: "title" },
	{ name: "first name" },
	{ name: "gender" },
	{ name: "email" },
	{ name: "phone" },
	{ name: "address" },
	{ name: "city" },
	{ name: "state" },
	{ name: "zip code" },
	{ name: "fax number" },
	{ name: "option" },
];

const ViewDelegates = (props: Props) => {
	const [delegateId, setDelegateId] = useState("");
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: isOpenEdit,
		onOpen: onOpenEdit,
		onClose: onCloseEdit,
	} = useDisclosure();
	const {
		isOpen: isOpenDeleteRecord,
		onOpen: onOpenDeleteRecord,
		onClose: onCloseDeleteRecord,
	} = useDisclosure();

	const fetchDelegates = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/delegates");
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchDelegates();
	}, []);

	return (
		<>
			<ViewRecord isOpen={isOpen} onClose={onClose} />
			<Delete
				isOpen={isOpenDeleteRecord}
				onClose={onCloseDeleteRecord}
				setId={setDelegateId}
				id={delegateId}
			/>
			<Edit isOpen={isOpenEdit} onClose={onCloseEdit} id={delegateId} />
			<Box mt={4}>
				<Text
					fontSize={{ base: "xl", md: "2xl" }}
					textAlign="center"
					fontWeight="bold"
					mb={4}
				>
					Delegates List
				</Text>
				<Container maxW={"100%"} overflow={"auto"} mt={8} maxH={"70vh"}>
					<Table variant="striped" size="sm">
						<Thead>
							<Tr>
								{TableColumns.map((column, index) => (
									<Th
										key={`column-${index}`}
										textTransform={"capitalize"}
										fontSize="1rem"
										fontWeight={"semibold"}
									>
										{column.name}
									</Th>
								))}
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>
									<Text whiteSpace={"nowrap"}>001</Text>
								</Td>
								<Td>
									<Text whiteSpace={"nowrap"}>Junior Accountant</Text>
								</Td>
								<Td>
									<Text whiteSpace={"nowrap"}>Emmanuel</Text>
								</Td>
								<Td>
									<Text whiteSpace={"nowrap"}>Yeboah</Text>
								</Td>
								<Td>
									<Text whiteSpace={"nowrap"}>Male</Text>
								</Td>
								<Td>
									<Text whiteSpace={"nowrap"}>ichgg@gmail.com</Text>
								</Td>
								<Td>
									<Text whiteSpace={"nowrap"}>+233887688586</Text>
								</Td>
								<Td>
									<Text whiteSpace={"nowrap"}>N/A</Text>
								</Td>
								<Td>
									<Text whiteSpace={"nowrap"}>New York City</Text>
								</Td>
								<Td>
									<Text whiteSpace={"nowrap"}>California</Text>
								</Td>
								<Td>
									<Text whiteSpace={"nowrap"}>N/A</Text>
								</Td>
								<Td>
									<Menu>
										<MenuButton
											as={IconButton}
											aria-label="Options"
											icon={<FiMoreVertical />}
											variant="outline"
										/>
										<MenuList>
											<MenuItem
												icon={<FiEdit2 />}
												onClick={() => {
													onOpenEdit();
													setDelegateId("001");
												}}
											>
												Edit
											</MenuItem>

											<MenuItem
												icon={<FiEye />}
												onClick={() => {
													onOpen();
												}}
											>
												View More
											</MenuItem>

											<MenuItem
												color={"red.400"}
												icon={<IoTrashBin />}
												onClick={() => {
													onOpenDeleteRecord();
													setDelegateId("001");
												}}
											>
												Delete
											</MenuItem>
										</MenuList>
									</Menu>
								</Td>
							</Tr>
						</Tbody>
					</Table>
				</Container>
				<Button
					bg="#29C7FE"
					color="white"
					ml={8}
					mt={8}
					_hover={{ opacity: 0.7 }}
					_active={{ bg: "#29C7FE" }}
				>
					Backup
				</Button>
			</Box>
		</>
	);
};

export default ViewDelegates;
