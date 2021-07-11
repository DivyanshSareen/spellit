var ASTRA_DB_ID = config.ASTRA_DB_ID;
var ASTRA_DB_REGION = config.ASTRA_DB_REGION;
var ASTRA_DB_KEYSPACE = config.ASTRA_DB_KEYSPACE;
var ASTRA_DB_APPLICATION_TOKEN = config.ASTRA_DB_APPLICATION_TOKEN;

  const url = "https://d44db833-076f-4571-b0ae-9903fe102d3d-asia-south1.apps.astra.datastax.com/api/rest/v1/keyspaces/test/tables/Word/rows?pageSize=10"

  const options = {
  headers: {
    "accept": "application/json",
    "X-Cassandra-Token": "AstraCS:iftQBdkxmkMokBnlbgdEJGJe:92ddd3b448d7af3049de195dccbaccca53fcb9c9e4d48e6c0b8b0c9ccce9de98"
  }
};

fetch(url, options)
  .then( res => res.json() )
  .then( data => generate(data) );

  function generate(data)
  {
      console.log(data);
  }