let ramNum = parseInt(Math.random()*801)+100
let hundred = parseInt(ramNum/100)
let ten = parseInt((ramNum%100)/10)
let one = parseInt((ramNum%10))
console.log(ramNum);

if(hundred%2==0&&ten%2==0&&one%2==0){
    console.log("1등");
} else if (hundred%2==0&&ten%2==0||ten%2==0&&one%2==0){
    console.log("2등");
}else console.log("꽝");