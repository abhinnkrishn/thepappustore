import "../components/Navbar"

var searchIcon = document.querySelector("#search-btn");



export function searchClick() {
    console.log("click");
    // if(!document.querySelector("#search-input").value == null)
    var searchQuery = document.querySelector("#search-input").value;
    console.log(searchQuery);
    if(searchQuery === "")
    console.log("null");
    else extarctJSON()

     function extarctJSON() {
        fetch("./json/products.json")
        .then(res => res.json())
        .then(data => {
            var len = data.length;

            console.log(data);
            console.log(len);
            
            // for(var i = 0;i < len; i++) {
            //     var flag = 0;
            //     var value = data[i].key;
            //     var valueLen = value.length;
            // for(var i =0;i < valueLen; i++) {
            //     if(value[i] === searchQuery) {
            //         console.log("yes");
            //         flag = 1;
            //         break;
            //     }
            //     else {
            //         console.log("no");
            //         flag = 1;
            //         break;
            //     }
            // }
           
            // }
        })  
    }
 }