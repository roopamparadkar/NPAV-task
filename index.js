var fs = require('fs');

let employee = [];

fs.readFile('input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

const resultArr = data.split('\n');
resultArr.map(row => {
  row = row.split(',');
})
resultArr.map(row => {
  employee.push({
    id:+row.split(',')[0],
    name:row.split(',')[1],
    department:row.split(',')[2],
    salary:+row.split(',')[3],
  })
})

function compare( a, b ) {
  if ( a.salary < b.salary ){
    return 1;
  }
  if ( a.salary > b.salary ){
    return -1;
  }
  return 0;
}

outputData =  employee.sort(compare).splice(0,2);

outputString = [] 
outputData.map(data => {
outputString.push(`${data.department}: ${data.id}`)
})

fs.writeFile('output.txt', outputString.toString(), function (err) {
  if (err) return console.log(err);
});
})