/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:QGdZsHX9tFJ8@ep-icy-queen-a12oidfr.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require'
    }
};