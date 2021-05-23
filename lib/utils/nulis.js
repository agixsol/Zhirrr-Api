const needle = require('needle')
const _ = require('lodash')
const fetch = require('node-fetch')
const Nulis = (text) => new Promise((resolve, reject) => {
    let url = 'http://salism3.pythonanywhere.com/write?text='
    if (typeof text === 'undefined') { reject('masukan text nya kak.') }
    if (text.indexOf('#') > -1) { text.replace(/\#/g, '')}

    needle(url + text, (err, resp, body) => {
        if (_.isEmpty(body) === true) {
        return bot.sendMessage(msg.chat.id, 'Gagal!, coba lagi pelan-pelan...jangan lupa berdoa juga!')
        }
        if (_.isEmpty(body.images) === true) { 
        return bot.sendMessage(msg.chat.id, 'Gagal!, Masukkan teks terlebih dahulu!')
        }
        await bot.sendMessage(msg.from.id, 'Sebentar ya ngab...')
        await delay(200)
        await bot.sendPhoto(msg.from.id, `${body.images}`, { caption: 'Sukses!😎' })

    })
})

Nulis(process.argv.slice(2).join(' ')).then(data => console.log('.')).catch(err => console.log(err))
module.exports = Nulis
