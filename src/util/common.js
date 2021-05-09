import md5 from 'js-md5'
export default {
    sortObjKey(oldObj) {
        let newKeys = Object.keys(oldObj).sort()
        let newObj = {}
        newKeys.forEach(key => {
            newObj[key] = oldObj[key]
        })
        return newObj
    },
    getSign(obj) {
        // let param = obj
        if (Object.prototype.toString.call(obj) === '[object Object]') {
            // let arr = Object.keys(param).sort()
            // let newObj = {}
            // arr.forEach(item => {
            //     newObj[item] = param[item]
            // })
            let str = ''
            for (let i in obj) {
                str += `${i}=${obj[i]}&`
            }

            str = str.substring(0, str.length - 1) + 'fe4da565bb1bf0c667b38b022696d52e'
            return md5(str).toUpperCase()
        }
    }
}