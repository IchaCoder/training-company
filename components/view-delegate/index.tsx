"use client";
import { Box, Button, Container, useToast } from "@chakra-ui/react";
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
import Backup from "@/library/actions/backup";
import { DelegateType } from "@/library/types";

type Props = {};

type ResponseType = {
  data: DelegateType[];
};

const TableColumns = [
  { name: "#" },
  { name: "title" },
  { name: "first name" },
  { name: "last name" },
  { name: "street" },
  { name: "city" },
  { name: "state" },
  { name: "zip code" },
  { name: "phone" },
  { name: "fax number" },
  { name: "email" },
  { name: "option" },
];

const ViewDelegates = (props: Props) => {
  const [delegateId, setDelegateId] = useState("");
  const [delegates, setDelegates] = useState<DelegateType[]>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure();
  const { isOpen: isOpenDeleteRecord, onOpen: onOpenDeleteRecord, onClose: onCloseDeleteRecord } = useDisclosure();

  const handleBackup = async () => {
    try {
      const { message, status } = await Backup();

      toast({
        title: message,
        status: status === "success" ? "success" : "error",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const delegate = delegates?.find((delegate) => delegate[0] === delegateId) as unknown as string[];

  const fetchDelegates = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/delegates");
      const { data } = (await response.json()) as ResponseType;
      console.log(data);
      setDelegates(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDelegates();
  }, []);

  return (
    <>
      <ViewRecord delegate={delegate} isOpen={isOpen} onClose={onClose} />
      <Delete isOpen={isOpenDeleteRecord} onClose={onCloseDeleteRecord} setId={setDelegateId} id={delegateId} />
      <Edit isOpen={isOpenEdit} onClose={onCloseEdit} delegate={delegate!} id={delegateId} />
      <Box mt={4}>
        <Text fontSize={{ base: "xl", md: "2xl" }} textAlign="center" fontWeight="bold" mb={4}>
          Delegates List
        </Text>
        <Container maxW={"100%"} overflow={"auto"} mt={8} maxH={"70vh"}>
          <Table variant="striped" size="sm">
            <Thead>
              <Tr>
                {TableColumns.map((column, index) => (
                  <Th key={`column-${index}`} textTransform={"capitalize"} fontSize="1rem" fontWeight={"semibold"}>
                    {column.name}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {delegates && delegates?.length > 0 ? (
                delegates?.map((delegate, index) => {
                  const newDelete = delegate as unknown as string[];
                  return (
                    <Tr key={index}>
                      <Td>
                        <Text whiteSpace={"nowrap"}>{index + 1}</Text>
                      </Td>
                      <Td>
                        <Text whiteSpace={"nowrap"}>{newDelete[1]}</Text>
                      </Td>
                      <Td>
                        <Text whiteSpace={"nowrap"}>{newDelete[2]}</Text>
                      </Td>
                      <Td>
                        <Text whiteSpace={"nowrap"}>{newDelete[3]}</Text>
                      </Td>

                      <Td>
                        <Text whiteSpace={"nowrap"}>{newDelete[4]}</Text>
                      </Td>
                      <Td>
                        <Text whiteSpace={"nowrap"}>{newDelete[5]}</Text>
                      </Td>
                      <Td>
                        <Text whiteSpace={"nowrap"}>{newDelete[6]}</Text>
                      </Td>
                      <Td>
                        <Text whiteSpace={"nowrap"}>{newDelete[7]}</Text>
                      </Td>
                      <Td>
                        <Text whiteSpace={"nowrap"}>{newDelete[8]}</Text>
                      </Td>
                      <Td>
                        <Text whiteSpace={"nowrap"}>{newDelete[9]}</Text>
                      </Td>
                      <Td>
                        <Text whiteSpace={"nowrap"}>{newDelete[10]}</Text>
                      </Td>
                      <Td>
                        <Text whiteSpace={"nowrap"}>{newDelete[11]}</Text>
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
                                setDelegateId(newDelete[0]);
                              }}
                            >
                              Edit
                            </MenuItem>

                            <MenuItem
                              icon={<FiEye />}
                              onClick={() => {
                                onOpen();
                                setDelegateId(newDelete[0]);
                              }}
                            >
                              View More
                            </MenuItem>

                            <MenuItem
                              color={"red.400"}
                              icon={<IoTrashBin />}
                              onClick={() => {
                                onOpenDeleteRecord();
                                setDelegateId(newDelete[0]);
                              }}
                            >
                              Delete
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Td>
                    </Tr>
                  );
                })
              ) : (
                <Box p={4}>
                  <Text textAlign={"center"} fontSize={"2xl"} w={"full"}>
                    No records found
                  </Text>
                </Box>
              )}
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
          onClick={handleBackup}
        >
          Backup
        </Button>
      </Box>
    </>
  );
};

export default ViewDelegates;
