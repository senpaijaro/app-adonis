'use strict'

const Env = use('Env')
const Helpers = use('Helpers')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'sqlite'),

  /*
  |--------------------------------------------------------------------------
  | Sqlite
  |--------------------------------------------------------------------------
  |
  | Sqlite is a flat file database and can be good choice under development
  | environment.
  |
  | npm i --save sqlite3
  |
  */
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath(`${Env.get('DB_DATABASE', 'development')}.sqlite`)
    },
    useNullAsDefault: true
  },

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOSTS', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', '')
    }
  },

  /*
  |--------------------------------------------------------------------------
  | mssql
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for mssql database.
  |
  | npm i --save mssql
  |
  */
  mssql: {
    client: 'mssql',
    connection: {
      host: Env.get('DB_MSHOST', '192.168.0.148'),
      user: Env.get('DB_MSUSER', 'markuser'),
      password: Env.get('DB_MSPASS', 'tseug'),
      database: Env.get('DB_MSDB', 'NOVA_JADE')
    }
  },

  // mssql: {
  //   client: 'mssql',
  //   connection: {
  //     host: Env.get('DB_HOST', 'localhost'), // azure database
  //     user: Env.get('DB_USER', 'root'), // azure user
  //     password: Env.get('DB_PASSWORD', ''), //azure password
  //     database: Env.get('DB_DATABASE', 'adonis'), //azure database
  //     options: {
  //       encrypt: Env.get('DB_ENCRYPT', true)   // use this for Azure database encryption
  //     }
  //   }
  // }
  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis')
    }
  }
}
