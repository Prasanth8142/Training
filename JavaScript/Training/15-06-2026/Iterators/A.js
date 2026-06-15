const arr = [10, 20, 30];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());




const numbers = {
    start: 1,
    end: 3,

    [Symbol.iterator]() {
        let current = this.start;
        let last = this.end;

        return {
            next() {
                if (current <= last) {
                    return {
                        value: current++,
                        done: false
                    };
                }
                return {
                    done: true
                };
            }
        };
    }
};

for (let num of numbers) {
    console.log(num);
}