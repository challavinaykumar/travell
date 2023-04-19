// var a = 10; //number data type

// document.write(a+' is a : '+ ' '+typeof(a)+'datatype'+'<br>')

// var b = 'fullstack' //string data type
// document.write('type of b : '+ b+' '+typeof(b))

// var c= true // boolean

// document.write(c+' is c : '+ ' '+typeof(c)+'datatype'+'<br>')

// var d = null ;

// document.write(typeof(d))


// var array = [1,'full',true, {name : 'vinay',course : 'fullstack'}, {name : 'uday',course : 'fullstack'}]

// console.log(array)``



// var object = {name : 'vinay',course : 'fullstack'}

// console.log(object)



//OPerators
//Arthematic operators



//add

// document.write(a+b + '<br>') //30
// //sub

// document.write(a-b  + '<br>')//-10

// // multiply
// document.write(a*b  + '<br>')//200

//division

// document.write(a/b  + '<br>')//0.5

//modulus

// document.write(b%a  + '<br>')//0

//negative

// document.write(-(a) + '<br>')

///comparision operators
// var a = 10;
// var b = 10;
// var c =10
// var d = 9


// document.write(( c==d )+ '<br></br>') //true
// document.write(( c!=d )+ '<br></br>')//false
// document.write(( c>d )+ '<br></br>') //false
// document.write(( c>=d )+ '<br></br>')//true
// document.write(( c<d )+ '<br></br>') //false
// document.write(a<=d + '<br></br>') // 10<=9 //false
// document.write(( c===b )+ '<br></br>') //false

//logical operators

// document.write(((c>d)&&(d<c))||((a!=b)&&(a>=b)))//true 
// document.write((c<d)||(d>c))//true 
// document.write(!(c!=d))//false

//assiognment operators

// var x=2;
// var y=10;
// document.write(x)

// document.write(x=y)//20
// document.write(x + '<br>')//30



// document.write((x+=y )+ '<br>')//30+30//60

// document.write((x-=y) + '<br>')//60-30 //30

// document.write((x*=y)+ '<br>')//30*-30 //-900 //x=x*y // 30*-30 // 900
// document.write((x/=y)+ '<br>')//30*-30 //-900 //x=x/y // 30*-30

// document.write((y%=x)+ '<br>')//1

// document.write(x**=y)//10**2 //2*2*2*2*2*2*2*2*2*2 = 1024





// if(x>=35 )
// {
//     document.write('student passed')
// }
// else{
//     document.write('student is failed')

// }
// var  x= patrse(prompt('value'))


// if(x>=90){
//     document.write(x+'A grade')
// }
// else if (x>=80){
//     document.write(x+'B grade')
// }
// else if(x>=70){
//     document.write(x+'C grade')

// }
// else if(x>=60){
//     document.write(x+'D grade')
4
// }else{
//     document.write(x+'fail')


// var x = prompt('enter day')


// switch(x){
//     case 'monday':
//         document.write('class starts at 8:30am')
//         break;
//     case 'tuesday':
//     case 'thursday':
//     case 'friday':
//     case 'saturday':   
//         document.write('class starts at 8:45am')
//         break;

//      case 'wednesday':
//         document.write('class starts at 8:45am')
//         break;
//     default:
//         document.write('no class')
       
// }




// var a =parseFloat( prompt('enter A value'))
// var b =parseFloat( prompt('enter B value'))

// var operators = prompt('enter +/-/*///%')


// switch(operators){ +
//     case '+':
//         document.write(a+b )
//         break;
//      case '-':
//         document.write(a-b )
//         break;  
//         case '*':
//             document.write(a*b )
    
//         break;  
//         case '/':
//             document.write(a/b )
//             break;  
//             case '%':
//                 document.write(a%b )
//                 break;  
//              default:
//                 document.write('enter valid input')   
//         }



// var grade =parseFloat( prompt('enter marks'))


// switch(true){
  
//     case grade>=90:
//         document.write('a grade')
//         break;
//         case grade>=80:
//             document.write('b grade')
//             break;
    
//             case grade>=70:
//                 document.write('c grade')
//                 break;
//                 case grade>=60:
//                     document.write('d grade')
//                     break;
//                     case grade>=50:
//                         document.write('e grade')
//                         break;
//                     default:
//                         document.write('fail')

    
// }
    

//for loop


// for(var i = 0;i<=100;i++){
//     document.write(i + ' ')
// }


var x = 0;

// for( i=x;i<=100000;i++){
//     document.write(i + ' ')
// }
do{
    document.write(x + ' ')
    x++;
}
while(x<=1000)
  













