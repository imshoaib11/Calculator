 let heading = document.createElement('h1');
heading.setAttribute('id', 'title');
heading.innerHTML = 'Calculator';
document.body.appendChild(heading);

let desc = document.createElement('p');
desc.setAttribute('id', 'description');
desc.innerHTML = "Let's calculate";
document.body.appendChild(desc);

let calc = document.createElement('div');
calc.setAttribute('class', 'container',);

document.body.appendChild(calc);

let ipwrapper = document.createElement('div');
ipwrapper.setAttribute('class', 'row')

calc.appendChild(ipwrapper);

let ip = document.createElement('input');
ip.setAttribute('type', 'text');
ip.setAttribute('placeholder', '0');
ip.setAttribute('class','ip-class');
ip.setAttribute('id','result');
ipwrapper.appendChild(ip);

let wrapper = document.createElement('div');
wrapper.setAttribute('class', 'row');

calc.appendChild(wrapper);

let button1 = document.createElement('button');
button1.setAttribute('class','btn');
button1.setAttribute('id','clear'); 
button1.innerText = 'C';

wrapper.appendChild(button1);

let button2 = document.createElement('button');
button2.setAttribute('class','btn');
button2.setAttribute('id','backspace');
button2.innerText = '←';

wrapper.appendChild(button2);

let button3 = document.createElement('button');
button3.setAttribute('class','btn');
button3.setAttribute('id','dot');
button3.innerText = '.';

wrapper.appendChild(button3);

let button4 = document.createElement('button');
button4.setAttribute('class','btn');
button4.setAttribute('id','mul');
button4.style.color = 'rgb(45, 162, 230)';
button4.innerText = 'X';

wrapper.appendChild(button4);

let wrapper1 = document.createElement('div');
wrapper1.setAttribute('class', 'row');

let button5 = document.createElement('button');
button5.setAttribute('class','btn');
button5.setAttribute('id','7');
button5.innerText = 7;

wrapper1.appendChild(button5);

let button6 = document.createElement('button');
button6.setAttribute('class','btn');
button6.setAttribute('id','8');
button6.innerText = 8;

wrapper1.appendChild(button6);

let button7 = document.createElement('button');
button7.setAttribute('class','btn');
button7.setAttribute('id','9');
button7.innerText = 9;

wrapper1.appendChild(button7);

let button8 = document.createElement('button');
button8.setAttribute('class','btn');
button8.setAttribute('id','divide');
button8.style.color = 'rgb(45, 162, 230)';
button8.innerText = '/';

wrapper1.appendChild(button8);
calc.appendChild(wrapper1);

let wrapper2 = document.createElement('div');
wrapper2.setAttribute('class', 'row');

let button9 = document.createElement('button');
button9.setAttribute('class','btn');
button9.setAttribute('id','4');
button9.innerText = 4;

wrapper2.appendChild(button9);

let button10 = document.createElement('button');
button10.setAttribute('class','btn');
button10.setAttribute('id','5');
button10.innerText = 5;

wrapper2.appendChild(button10);

let button11 = document.createElement('button');
button11.setAttribute('class','btn');
button11.setAttribute('id','6');
button11.innerText = 6;

wrapper2.appendChild(button11);

let button12 = document.createElement('button');
button12.setAttribute('class','btn');
button12.setAttribute('id','subtract');
button12.style.color = 'rgb(45, 162, 230)';
button12.innerText = '-';

wrapper2.appendChild(button12);

calc.appendChild(wrapper2);

let wrapper3 = document.createElement('div');
wrapper3.setAttribute('class', 'row');

let button13 = document.createElement('button');
button13.setAttribute('class','btn');
button13.setAttribute('id','1');
button13.innerText = 1;

wrapper3.appendChild(button13);

let button14 = document.createElement('button');
button14.setAttribute('class','btn');
button14.setAttribute('id','2');
button14.innerText = 2;

wrapper3.appendChild(button14);

let button15 = document.createElement('button');
button15.setAttribute('class','btn');
button15.setAttribute('id','3');
button15.innerText = 3;

wrapper3.appendChild(button15);

let button16 = document.createElement('button');
button16.setAttribute('class','btn');
button16.setAttribute('id','add');
button16.style.color = 'rgb(45, 162, 230)';
button16.innerText = '+';

wrapper3.appendChild(button16);

calc.appendChild(wrapper3);

let wrapper4 = document.createElement('div');
wrapper4.setAttribute('class', 'row');
wrapper4.style.marginBottom = '20px';

let button17 = document.createElement('button');
button17.setAttribute('class','btn');
button17.setAttribute('id','0');
button17.innerText = 0;

wrapper4.appendChild(button17);

let button18 = document.createElement('button');
button18.setAttribute('class','btn');
button18.setAttribute('id','00');
button18.innerText = '00';

wrapper4.appendChild(button18);

let button19 = document.createElement('button');
button19.setAttribute('id','equal');
button19.setAttribute('class','eq-color');

button19.innerText = '=';

wrapper4.appendChild(button19);

calc.appendChild(wrapper4);


let num = '';

let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((n)=>{
    n.addEventListener('click',(e)=>{
        buttonText = e.target.innerHTML;
        if (buttonText === 'C') {
            buttonText = '';
            num = buttonText;
        }if (buttonText === 'X') {
            buttonText = '*';  
            num += buttonText;
            ip.value = num;
        } else if (buttonText === '←') {
            num = num.toString();
            num = num.slice(0, -1);
            ip.value = num;
        } else if (buttonText === '=') {
            try{
                num = eval(num);
            ip.value = num;
            }
            catch{
                ip.value = "error";
            }
        } else {
            num += buttonText;
            ip.value = num;
        }
        
        
    })
})

