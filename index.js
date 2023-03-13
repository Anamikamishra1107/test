// Get all the red cars in the given array.
// Get the unique car and get their index.
let cars = [
  {
    "color": "purple",
    "type": "Volkswagen",
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "capacity": 5
  },
  {
    "color": "white",
    "type": "minivan",
    "capacity": 8
  },
   {
  "color": "red",
  "type": "cabrio",
  "capacity": 2
 },
 {
  "color": "blue",
  "type": "cabrio",
  "capacity": 4
},
 {
  "color": "green",
  "type": "minivan",
  "capacity": 6
},
]

//get all red car in array
let redcar = []
cars.forEach((value,index)=>{
    if (value.color === 'red'){
        redcar.push(value.type)
    }


});
console.log("redcar",redcar);
//get the uniqe car and index
// const unique =[...new Set(cars.map((item)=>item.type))];
// console.log(unique);

//get the uniqe car and inde