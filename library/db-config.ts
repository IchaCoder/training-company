const config = {
  user: "system",

  // Get the password from the environment variable
  // NODE_ORACLEDB_PASSWORD.  The password could also be a hard coded
  password: "1234",

  // For information on connection strings see:
  // https://node-oracledb.readthedocs.io/en/latest/user_guide/connection_handling.html#connectionstrings
  connectString: "localhost/ORCL",
};

export default config;
