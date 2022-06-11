const person = {
    name: 'Lavanya',
    age: 23,
    hobbies: ['listening to music','chatting','cooking'],
    greet: function(){
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};
console.log(typeof person);
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);