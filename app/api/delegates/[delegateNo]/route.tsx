import { NextRequest, NextResponse } from "next/server";
// const oracledb = require("oracledb");
import dbConfig from "@/library/db-config";
import oracledb from "oracledb";

type DelegateType = {
	message: string;
	status: number;
	data: any;
};

export async function GET(
	req: NextRequest,
	{ params }: { params: { delegateNo: string } }
): Promise<NextResponse<DelegateType>> {
	const delegateNo = params.delegateNo;
	console.log(delegateNo);

	let connection;

	try {
		// Get a non-pooled connection
		connection = await oracledb.getConnection(dbConfig);

		console.log("Connection was successful!");

		const result: oracledb.Result<any> = await connection.execute(
			`BEGIN
				get_delegate(:delegateNo, :cursor);
			END;`,
			{
				delegateNo: delegateNo,
				cursor: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT },
			}
		);
		const resultSet = result.outBinds.cursor;
		const rows = await resultSet.getRows();

		return NextResponse.json({
			status: 200,
			message: "successfull",
			data: rows,
		});
	} catch (err) {
		console.error(err);
	} finally {
		if (connection) {
			try {
				await connection.close();
			} catch (err) {
				console.error(err);
			}
		}
	}

	return NextResponse.json({
		status: 200,
		message: "successfull",
		data: [],
	});
}
