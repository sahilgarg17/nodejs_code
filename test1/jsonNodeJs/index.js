const data = {
    name : "Sahil",
    course: "btech",
    branch: "IT",
};

// const jsonData = JSON.stringify(data);
// //jsonData - {"name":"Sahil","course":"btech","branch":"IT"}
// console.log(jsonData);

// const objData = JSON.parse(jsonData);
// //objData - { name: 'Sahil', course: 'btech', branch: 'IT' }
// console.log(objData.course);
const fs = require("fs");
const jsonData = JSON.stringify(data);
fs.writeFile('json1.json', jsonData, (err) => {
    console.log("done");
})

fs.readFile("json1.json", "utf-8", (err, data) => {
    const orgData = JSON.parse(data);
    console.log(orgData);
})
