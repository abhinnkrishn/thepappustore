import "../components/Navbar"

export function searchClick() {
    console.log("click");
    var searchQuery = document.querySelector("#search-input").value;
    console.log(searchQuery);

    if(searchQuery === "")
    console.log("null");
    else extarctJSON()

     function extarctJSON() {
        fetch("./json/products.json")
        .then(res => res.json())
        .then(data => displayValue(data))  
    }
    function displayValue(data) {
        console.log(data);
        
        var len = data.length;

        for(var i=0;i<len;i++) {
            var len1 = data[i].key.length;
            for(var j=0;j<len1;j++) {
                if(data[i].key[j] == searchQuery) {
                    console.log("yess");
                    break;
                } 
            }
        }

      
        }
    }
 