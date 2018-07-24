'use strict'

const UserPost = use('App/Models/UserPost')
const UserPostMysql = use('App/Models/UserPostMysql')
const { validate } = use('Validator')
const Database = use('Database')

class UserController {
  async index({view}){

    const post = await UserPost.query().fetch()
    const posts = await UserPostMysql.query('users_posts').fetch()
    // const post = await Database.select('*').from('users')
    return view.render('welcome', {
      title: 'Latest Post',
      posts: posts.toJSON()
    })
  }

  async details({params, view}){
      const user = await UserPost.find(params.id)
      return view.render('welcome_edit',{
        title: 'Edit Post User',
        posts: user.toJSON()
      })
  }

  async add({ request , response , session}){
    const validation = await validate(request.all(),{
      firstName: 'required|min:3|max:25',
      lastName: 'required|min:3|max:25'
    })

    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }

    const post = new UserPost()
    post.firstname = request.input('firstName')
    post.lastname = request.input('lastName')
    await post.save()

    session.flash({ message: 'Successfully added'})
    return response.redirect('/')
  }

  async update({ params, request, response, session}){
    const validation = await validate(request.all(),{
      firstName: 'required|min:3|max:25',
      lastName: 'required|min:3|max:25'
    })

    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }

    const user = await UserPost.find(params.id)
    user.firstname = request.input('firstName')
    user.lastname = request.input('lastName')
    await user.save()

    session.flash({ message: 'Success edited'})
    return response.redirect('/')
  }
  
  async delete({ params , request, response, session}){
    const user = await UserPost.find(params.id)
    await user.delete()
    session.flash({ message: 'Success deleted'})
    return response.redirect('/')
  }
}

module.exports = UserController
