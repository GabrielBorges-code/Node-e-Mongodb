class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return `Hello ${this.name}, how are you? `;
    }
}

module.exports = {
    Person,
}