const cal = document.querySelector('.cal');
const buttons = cal.querySelector('.btngroup');
const an_op = cal.querySelector('.op');
const an_num = cal.querySelector('.answer');

let first_num =null;
let second_num=null;
let operator;


buttons.addEventListener('click',function(event) {
    const target = event.target;

    if (target.className === "btn_op") 
            {
                an_op.innerText = target.innerText;
                first_num=an_num.innerText;
                operator=target.innerText;
            }
    
    else if (target.className === "num")
        {
            if(an_num.innerText == 0)
                an_num.innerText=target.innerText;
            else 
                an_num.innerText += target.innerText;
                answer = an_num.innerText;
                    if (first_num != null && second_num == null )
                    {
                        an_num.innerText=''
                        an_num.innerText=target.innerText;
                        second_num=an_num.innerText;
                    }
        }
    else if (target.className === "btn_eq")
        {
            second_num = an_num.innerText;
            an_op.innerText = target.innerText;
            calculate(first_num,operator,second_num);
            first_num=null;
            second_num=null;
        }
    else if (target.className==="clear")
    {
        first_num=null;
        second_num=null;
        an_num.innerText = '0';
        an_op.innerText= '+';
    }

});

function calculate (val1,op,val2)
{
    if ( op === '+')
    {
        an_num.innerText=String(Number(val1) + Number(val2));
    }
    else if (op === '-')
    {
        an_num.innerText=String(Number(val1) - Number(val2));
    }
    else if (op === '*')
    {
        an_num.innerText=String(Number(val1) * Number(val2));
    }
    else if (op === '/')
    {
        an_num.innerText=String(Number(val1) / Number(val2));
    }  

}