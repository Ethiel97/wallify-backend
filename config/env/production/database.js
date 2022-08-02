module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    version: '10.5',
    connection: {
      host: process.env.DB_HOST,
      port: env.int('DB_PORT', 3306),
      database: env('DB_NAME', 'wallinice'),
      user: env('DB_USERNAME', 'root'),
      password: env('DB_PASSWORD', ''),
      ssl: env.bool('DB_SSL', true),
      options: '--cluster=brave-entity-2863',
      // cluster: 'brave-entity-2863'
    },
  },
});
