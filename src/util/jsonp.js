import jsonp from 'jsonp'
import querystring from 'querystring'
const _jsonp = ({url, params}) => {
    let _params = params || {}
    return new Promise(resolve => {
        jsonp(url+ '?' + querystring.stringify(_params), {
            param: 'jsoncallback'
        }, (err, data) => {
            // console.log(data, 111)
            resolve(data)
        })  
    })
    
}

export default _jsonp