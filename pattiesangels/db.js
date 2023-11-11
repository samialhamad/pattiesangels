const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '107.172.101.46',
    port: 3306,
    database: 'pattiesangelsdev',
    user: 'pattiesangelsdevuser',
    password: 'Mnh4yHrbo6z0WaTkM3DS',
    connectionLimit: 5
})
