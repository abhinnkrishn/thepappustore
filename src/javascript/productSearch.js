// let matchedData = [];
// let searchQuery = "";

// function searchClick() {
//   console.log("click");
//   searchQuery = document.querySelector("#search-input").value;
//   console.log(searchQuery);

//   if (searchQuery === "") console.log("null");
//   else extarctJSON();

//   function extarctJSON() {
//     fetch("./json/products.json")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);

//         matchedData = [];
//         var len = data.length;

//         for (var i = 0; i < len; i++) {
//           var keyLen = data[i].key.length;
//           for (var j = 0; j < keyLen; j++) {
//             if (data[i].key[j] === searchQuery) {
//               console.log("yess");
//               matchedData.push(data[i]);
//               break;
//             }
//           }
//         }
//         console.log("MATCHED DATA", matchedData);
//       });
//   }
// }
// export { searchQuery, searchClick, matchedData };