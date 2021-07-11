import PrefixTree from "./generate.js";
const x = new PrefixTree();
var ASTRA_DB_ID = config.ASTRA_DB_ID;
var ASTRA_DB_REGION = config.ASTRA_DB_REGION;
var ASTRA_DB_KEYSPACE = config.ASTRA_DB_KEYSPACE;
var ASTRA_DB_APPLICATION_TOKEN = config.ASTRA_DB_APPLICATION_TOKEN;

  const url = "https://"+ASTRA_DB_ID+"-"+ASTRA_DB_REGION+".apps.astra.datastax.com/api/rest/v1/keyspaces/"+ASTRA_DB_KEYSPACE+"/tables/Word/rows?pageSize=10";

  const options = {
  headers: {
    "accept": "application/json",
    "X-Cassandra-Token": ASTRA_DB_APPLICATION_TOKEN
  }
};

fetch(url, options)
  .then( res => res.json() )
  .then( data => generate(data) );

  function generate(data)
  {
      console.log(data);
  }