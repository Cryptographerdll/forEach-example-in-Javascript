const numbers = [1, 23, 5, 68];

numbers.forEach(function(el, idx) {
    console.log(`${el} ${idx}`);
});

numbers.forEach(el => console.log(el));


setTimeout(function() {
    console.log("hello world")
}, 1000); // 1 Seconde


const countries = [
    { name: 'USA', Location: 'America' },
    { name: 'French', Location: 'Europe' },
    { name: 'China', Location: 'Asia' }
]

countries.forEach(function(el, idx) {
    console.log(el);
});

countries.forEach(function(el, idx) {
    console.log(el.name);
});

countries.forEach(function({ name, Location }) {
    console.log(name, Location)
});

// Arrow function
countries.forEach(({ name, Location }) => {

    if (Location === 'America') {
        console.log(name, Location);
    }
});

// Part 3

const user = {
    name: "John",
    age: 20,
    sex: 'M'
}

let values = Object.keys(user).map(key => {
    console.log(user[key]);
});