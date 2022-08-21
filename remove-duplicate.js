//const removeDuplicates=(num)=> {
  //let x,
    //  len=num.length,
      //out=[],
      //obj={};
  //for (x=0; x<len; x++) {
    //obj[num[x]]=0;
  //}
  //for (x in obj) {
    //out.push(x);
  //}
  //return out;
//}
//let Mynum = [1, 2, 3, 4, 6, 7, 4, 3, 2, 5];
//result = removeDuplicates(Mynum);
//console.log(Mynum);
//console.log(result);


//const number = [1, 2, 3, 4 ,6,7,4,3,2,5];
//const uniq = [...new Set(number)];
//console.log(uniq)


function removeRepeated(arr){
  let uniqueArr =[];
  for(let i of arr){
      if(uniqueArr.indexOf(i)===-1){
          uniqueArr.push(i);
      }
  }
  console.log(uniqueArr);
}
const array=[1,2,3,2,3];
removeRepeated(array);