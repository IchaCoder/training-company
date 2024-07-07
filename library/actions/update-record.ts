"use server";

import oracledb from "oracledb";
import dbConfig from "@/library/db-config";
import { FormValueTypes } from "../types";

const UpdateRecord = async (data: FormValueTypes, delegateNo: string) => {
	let connection;

	try {
		// Get a non-pooled connection
		connection = await oracledb.getConnection(dbConfig);

		console.log("Connection was successful!");

		await connection.execute(
			`BEGIN
         update_delegate(:delegateTitle, :delegateFName, :delegateLName, :delegateStreet, :delegateCity, :delegateState, :delegateZipCode, :attTelNo, :attFaxNo, :attEmailAddress, :delegateNo, :clientNo );
       END;`,
			[
				data.title || "",
				data.first_name || "",
				data.last_name || "",
				data.street || "",
				data.city || "",
				data.state || "",
				data.zip_code || "",
				data.number || "",
				data.fax_number || "",
				data.email || "",
				delegateNo,
				data.clientNo || "",
			]
		);
		return { message: "Delegate updated successfully", status: "success" };
	} catch (err) {
		console.error(err);
		return { message: "Delegate not updated", status: "error" };
	} finally {
		if (connection) {
			try {
				await connection.close();
			} catch (err) {
				console.error(err);
			}
		}
	}
};

export default UpdateRecord;
