console.log("----- Generator -----");

function* fruits() {
    yield "Apple";
    yield "Mango";
    yield "Orange";
}

let gen = fruits();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());