"use server";

import oracledb from "oracledb";
import dbConfig from "@/library/db-config";

const Backup = async () => {
	let connection;

	try {
		// Get a non-pooled connection
		connection = await oracledb.getConnection(dbConfig);

		console.log("Connection was successful!");

		await connection.execute(
			`BEGIN
    EXECUTE IMMEDIATE 'CREATE TABLE Backup_Delegate AS SELECT * FROM Delegate';
    EXECUTE IMMEDIATE 'CREATE TABLE Backup_Invoice AS SELECT * FROM Invoice';
    EXECUTE IMMEDIATE 'CREATE TABLE Backup_Registration AS SELECT * FROM Registration';
    EXECUTE IMMEDIATE 'CREATE TABLE Backup_Booking AS SELECT * FROM Booking';
    EXECUTE IMMEDIATE 'CREATE TABLE Backup_Course AS SELECT * FROM Course';
    EXECUTE IMMEDIATE 'CREATE TABLE Backup_CourseFee AS SELECT * FROM CourseFee';
    EXECUTE IMMEDIATE 'CREATE TABLE Backup_CourseType AS SELECT * FROM CourseType';
    EXECUTE IMMEDIATE 'CREATE TABLE Backup_Location AS SELECT * FROM Location';
    EXECUTE IMMEDIATE 'CREATE TABLE Backup_Client AS SELECT * FROM Client';
    EXECUTE IMMEDIATE 'CREATE TABLE Backup_Employee AS SELECT * FROM Employee';
    EXECUTE IMMEDIATE 'CREATE TABLE Backup_PaymentMethod AS SELECT * FROM PaymentMethod';
    DBMS_OUTPUT.PUT_LINE('Backup completed successfully.');
END;`
		);
		return { message: "Table backup successfully", status: "success" };
	} catch (err) {
		console.error(err);
		return { message: "Backup error", status: "error" };
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

export default Backup;
