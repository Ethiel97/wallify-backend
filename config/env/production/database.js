module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    version: '10.5',
    connection: {
      host: env('DB_HOST', '127.0.0.1'),
      port: env.int('DB_PORT', 3306),
      database: env('DB_NAME', 'wallinice'),
      user: env('DB_USERNAME', 'root'),
      password: env('DB_PASSWORD', ''),
      ssl: env.bool('DB_SSL', false),
      options: '--cluster=brave-entity-2863',
      // cluster: 'brave-entity-2863'
    },
  },
});
