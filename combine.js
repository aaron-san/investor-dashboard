// const map = new Map();
// console.log(map.set("dog", "chihuahua"));
// console.log(map.set("cat", "Siamese"));
// console.log(map.has("dog"));
// console.log(map.get("dog"));
// console.log(Array.from(map.keys()));
// console.log(Array.from(map.values()));
// console.log(Object.fromEntries(map));

// const { sp500, unemploymentRate } = require("./frontend/src/mockData");

// const mergeByDate = (a1, a2) => {
//   const map = new Map();

//   a1.forEach(({ date, value }) => {
//     if (!map.has(date)) map.set(date, { date });
//     map.get(date).dat1 = parseFloat(value);
//   });

//   a2.forEach(({ date, value }) => {
//     if (!map.has(date)) map.set(date, { date });
//     map.get(date).dat2 = parseFloat(value);
//   });

//   // Fill missing values with 0
//   return Array.from(map.values()).map((row) => ({
//     date: row.date,
//     dat1: row.dat1 ?? 0,
//     dat2: row.dat2 ?? 0,
//   }));
// };

// const merged = mergeByDate(sp500, unemploymentRate);

// console.log(merged);

// SLower and more verbose
// const merged = [];

// dat1.forEach(entry => {
//   const match = merged.find(m => m.date === entry.date);
//   if (match) {
//     match.dat1 = parseFloat(entry.value);
//   } else {
//     merged.push({ date: entry.date, dat1: parseFloat(entry.value), dat2: 0 });
//   }
// });

// dat2.forEach(entry => {
//     const match = merged.find(m => m.date === entry.date);
//     if (match) {
//       match.dat2 = parseFloat(entry.value);
//     } else {
//       merged.push({ date: entry.date, dat2: parseFloat(entry.value), dat1: 0 });
//     }
//   });

// Robust array version
// -------------------------------
// const datasets = [
//     [
//       { date: "2019-02-01", value: "20" },
//       { date: "2019-02-02", value: "15" }
//     ],
//     [
//       { date: "2019-02-01", value: "50" },
//       { date: "2019-02-03", value: "35" }
//     ],
//     [
//       { date: "2019-02-02", value: "5" },
//       { date: "2019-02-04", value: "10" }
//     ]
//   ];

//   const mergeDatasetsByDate = (dataArrays) => {
//     const map = new Map();

//     dataArrays.forEach((dataset, index) => {
//       const key = `dat${index + 1}`;
//       dataset.forEach(({ date, value }) => {
//         if (!map.has(date)) map.set(date, { date });
//         map.get(date)[key] = parseFloat(value);
//       });
//     });

//     // Fill missing fields with 0
//     return Array.from(map.values()).map(entry => {
//       for (let i = 0; i < dataArrays.length; i++) {
//         const key = `dat${i + 1}`;
//         if (entry[key] === undefined) {
//           entry[key] = 0;
//         }
//       }
//       return entry;
//     });
//   };

//   const merged = mergeDatasetsByDate(datasets);

//   console.log(merged);
