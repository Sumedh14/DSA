const nestedObject = {
    name: "Vishal Kukreja",
    age: 32,
    address: {
        street: "123 Mumbai fashion St",
        city: "Midtown",
        state: "MH",
    },
    hobbies: ["reading", "drawing", "gardening"],
};

// const newObj = {}

function nestedObjectIteration (nestedObject) {
    for (let firstKey in nestedObject) {
        if (typeof nestedObject[firstKey] === 'Object' && nestedObject[firstKey] !== null) {
            nestedObjectIteration(nestedObject[firstKey]);
        } else {
            console.log(`${firstKey}: ${nestedObject[firstKey]} `);
            // newObj.push({ ...newObj, firstKey: nestedObject[firstKey] })

        }
    }
}

nestedObjectIteration(nestedObject)

// console.log(newObj)


/*
function nestedObject(nObject){
    for(let prop in nObject){
        if(typeof nObject[prop] === 'Object' && nObject[prop] !== null) {
           return nestedObject(nObject[prop])
        }
        else{
            console.log(`${firstKey}: ${nObject[prop]} `);
        }
    }
}

*/