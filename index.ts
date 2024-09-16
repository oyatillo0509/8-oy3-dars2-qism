// 1-masala

// interface Person {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }

// 2-masala

// const person: Person = {
//   name: "John Doe",
//   age: 25,
//   isStudent: false,
// };

// 3-masla

// interface Book {
//   title: string;
//   author: string;
//   publishedYear: number;
// }

// 4-masala

// const book: Book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publishedYear: 1925,
// };

//  2. **Massivlar**

// 1-masala

// const numbers: number[] = [1, 2, 3, 4, 5];

// 2-masala

// function sumArray(numbers: number[]): number {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }

// const numbers: number[] = [1, 2, 3, 4, 5];
// const total = sumArray(numbers);
// console.log(total);

// 3-masala

// const fruits: string[] = ["apple", "banana", "cherry"];

// 4-masala

// function convertToUpperCase(words: string[]): string[] {
//   return words.map(word => word.toUpperCase());
// }

// const fruits: string[] = ["apple", "banana", "cherry"];
// const res = convertToUpperCase(fruits);
// console.log(res);

// **Mashq 3:** Tuple bilan Ishlash

// 1-masla

// type StudentRecord = [string, number, boolean];
// const student: StudentRecord = ["Ali", 22, true];

// 2-masala

// type Coordinate = [number, number];
// const coordinate: Coordinate = [10, 20];

// ### 4. **any**

// 1-masala

// let res: any;

// res = "Hello";
// console.log(res);

// res = 40;
// console.log(res);

// res = true;
// console.log(res);

// 2-masala

// let mixedArray: any[] = ["Hello", 42, true, { key: "value" }, [1, 2, 3]];

// function Res(arr: any[]): void {
//   arr.forEach((item) => console.log(item));
// }
// Res(mixedArray);

// ### 5. **unknown**

// 1-masala

// let res: unknown;

// res = "Hello";
// console.log(res);

// res = 42;
// console.log(res);

// res = true;
// console.log(res);

// res = { key: "value" };
// console.log(res);

// res = [1, 2, 3];
// console.log(res);

// ### 6. **never**

// 1-masla

// function theError(message: string): never {
//   throw new Error(message);
// }
// theError("Bu xatolik xabari.");

// 2-masla

// function whileloop(): never {
//   while (true) {
//     console.log("Bu funksiya abadiy davom etadi");
//   }
// }

// whileloop();

// ### 7. **Funksiyalar**

// 1-masala

// function addNumbers(a: number, b: number): number {
//   return a + b;
// }

// const res = addNumbers(5, 10);
// console.log(res);

// ### 8. **Enum**

// 1-maslala

// enum DaysOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }
// const today: DaysOfWeek = DaysOfWeek.Monday;
// console.log(today);
// console.log(DaysOfWeek[today]);

// 2-maslala

// enum DaysOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday
// }

// function printDay(day: DaysOfWeek): void {
//   console.log(DaysOfWeek[day]);
// }

// printDay(DaysOfWeek.Wednesday);

// ### 9. **Intersection**
// 1-masala

// interface Person {
//   name: string;
//   age: number;
// }

// interface Employee {
//   employeeId: number;
//   department: string;
// }

// 2-masala

// interface Person {
//   name: string;
//   age: number;
// }

// interface Employee {
//   employeeId: number;
//   department: string;
// }

// type Worker = Person & Employee;

// const worker: Worker = {
//   name: "Tilloxon",
//   age: 30,
//   employeeId: 12345,
//   department: "dasturchi",
// };

// console.log(worker);

// 3-masala

// const worker: Worker = {
//   name: "Jane Doe",
//   age: 30,
//   employeeId: 12345,
//   department: "HR",
// };

// console.log(worker);

// ### 10. **interface**

// 1-masala

// interface Vehicle {
//   make: string;
//   model: string;
//   year: number;
// }

// 2-masala

// interface Vehicle {
//   make: string;
//   model: string;
//   year: number;
// }

// interface Car extends Vehicle {
//   numberOfDoors: number;
//   isElectric: boolean;
// }

// 3-masala

// const car: Car = {
//   make: "Tesla",
//   model: "Model S",
//   year: 2024,
//   numberOfDoors: 4,
//   isElectric: true,
// };

// console.log(car);

// ### **Aralash Mashqlar**

// 1-masala

// interface Student {
//   name: string;
//   age: number;
//   grades: number[];
//   address: [string, number];
// }

// 2-masala

// interface Student {
//   name: string;
//   age: number;
//   grades: number[];
//   address: [string, number];
// }

// function ResStudent(student: Student): string {
//   const averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;

//   return `Name: ${student.name}, Age: ${student.age}, Average Grade: ${averageGrade.toFixed(2)}`;
// }

// const student: Student = {
//   name: "John Doe",
//   age: 21,
//   grades: [85, 90, 78, 92],
//   address: ["123 Elm St", 45678]
// };

// const summary = ResStudent(student);
// console.log(summary);

// 3-masala

// enum OrderStatus {
//   Pending,
//   Shipped,
//   Delivered,
//   Cancelled
// }

// const status: OrderStatus = OrderStatus.Shipped;
// console.log(status);
// console.log(OrderStatus[status]);

// 4-masala
// enum OrderStatus {
//   Pending,
//   Shipped,
//   Delivered,
//   Cancelled,
// }

// interface Order {
//   orderId: number;
//   status: OrderStatus;
//   totalAmount: number;
// }

// 5-masala

// interface Customer {
//   customerId: number;
//   name: string;
// }

// 6-masala

// enum OrderStatus {
//   Pending,
//   Shipped,
//   Delivered,
//   Cancelled,
// }

// interface Order {
//   orderId: number;
//   status: OrderStatus;
//   totalAmount: number;
// }

// interface Customer {
//   customerId: number;
//   name: string;
// }

// type CustomerOrder = Order & Customer;

// const customerOrder: CustomerOrder = {
//   orderId: 101,
//   status: OrderStatus.Shipped,
//   totalAmount: 250,
//   customerId: 12345,
//   name: "Jane Doe",
// };

// console.log(customerOrder);

// 7-masala

// enum OrderStatus {
//   Pending,
//   Shipped,
//   Delivered,
//   Cancelled,
// }

// interface Order {
//   orderId: number;
//   status: OrderStatus;
//   totalAmount: number;
// }

// interface Customer {
//   customerId: number;
//   name: string;
// }

// type CustomerOrder = Order & Customer;

// const customerOrder: CustomerOrder = {
//   orderId: 456,
//   status: OrderStatus.Shipped,
//   totalAmount: 150.0,
//   customerId: 789,
//   name: "Sarah",
// };

// console.log(customerOrder);
