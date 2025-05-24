// object



const user = [
  {
    firstName: "Zentih",
    gender: "male",
  },
  {
    firstName: "Avro",
    gender: "male",
    metadata: {
		age : 21,
		ciry : "XYZ"
	},
  },
  {
    firstName: "Hasan",
    gender: "male",
  },
  {
    firstName: "Mikasa",
    gender: "female",
  },
];


for(let i=0; i<user.length;i++){
	if(user[i]["gender"] == "male"){
		console.log(user[i]["firstName"])
	}
}

