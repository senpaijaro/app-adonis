'use strict'

const Schema = use('Schema')

class UserPostsSchema extends Schema {
  up () {
    this.create('user_posts', (table) => {
      table.increments()
      table.string('firstname')
      table.string('lastname')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_posts')
  }
}

module.exports = UserPostsSchema
