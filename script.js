// ПЕРВОЕ

// function rgb(red, green, blue){
//     if(red == undefined){
//         red = 0
//     }
//     if(green == undefined){
//         green = 0
//     }
//     if(blue == undefined){
//         blue = 0
//     }

//     let rgbFull = `rgb(${red}, ${green}, ${blue})`
//     return rgbFull
// }

// let r = 120
// let b = 120
// let g = 255

// console.log(rgb(r, g, b))

// ВТОРОЕ

// function avg(){
//     let sum = 0
//     for (let i = 0; i < arguments.length; i += 1){
//       sum += arguments[i]
//     }
//     return sum / arguments.length
// }

// console.log(avg(1,2,3,4,5,6))

// Третье

function repeat(str, n = 2) {
    return new Array(n).fill(str).join("\n")
}
console.log(repeat(''))
console.log(repeat('', 6))