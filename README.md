### DJS06 Project Brief: Higher Order Functions

#### Objective
This project is designed to challenge and deepen your understanding of JavaScript's powerful array methods. You'll manipulate data using `forEach`, `map`, `filter`, `reduce`, and more, to perform a variety of tasks. This exercise will test your ability to apply these methods in combination to solve complex problems and achieve desired outcomes.

The essence of using these higher-order functions is to encourage a declarative approach to programming: you define what you want to achieve (e.g., filter a list, transform data) without having to specify how to perform the operations step-by-step (as you would with imperative loops like for or while). This leads to more readable, concise, and often more maintainable code. Additionally, these functions can help avoid side effects and create pure functions, both key aspects of functional programming.

#### Data Sets
You will work with two primary datasets:

1. A list of provinces:
```javascript
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
```
2. A list of names:
```javascript
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
```
3. A list of products with prices:
```javascript
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
```

#### Exercises

1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".
2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console.
3. **Name Lengths**: Create a new array using `map` that contains the length of each name.
4. **Sorting**: Use `sort` to alphabetically sort the provinces. 
5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.
6. **Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
7. **Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.

#### Advanced Exercises (Single `console.log` Execution)
For these exercises, wrap your logic in a single `console.log` statement:

1. **Log Products**: Iterate over the products array, logging each product name.
2. **Filter by Name Length**: Filter out products with names longer than 5 characters.
3. **Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
4. **Concatenate Product Names**: Use `reduce` to concatenate all product names into a single string.
5. **Find Extremes in Prices**: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.

Certainly! Here's the GitHub-style documentation explaining the provided code:

---

### DJS06 Project Brief: Higher Order Functions

This code snippet demonstrates various JavaScript array operations such as iteration, transformation, sorting, filtering, and reduction applied to sample data sets of names, provinces, and products.

## Names and Provinces Operations

### ForEach Basics

- Iterates over each name and province and logs them to the console.

### Uppercase Transformation

- Transforms each province to uppercase and logs the result.

### Name Lengths

- Computes the length of each name and logs the result.

### Sorting

- Sorts the provinces array in alphabetical order and logs the result.

### Filtering Cape

- Filters out provinces containing the word "Cape" and logs the count of remaining provinces.

### Finding 'S'

- Checks if each name contains the letter 's' (case-insensitive) and logs the result.

### Creating Object Mapping

- Creates a mapping between names and provinces and logs the resulting object.

## Products Operations

### Advanced Exercises

- **Logged Products:** Logs the names of all products.
- **Filtered by Length:** Filters products by name length greater than 5 and logs the result.
- **Price Manipulation:** Calculates the total price of all products with valid prices and logs the result.
- **Concatenated Names:** Concatenates all product names and logs the result.
- **Price Extremes:** Finds the highest and lowest prices among products with valid prices and logs the result.
- **Transformed Object:** Transforms the products array into an object where the product names are keys and prices are values, then logs the result.
### Explanations on Choices Made:

#### Data Structure:
- **Arrays for Names and Provinces:** Arrays are chosen to store the sample data for names and provinces as they provide a straightforward way to store and manipulate ordered collections of items.

#### Iteration and Transformation:
- **forEach Method:** Used to iterate over each element in the names and provinces arrays and log them to the console. This method is chosen for its simplicity and readability in performing an action for each element without creating a new array.
- **map Method:** Employed to transform each province to uppercase and compute the length of each name. The map method is ideal for transforming each element of an array into a new array of the same length, preserving the original data while applying the transformation.

#### Sorting:
- **sort Method:** Applied to sort the provinces array alphabetically. The sort method is used as it provides a convenient way to sort the elements of an array in place, allowing for easy alphabetical ordering of the provinces.

#### Filtering:
- **filter Method:** Utilized to filter out provinces containing the word "Cape". The filter method is chosen for its ability to create a new array with all elements that pass a certain condition, enabling easy removal of undesired elements from the array.

#### Reduction:
- **reduce Method:** Employed to create a mapping between names and provinces. The reduce method is selected for its capability to accumulate values and construct a new object based on the elements of the array, allowing for the creation of a mapping between names and provinces.

### Struggles Encountered:

#### Handling Null Values:
- Dealing with null values in the products array posed a challenge when calculating the total price. Extra precautions were taken to ensure that only valid prices are considered in the calculation, preventing unexpected errors.

#### Error Handling:
- Ensuring error-free execution of operations, especially when dealing with potential errors such as NaN (Not-a-Number) values in prices, required thorough error handling to maintain code reliability and stability.

#### Maintaining Readability:
- Striving to maintain code readability while implementing complex array operations was a constant concern. Efforts were made to write clear and concise code, utilizing appropriate variable names and comments to enhance understanding and maintainability.

#### Optimization:
- Optimizing the code for performance, especially in advanced exercises involving multiple array methods, required careful consideration to avoid unnecessary iterations and ensure efficient execution of operations. Constant refinement was undertaken to balance performance and readability.
