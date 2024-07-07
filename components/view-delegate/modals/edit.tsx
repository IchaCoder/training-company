import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Stack,
	chakra,
	Button,
	Input,
	DrawerHeader,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormErrorIcon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type Props = {
	isOpen: boolean;
	onClose: () => void;
	id: string;
};

type FormValueTypes = {
	title: string;
	first_name: string;
	last_name: string;
	street: string;
	city: string;
	state: string;
	zip_code: string;
	number: string;
	fax_number: string;
	email: string;
};

const Edit = ({ isOpen, onClose, id }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<FormValueTypes>();

	const onUpdate = (data: FormValueTypes) => {
		console.log(data);
	};

	return (
		<Drawer isOpen={isOpen} onClose={onClose} size={"lg"}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerHeader>Update Records</DrawerHeader>
				<DrawerCloseButton />
				<DrawerBody>
					<chakra.form my={8} onSubmit={handleSubmit(onUpdate)}>
						<Stack spacing={4}>
							{/* Title */}
							<FormControl isInvalid={!!errors.title}>
								<FormLabel>Delete Title*</FormLabel>
								<Input
									type="text"
									size={"md"}
									placeholder="Enter delegate title"
									border="1px solid rgba(0,0,0,0.2)"
									{...register("title", {
										required: "Title is required",
									})}
								/>
								{errors.title && (
									<FormErrorMessage>
										<FormErrorIcon /> {errors.title.message}
									</FormErrorMessage>
								)}
							</FormControl>
							{/* First name */}
							<FormControl isInvalid={!!errors.first_name}>
								<FormLabel>First name*</FormLabel>
								<Input
									type="text"
									size={"md"}
									placeholder="Enter delegate first name"
									border="1px solid rgba(0,0,0,0.2)"
									{...register("first_name", {
										required: "First name is required",
									})}
								/>
								{errors.first_name && (
									<FormErrorMessage>
										<FormErrorIcon /> {errors.first_name.message}
									</FormErrorMessage>
								)}
							</FormControl>
							{/* Last name */}
							<FormControl isInvalid={!!errors.last_name}>
								<FormLabel>Last name*</FormLabel>
								<Input
									type="text"
									size={"md"}
									placeholder="Enter delegate last name"
									border="1px solid rgba(0,0,0,0.2)"
									{...register("last_name", {
										required: "Last name is required",
									})}
								/>
								{errors.last_name && (
									<FormErrorMessage>
										<FormErrorIcon /> {errors.last_name.message}
									</FormErrorMessage>
								)}
							</FormControl>
							{/* Street */}
							<FormControl isInvalid={!!errors.street}>
								<FormLabel>Street</FormLabel>
								<Input
									type="text"
									size={"md"}
									placeholder="Enter delegate street"
									border="1px solid rgba(0,0,0,0.2)"
									{...register("street")}
								/>
								{errors.street && (
									<FormErrorMessage>
										<FormErrorIcon /> {errors.street.message}
									</FormErrorMessage>
								)}
							</FormControl>
							{/* City */}
							<FormControl isInvalid={!!errors.city}>
								<FormLabel>City*</FormLabel>
								<Input
									type="text"
									size={"md"}
									placeholder="Enter delegate city"
									border="1px solid rgba(0,0,0,0.2)"
									{...register("city", {
										required: "City is required",
									})}
								/>
								{errors.city && (
									<FormErrorMessage>
										<FormErrorIcon /> {errors.city.message}
									</FormErrorMessage>
								)}
							</FormControl>
							{/* State */}
							<FormControl isInvalid={!!errors.state}>
								<FormLabel>State*</FormLabel>
								<Input
									type="text"
									size={"md"}
									placeholder="Enter delegate state"
									border="1px solid rgba(0,0,0,0.2)"
									{...register("state", {
										required: "State is required",
									})}
								/>
								{errors.state && (
									<FormErrorMessage>
										<FormErrorIcon /> {errors.state.message}
									</FormErrorMessage>
								)}
							</FormControl>
							{/* Zip code */}
							<FormControl isInvalid={!!errors.zip_code}>
								<FormLabel>Zip code</FormLabel>
								<Input
									type="text"
									size={"md"}
									placeholder="Enter delegate zip code"
									border="1px solid rgba(0,0,0,0.2)"
									{...register("zip_code")}
								/>
								{errors.zip_code && (
									<FormErrorMessage>
										<FormErrorIcon /> {errors.zip_code.message}
									</FormErrorMessage>
								)}
							</FormControl>
							{/* Phone number */}
							<FormControl isInvalid={!!errors.number}>
								<FormLabel htmlFor="phone">Phone Number*</FormLabel>
								<Input
									type="number"
									size={"md"}
									placeholder="Phone number"
									border="1px solid rgba(0,0,0,0.2)"
									{...register("number", {
										required: "Phone number is required",
										minLength: {
											value: 9,
											message: "Enter a valid phone number",
										},
										pattern: {
											value: /^[0-9]*$/,
											message: "Enter a valid phone number",
										},
									})}
								/>
								{errors.number && (
									<FormErrorMessage>
										<FormErrorIcon /> {errors.number.message}
									</FormErrorMessage>
								)}
							</FormControl>
							{/* Fax number */}
							<FormControl isInvalid={!!errors.fax_number}>
								<FormLabel htmlFor="fax">Fax Number</FormLabel>
								<Input
									type="number"
									size={"md"}
									placeholder="Fax number"
									border="1px solid rgba(0,0,0,0.2)"
									{...register("fax_number")}
								/>
								{errors.fax_number && (
									<FormErrorMessage>
										<FormErrorIcon /> {errors.fax_number.message}
									</FormErrorMessage>
								)}
							</FormControl>
							{/* Email */}
							<FormControl isInvalid={!!errors.email}>
								<FormLabel>Email*</FormLabel>
								<Input
									type="email"
									size={"md"}
									placeholder="Enter delegate email"
									border="1px solid rgba(0,0,0,0.2)"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
											message: "Enter a valid email",
										},
									})}
								/>
								{errors.email && (
									<FormErrorMessage>
										<FormErrorIcon /> {errors.email.message}
									</FormErrorMessage>
								)}
							</FormControl>
							<Button
								bg="#29C7FE"
								color="white"
								_hover={{ opacity: 0.7 }}
								type="submit"
								isLoading={isSubmitting}
								size={{ base: "md", md: "lg" }}
								borderRadius={"xl"}
								loadingText="Please wait..."
							>
								Update Record
							</Button>
						</Stack>
					</chakra.form>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default Edit;
