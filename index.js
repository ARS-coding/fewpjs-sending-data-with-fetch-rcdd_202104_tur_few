// Add your code here

function submitData(name, email) {
    let url = "http://localhost:3000/profile";
    let data = {
        name: name,
        email: email
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data) 
    };
    return fetch(url, configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);  
    })
    .catch()
}

submitData("li", "iza");