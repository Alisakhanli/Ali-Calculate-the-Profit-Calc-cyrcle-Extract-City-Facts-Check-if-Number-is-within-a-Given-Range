// task1: Cycle

// class Daire {
//     PI = Math.PI

//     constructor(name = String(), radius = 0) {
//         this.name = name;
//         this.radius = radius;
//     }

//     calcArea = () => Math.pow(this.PI * this.radius, 2).toFixed();
//     calcLength = () => (this.PI * this.radius * 2).toFixed();
// }



// const circle = new Daire('a', 50);

// console.log(`a dairesinin sahesi: ${circle.calcArea()}`)
// console.log(`a dairesinin cevre uzunlugu: ${circle.calcLength()}`)






//Task2: Profit

// const prof= {
//     tomato: {
//         costPrice: 32.67,
//         sellPrice: 45.00,
//         inventory: 1200
//     },
//     apple: {
//         costPrice: 2,
//         sellPrice: 2.5,
//         inventory: 5000
//     }
// }

// const calculateSellData = (data) => Number(((Math.max(data.costPrice, data.sellPrice) - Math.min(data.costPrice, data.sellPrice)) * data.inventory).toFixed());

// console.log(`Tomato: ${calculateSellData(prof.tomato)}$`)
// console.log(`Apple: ${calculateSellData(prof.apple)}$`)






// Task 3: Check

// const check = (number, min, max) => (min <= number && number <= max);


// console.log(`is in range? (number:4, min:0, max:5): Result = ${check(10, 0, 20)}`)

//Task 4:


// const cityDatas = {
//     Baku: {
//         name: "Baku",
//         population: 3_125_000,
//         continent: "Asia"
//     }
// }


// const cityFact = (cityData) => console.log(`${cityData.name} has a population of ${String(cityData.population)} and is situated in ${cityData.continent}`);


// cityFact(cityDatas.Baku);