const arraypair =(array,sum)=>{
return new Promise((resolve,reject)=>{

  for (i = 0;i < array.length;i++) {
      let first = array[i];
      for (j = i + 1;j < array.length;j++) {
          let second = array[j];

          if ((first + second) == sum) {
      resolve('First: ' + first + ' Second: ' + second + ' SUM ' + sum);
      console.log('First: ' + first + ' Second: ' + second);
          }else{
            reject('There is no number to sumup')
          }
      }
  }
}).then((message)=>{
    console.log(' '+message)
}).catch((message)=>{
    console.log(' '+message)
})
}
let a = [1,2,3,6,30,25,21];
arraypair(a,27);