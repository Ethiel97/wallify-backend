module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DB_PORT', 3306),
      database: env('DB_DATABASE', 'wallinice'),
      user: env('DB_USERNAME', 'root'),
      password: env('DB_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
