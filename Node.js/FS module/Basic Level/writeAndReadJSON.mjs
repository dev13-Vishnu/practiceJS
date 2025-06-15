import fs from "fs";

const myData = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };

  const jsonString = JSON.stringify(myData,null, 2) 
  fs.writeFileSync('data.json',jsonString,)

  const jsObject = JSON.parse(fs.readFileSync('data.json','utf-8',(err,data) => {
    if(err) throw err;
    return data;
  }))

  console.log("joson Object:",jsObject);