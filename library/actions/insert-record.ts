"use server";

import oracledb from "oracledb";
import { FormValueTypes } from "../types";
import dbConfig from "../db-config";

const clientNo = 20;

const InserRecord = async (data: FormValueTypes) => {
  let connection;

  try {
    // Get a non-pooled connection
    connection = await oracledb.getConnection(dbConfig);

    console.log("Connection was successful!");

    await connection.execute(
      `BEGIN
         insert_delegate(:delegateTitle, :delegateFName, :delegateLName, :delegateStreet, :delegateCity, :delegateState, :delegateZipCode, :attTelNo, :attFaxNo, :attEmailAddress, :clientNo);
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
        clientNo,
      ]
    );
    return { message: "Delegate inserted successfully", status: "success" };
  } catch (err) {
    console.error(err);
    return { message: "Delegate not inserted", status: "error" };
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

export default InserRecord;
