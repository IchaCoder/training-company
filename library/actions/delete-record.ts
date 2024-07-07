"use server";

import oracledb from "oracledb";
import dbConfig from "@/library/db-config";

const DeleteRecord = async (delegateNo: string) => {
	let connection;

	try {
		// Get a non-pooled connection
		connection = await oracledb.getConnection(dbConfig);

		console.log("Connection was successful!");

		await connection.execute(
			`BEGIN
         delete_delegate(:delegateNo);
       END;`,
			[delegateNo]
		);
		return { message: "Delegate deleted successfully", status: "success" };
	} catch (err) {
		console.error(err);
		return { message: "Delegate not deleted", status: "error" };
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

export default DeleteRecord;
