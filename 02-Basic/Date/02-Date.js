// creating a function that can determine how much time it takes to execute a particular function  

function calculateSum(){
	let a = 0;
	for(let i=0; i<1000000; i++){
		a = a + 1

	}
	return a;
}

const beforeExcu = new Date();
const beforeTimeInMs = beforeExcu.getTime();
calculateSum();

const afterExcu = new Date();
const afterTimeInMs = afterExcu.getTime();

const funcRunTime = afterTimeInMs - beforeTimeInMs;
console.log(funcRunTime)

