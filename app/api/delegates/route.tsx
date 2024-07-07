import { NextRequest, NextResponse } from "next/server";
// const oracledb = require("oracledb");
import dbConfig from "@/library/db-config";
const oracledb = require("oracledb");

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

		const result = await connection.execute(`SELECT * FROM client`);

		return NextResponse.json({
			status: 200,
			message: "successfull",
			data: result.rows,
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

	// return NextResponse.json({
	// 	status: 200,
	// 	message: "successfull",
	// 	data: [],
	// });
}
