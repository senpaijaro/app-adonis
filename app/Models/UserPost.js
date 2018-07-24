'use strict'

const Model = use('Model')

class UserPost extends Model {

  static get connection() {
    return 'mssql'
  }

  static get table(){
    return 'tbluser'
  }

}

module.exports = UserPost
