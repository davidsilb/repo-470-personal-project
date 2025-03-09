const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgresql://repo_470_personal_project_db_user:zxyUYLXLWEMgDKo2T3WmyrWIaiJE5Mym@dpg-cv6n5fjtq21c73dkbf6g-a/repo_470_personal_project_db",
    ssl: {
        rejectUnauthorized: false,
    }
});

module.exports = pool;