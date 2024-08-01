const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'Qwerty100',
    host: 'db_backend',
    port: '5432',
    database: 'gnuplot_db'
})

module.exports = pool