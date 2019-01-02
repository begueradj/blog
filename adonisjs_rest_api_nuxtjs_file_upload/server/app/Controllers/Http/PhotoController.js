'use strict'

// const Product = use('App/Models/Product')
const Helpers = use('Helpers')

class PhotoController {
  async upload( {request, response} ) {
    const avatar = request.file('file')
    console.log('avatar: ' + avatar.clientName)
    await avatar.move(Helpers.tmpPath('photos'), {
      name: new Date().getTime() +'.'+avatar.subtype,
      overwrite: true
    })
  }
}

module.exports = PhotoController
