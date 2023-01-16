const { Pool } = require('pg');

const Pool=require('pg').Pool;
const Pool=new Pool({
    user:"postgres",
    password:"RC09RC",
    host:"localhost",
    port:5432,
    database:"node_postgres"
})


module.exports=pool;