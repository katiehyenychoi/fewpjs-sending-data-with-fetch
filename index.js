// Add your code here

function submitData(userName, userEmail) {
    let userInfo = {
        name: userName,
        email: userEmail
    };

    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);

            let idToBeAppended = object.id
            console.log(idToBeAppended)

            let idLocation = document.querySelector("body");
            console.log(idLocation);
            idLocation.append(idToBeAppended);
            document.body.innerHTML = idToBeAppended;
        })
        .catch(function (error) {
            alert("Errorrrrr");
            console.log(error.message);
            let errorLocation = document.querySelector("body");
            errorLocation.append(error.message);

        });



}