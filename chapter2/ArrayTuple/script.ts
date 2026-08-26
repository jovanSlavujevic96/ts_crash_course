let arr = [1,2,3]
console.log(arr)

function printArray(arr: number[]) {
    console.log(arr)
}
printArray(arr)

function printTuple(tuple: [number, number, string]) {
    console.log(tuple[0])
    console.log(tuple[1])
    console.log(tuple[2])
}
let tpl: [number, number, string] = [27, 34, "49"]
printTuple(tpl)
