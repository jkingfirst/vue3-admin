Object.assign(Array.prototype,{
    unique (){
        let temArr = [this[0]]
        for(let item of this){
            if(temArr.indexOf(item)<0){
                temArr.push(item)
            }
        }
        return temArr
    }
})
