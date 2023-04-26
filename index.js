



var  RandomNumber1 =   Math.floor(Math.random() * 6) + 1;






var randomDiceImage = "dice" +  RandomNumber1  + ".png";



var randomeImageSource =  "images/" + randomDiceImage;


var img1 =    document.querySelectorAll("img")[0];

img1.setAttribute("src" , randomeImageSource  );
















var  RandomNumber2 =   Math.floor(Math.random() * 6) + 1;






var randomDiceImage = "dice" +  RandomNumber2  + ".png";



var randomeImageSource =  "images/" + randomDiceImage;


var img1 =    document.querySelectorAll("img")[1];

img1.setAttribute("src" , randomeImageSource  );







if ( RandomNumber1 > RandomNumber2 ){
document.querySelector('h1').innerHTML = 'player one wins';
}

 
 

else if( RandomNumber2 > RandomNumber1 ){
   
    document.querySelector('h1').innerHTML = 'player two wins';
}



else if( RandomNumber2 == RandomNumber1 ){
   
    document.querySelector('h1').innerHTML = 'draw';
}


























































// document.querySelector('b item').style.color = red;
// 

// document.getElementById('b').style.color = 'blue';




// 
// document.getElementById('buttou').classList.add('huge').style.backgroundColor = 'yellow'  ;
// 
// 
// document.querySelector('a').setAttribute('href' , 'https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12383884#content'); 

































































































































































































































































// 
// LEASOONS
// 
// 
// prompt('youre name ');
// 
// prompt('ther name ');
// 
// 
// 
// var lovescore = Math.random() * 100 ;
// 
// lovescore = Math.floor(lovescore) +1;
// 
// 
// if( lovescore > 70   ){
    // alert('youre love score is' + lovescore + '%' + 'youre love score is the best');
// }
// 
// 
// 
// if( lovescore >= 30   ){
    // alert('youre love score is' + lovescore + '%' + 'youre love score is the mediom');
// }
// 
// 
// 
// else{
    //  alert('youre love score is' + lovescore + '%' + 'youre love score is shit');
// }
// 
// 
//  var  gustlist = ['banyamin', 'milad' , 'yaser ', 'eqbal', 'or' ] ;
// 
//  var gustname = prompt ('what is youre name');
// 
// 
// 
// 
// 
// if( gustlist.includes(gustname)){
// 
// alert('you are allow');
// 

// 
// 
// 
// }
// 
// 
// else{
    // 
    // alert('youre are gay')
// }
// 







// 
// 
// 
// var output =[];
// var count = 1;
// 
// function fizzbuzz (){
// 
// 
// output.push(count);
// 
// 
    // if( count % 3 === 0){
// 
        // output.push('fizz');
// 
//   
// 
        // 
    // }
        // else if ( count % 5 === 0 ){
// output.push('buzz');
            // 
        // }
        // else{
    //  output.push(count);
    // }
// 
//  count++;
//  console.log(output);
// 
// }
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 







 
// for( var b = 1;  b <= 10 ; i-- ){
// console.log(b);
// }
 
 















// var num = 1;
// 
// do{
// 
    // consolr.log(num);
    // num++;
// 
// }
// 
// while( num < 5);
// 




//  
// var d = 1
// 
// while(d <=5 ){
    // console.log(d);
// 
// }
// 



// 

// for( var i = 1 ; i <= 5 ; i++){
// 
    // console.log(i);
// 
// 
// 
// }
// 

// 
// var day  = 3;
// 
// switch( day){
// 
    // case 1:
        // console.log('shanbe');
        // break;
// 
        // case 2:
    //   console.log('1 shanbe');
    //   break;
// 
// 
    //   case 3:
    //   console.log(' 2 shanbe');
    //   break;
// 
// 
    //   case 4:
    //   console.log(' 3 shanbe');
    //   break;
// 
// 
    //   case 5:
    //   console.log(' 4 shanbe');
    //   break;
// 
    //   case 6:
    //   console.log(' 5 shanbe');
    //   break;
// 
//    
// 
// 
// }



// var b = 1;
// 
// do{
    // console.log(b <= 5);
// i++;
// }
// 
// while( b <= 5);
// 
// 



// 
// 
// 

// 
// 
// var sum = 0;
// for( var num = 10 ; num <=90; num++ ){
// 
    // sum += num;
// 
// 
// }
// console.log(sum);
// 
// 
// 
// 




// 
// var b = 0 , num = 5;
// 
// for( var i = 1; i <= 5 ; i++ ){
// 
    // if( num %i==0)
    // b++;
//    
// }
// 

// 
// var d = 10 
// 
// for( var i = 1 ;  i<=d; i++){
// 
    // console.log(i);
// break;
// 
// }
// 

// 
// var num = 20;
// while( num >= 1){
// 
    // console.log(num);
    // num--;
// 
// }
// 



// 
// var num =20;
// 
// do{
    // console.log(num)
    // num--;
// }
// while( num >= 1)
// 






// 
// 
// for( var num = 20 ; num >= 1 ; num--){
// 
    // console.log(num);
// 
// }
// 














//while






//boolean




// 
// NaN
// undefined
// fals
// ''
// 0; -0;
// null
// 



// 
// Number();
// String();
// Boolean();
// 


//string --> Number
// 
// console.log(Number('3.14'));
// 
// 
// console.log(Number(''));
// 
// 
// console.log(Number(''));
// 
// 
// console.log(Number(''));
// 
// 
// console.log(Number('123milad'));
// 
// 
// console.log(Number('123 milad'));
// 




//number --> string
// 
// console.log(string(100));
// 
// console.log(string(3.14));
// 
// console.log(string(100 + 23));
// 
// 






//boolean --> number
// 
// conole.log(Number(true))
// 
// conole.log(Number(false))
// 




//string --> boolean

// 
// console.log(Boolean('0'));
// 
// console.log(Boolean('0'));
// 
// console.log(Boolean('0'));
// 
