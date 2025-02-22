function deepClone(obj) {
    if (obj === null || obj === undefined) {
        return obj;
    }

    if (Number.isNaN(obj)) {
        return NaN;
    }

    if (typeof obj === 'function') {
        return obj.bind({});
    }

    if (Array.isArray(obj)) {
        let arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
    }

    if (typeof obj === 'object') {
        let objCopy = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                objCopy[key] = deepClone(obj[key]);
            }
        }
        return objCopy;
    }

    return obj;
}

const obj = {
    name: 'John',
    age: 30,
    greet: function() { return `Hello, my name is ${this.name}`; },
    nested: {
        hobbies: ['reading', 'coding'],
        info: {
            city: 'Kyiv',
            country: 'Ukraine',
        },
    },
    someNaN: NaN,
    someNull: null,
    someUndefined: undefined,
};

const clonedObj = deepClone(obj);

console.log(clonedObj);
console.log(clonedObj.greet());


//-------------------------------------------------------------

let coursesAndDurationArray = [
    { id: 1, title: 'JavaScript Complex', monthDuration: 5 },
    { id: 2, title: 'Java Complex', monthDuration: 6 },
    { id: 3, title: 'Python Complex', monthDuration: 6 },
    { id: 4, title: 'QA Complex', monthDuration: 4 },
    { id: 5, title: 'FullStack', monthDuration: 7 },
    { id: 6, title: 'Frontend', monthDuration: 4 }
]

let transformedArray = coursesAndDurationArray.map((course, index) => ({id: index + 1, title: course.title, monthDuration: course.monthDuration}));

console.log(transformedArray);

