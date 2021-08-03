//<-------------------- Numeric Enums and reverse mappings

enum Sizes{
    Small,
    Medium, 
    Large,
}

enum Sizes{
    ExtraLarge = 3
}

const selectedSize = 2;

console.log(Sizes);
// String Value
console.log(Sizes[selectedSize]);
// Numeric Value
console.log(Sizes.Medium);
// String Value
console.log(Sizes[Sizes.Large]);
// Numeric Value
console.log(Sizes['Small']);
