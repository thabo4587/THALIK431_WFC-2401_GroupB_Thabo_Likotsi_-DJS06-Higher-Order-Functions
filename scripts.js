// Sample data for names and provinces
let names = ["John", "Jane", "Doe", "Anna"];
let provinces = ["Alberta", "British Columbia", "Cape Town", "Ontario"];

// ForEach Basics
console.log("\n--- ForEach Basics ---");
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Uppercase Transformation
console.log("\n--- Uppercase Transformation ---");
const upperProvinces = provinces.map(province => province.toUpperCase());
console.log(upperProvinces);

// Name Lengths
console.log("\n--- Name Lengths ---");
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Sorting
console.log("\n--- Sorting ---");
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// Filtering Cape
console.log("\n--- Filtering Cape ---");
const notCapeProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(notCapeProvinces.length);

// Finding 'S'
console.log("\n--- Finding 'S' ---");
const hasS = names.map(name => name.toLowerCase().includes('s'));
console.log(hasS);

// Creating Object Mapping
console.log("\n--- Creating Object Mapping ---");
const nameProvinceMap = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
}, {});
console.log(nameProvinceMap);

// Products example
let products = [
    { product: "Table", price: "250" },
    { product: "Chair", price: "100" },
    { product: "Lamp", price: "30" },
    { product: "Sofa", price: null },
    { product: "Cup", price: "5" }
];

// Advanced Exercises (Separated console.log Execution)
console.log("\n--- Advanced Exercises ---");


console.log("Logged Products:", products.map(p => p.product));


console.log("Filtered by Length:", products.filter(p => p.product.length > 5).map(p => p.product));



console.log("Price Manipulation:", products.filter(p => p.price && !isNaN(p.price)).reduce((acc, p) => acc + Number(p.price), 0));


console.log("Concatenated Names:", products.reduce((acc, p) => acc + p.product + " ", "").trim());


console.log("Price Extremes: Highest:", Math.max(...products.filter(p => p.price && !isNaN(p.price)).map(p => Number(p.price))) + ". Lowest:", Math.min(...products.filter(p => p.price && !isNaN(p.price)).map(p => Number(p.price))));



console.log("Transformed Object:", products.reduce((acc, p) => {
    let key = p.product; // Key for the new object
    let value = p.price; // Value for the new object
    acc[key] = value;
    return acc;
}, {}));
