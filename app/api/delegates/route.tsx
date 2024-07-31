import { NextRequest, NextResponse } from "next/server";
// const oracledb = require("oracledb");
import dbConfig from "@/library/db-config";
import oracledb from "oracledb";
type DelegateType = {
  message: string;
  status: number;
  data: any;
};

export async function GET(req: NextRequest): Promise<NextResponse<DelegateType>> {
  let connection;

  try {
    // Get a non-pooled connection
    connection = await oracledb.getConnection(dbConfig);

    console.log("Connection was successful!");

    const result = await connection.execute(`BEGIN get_all_delegates(:p_cursor); END;`, { p_cursor: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT} });

    const resultSet = result.outBinds.p_cursor
    const rows = [];

    if (resultSet) {
      let row;
      while ((row = await resultSet.getRow())) {
        console.log(row);
        
        rows.push(row);
      }
      await resultSet.close();
    }

    return NextResponse.json({
      status: 200,
      message: "successful",
      data: rows,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      status: 404,
      message: "error",
      data: [],
    });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}
