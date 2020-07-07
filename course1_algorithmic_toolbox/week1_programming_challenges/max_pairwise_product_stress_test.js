const max  = require("./max_pairwise_product")

function max2(arr) {
    // write your code here
    let maxNum = 0;
    for(const [indexExternal, numExternal] of arr.entries()){
        for(const [indexInternal, numInternal] of arr.entries()){
            if(indexExternal === indexInternal) continue;
            if((numExternal*numInternal) > maxNum) maxNum = numExternal*numInternal;
        }   
    }
    return maxNum
}

function test(){
    while(true){
        // generate number between 2 and 11
        const nums = Math.floor(Math.random() * (11-2)) + 2
        const numsArray = []
        for(let i = 0; i < nums ; i++){
            // generate random num between 0 and 100000
            const randomNum = Math.floor(Math.random() * 100000); 
            numsArray.push(randomNum)
        }
        const outPutOne = max(numsArray)
        const outPutOne2 = max2(numsArray)

        if(outPutOne === outPutOne2) {
            console.log("ok")
        }else{
            console.log("not ok",arr , "  ", outPutOne, outPutOne2)
            break;
        }
    }
}
test()