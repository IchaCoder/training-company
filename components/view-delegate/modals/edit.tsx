import UpdateRecord from "@/library/actions/update-record";
import {
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
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  delegate: string[];
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
  id: string;
  client_no: string;
};

const Edit = ({ isOpen, onClose, id, delegate }: Props) => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm<FormValueTypes>();

  const onUpdate = async (data: FormValueTypes) => {
    const { message, status } = await UpdateRecord(data, id);

    toast({
      title: message,
      status: status === "success" ? "success" : "error",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });

    onClose();
  };

  useEffect(() => {
    setValue("title", delegate?.[1]);
    setValue("first_name", delegate?.[2]);
    setValue("last_name", delegate?.[3]);
    setValue("street", delegate?.[4]);
    setValue("city", delegate?.[5]);
    setValue("state", delegate?.[6]);
    setValue("zip_code", delegate?.[7]);
    setValue("number", delegate?.[8]);
    setValue("fax_number", delegate?.[9]);
    setValue("email", delegate?.[10]);
    setValue("id", delegate?.[0]);
    setValue("client_no", delegate?.[12]);
  }, [delegate]);

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
