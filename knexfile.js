const defaultConfig = (env) => {
  const connectionString = (
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@localhost:5432/ragency-${env}`
  )

  return {
    client: 'postgresql',
    connection: connectionString,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: __dirname + `/db/seeds/${env}`
    }
  }
}

module.exports = {
  development: defaultConfig('development'),
}
