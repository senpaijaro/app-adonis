'use strict'

const Model = use('Model')

class UserPostMysql extends Model {

  static get connection(){
    return 'mysql'
  }
}

module.exports = UserPostMysql
