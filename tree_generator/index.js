import {Trie} from "./generate.js";
var ASTRA_DB_ID = config.ASTRA_DB_ID;
var ASTRA_DB_REGION = config.ASTRA_DB_REGION;
var ASTRA_DB_KEYSPACE = config.ASTRA_DB_KEYSPACE;
var ASTRA_DB_APPLICATION_TOKEN = config.ASTRA_DB_APPLICATION_TOKEN;

  const url = "https://"+ASTRA_DB_ID+"-"+ASTRA_DB_REGION+".apps.astra.datastax.com/api/rest/v1/keyspaces/"+ASTRA_DB_KEYSPACE+"/tables/Word/rows?pageSize=2999";

  const options = {
  headers: {
    "accept": "application/json",
    "X-Cassandra-Token": ASTRA_DB_APPLICATION_TOKEN
  }
};
var x = new Trie();
fetch(url, options)
  .then( res => res.json() )
  .then( data => data['rows'].map(e => x.insert(e['word'])));

  function generate(data)
  {
      for(var ele of data['rows'])
      {
          console.log(typeof(ele['word']))
      }
  }
const e = document.getElementById("inp");

e.addEventListener("change", (e) => spell(e.target.value));

function spell(e){
    var res = x.find(e);
    var r = document.getElementById("result");
    var html = "";
    var i = 0;
    while(i < 5 && i < res.length)
    {
        html = html + res[i] + " ";
        i++;
    }
    r.innerHTML = html;
}
