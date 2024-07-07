export type DelegateType = {
	delegateNo: string;
	delegateTitle: string;
	delegateFName: string;
	delegateLName: string;
	delegateStreet: string;
	delegateCity: string;
	delegateState: string;
	delegateZipCode: string;
	attTelNo: string;
	attFaxNo: string;
	attEmailAddress: string;
	clientNo: string;
};

export type FormValueTypes = {
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
	clientNo?: string;
	delegateNo?: string;
};
