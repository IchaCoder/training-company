"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Stack } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Nav = (props: Props) => {
	return (
		<Box as="nav" bg="gray.800" color="white" p={4}>
			<Stack direction="row" spacing={4} width={"max-content"} mx={"auto"}>
				<Link href="/">Add Delegate</Link>
				<Link href="/view-delegates">View Delegates</Link>
				{/* <Link href="/">Add Delegate</Link> */}
			</Stack>
		</Box>
	);
};

export default Nav;
