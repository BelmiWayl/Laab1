//Вариант 6
//Задание 2
const remainder = (a: number, b: number): number => a % b;

// Пример использования:
console.log(remainder(10, 3)); // Вывод: 1
console.log(remainder(15, 4)); // Вывод: 3

//Задание 3
const myName: string = "Вадим";
const mySurname: string = "Прокопов";
const genderIsMale: boolean = true;
const groupId: number = 6202;
let aliveStatus: boolean = true;
const pets: string[] = ["Кошка", "Собака", "Черепаха"];
let years: number = 19;
pets.push("попугай")
console.log(pets)


//Задание 4
interface Entity {
    id: number;
   }
   interface ToJsonStringify extends
   Entity {
    e1?: number;
    e2?: number;
   }
   const data: ToJsonStringify = {
    id: 6,
    e1: 0,
    e2: 28,
   }
   const jsonEntity: string = JSON.stringify(data);
   console.log(jsonEntity) 
