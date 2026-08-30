interface IsSized {
    length: number;
}

class DataBox<Type extends IsSized> {
    context: Type;

    constructor(context: Type) {
        this.context = context;
    }

    print() {
        console.log(this.context);
    }
}

const d1 = new DataBox("Hello");
d1.print();

// const d2 = new DataBox(2); // does not work because number does not have a length property

const d3 = new DataBox([1, 2, 3]);
d3.print();
