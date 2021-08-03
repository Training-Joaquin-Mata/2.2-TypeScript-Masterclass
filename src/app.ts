// //<-------------------- Numeric Enums and reverse mappings

// enum Sizes{
//     Small,
//     Medium, 
//     Large,
// }

// enum Sizes{
//     ExtraLarge = 3
// }

// const selectedSize = 2;

// console.log(Sizes);
// // String Value
// console.log(Sizes[selectedSize]);
// // Numeric Value
// console.log(Sizes.Medium);
// // String Value
// console.log(Sizes[Sizes.Large]);
// // Numeric Value
// console.log(Sizes['Small']);


//<-------------------- String Enums and Inlining Members

const enum Sizes{
    Small = 'small', 
    Medium = 'medium',
    Large = 'large',

}
let selected: Sizes = Sizes.Small;

function updateSize(size: Sizes): void{
    selected= size;
}

updateSize(Sizes.Large);

console.log(selected);


