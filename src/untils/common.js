export default {
    sortObjKey(oldObj) {
        let newKeys = Object.keys(oldObj).sort()
        let newObj = {}
        newKeys.forEach(key => {
            newObj[key] = oldObj[key]
        })
        return newObj
    }
}