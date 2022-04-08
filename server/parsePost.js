// const unirest = require('unirest')
// const cheerio = require('cheerio')

import unirest from 'unirest'
import cheerio from 'cheerio'

async function parsePost (url, elems){
    await unirest.get(url)
       .end(response => {

    const body = response.body

    const $ = cheerio.load(body);
    
    const domain = url.match(/\/\/(.*?)\//)[1]

    const title = $(elems.title).text().trim()
    const text = $(elems.text).text()
    let image = $(elems.image).attr('src')
    let video = $(elems.video).attr('src')


    if(image) {
        image = image.indexOf('http') >= 0 ? image : `http://${domain}${image}`
        const post = {
            image: image,
            title: title,
            text: text
        }  
        console.log(post)
    } else if (video) {
        video = video.indexOf('http') >= 0 ? video : `http://${domain}${video}` 
        const post = {
            video: video,
            title: title,
            text: text
        }
        console.log(post)
    }
})}

export { parsePost }