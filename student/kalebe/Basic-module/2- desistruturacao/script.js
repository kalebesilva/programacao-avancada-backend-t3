const myArray = ["eu","gosto","de","bolo-de","chocolate"]

const {v1,v2, ...otherVector} =  myArray

const newObj = {
    n1: v1,
    n2: v2,
    n3: otherVector[1],
    n4: otherVector[2],
    n5: otherVector[4]
}

console.log(JSON.stringify(newObj))