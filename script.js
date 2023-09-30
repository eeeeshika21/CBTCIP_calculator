var screen=document.querySelector('#screen');
    var btn=document.querySelectorAll('.button');

    for(item of btn)
    {
        item.addEventListener('click',(e)=>{
            btntext=e.target.innerText;

            if(btntext =='x')
            {
                btntext= '*';
            }

            if(btntext=='÷')
            {
                btntext='/';
            }
            if(btntext == '='){
                screen.value=eval(screen.value);
            }
            else{
                screen.value+=btntext;
            }
        });
    }

    function percent(){
        screen.value=((parseFloat(screen.value)/100).toString());
    }

    function mod(){
        screen.value = (-parseFloat(screen.value)).toString();
    }

    function sin()
    {
        screen.value=Math.sin(screen.value);
    }

    function cos()
    {
        screen.value=Math.cos(screen.value);
    }

    function tan()
    {
        screen.value=Math.tan(screen.value);
    }

    function pow()
    {
        screen.value=Math.pow(screen.value,2);
    }

    function sqrt()
    {
        screen.value=Math.sqrt(screen.value,2);
    }

    function log()
    {
        let x = screen.value;
        screen.value = Math.log(screen.value) / Math.log(10);
    }

    function round() {
        let number = parseFloat(screen.value);
        let roundedNumber = number.toFixed(3);
        screen.value = roundedNumber;
    }

    function ln(){
        screen.value=Math.log(screen.value);
    }

    function pi()
    {
        screen.value+= 3.14;
    }

    function e()
    {
        screen.value+=2.72;
    }

    function fact()
    {
        var i, num, f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }

        i=i-1;

        screen.value=f;
    }
    function exp(){
        screen.value=Math.pow(screen.value,screen.value);
    }

    function ex()
    {
        screen.value=Math.pow(2.71828182846,screen.value);
    }

    function x10(){
        screen.value=Math.pow(10,screen.value);
    }

    function backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }

function toggleSlide() {
    const basicSlide = document.querySelector('.calculator-slide.basic');
    const scientificSlide = document.querySelector('.calculator-slide.scientific');
    basicSlide.classList.toggle('active');
    scientificSlide.classList.toggle('active');
}

document.getElementById('calc-mode').addEventListener('change', toggleSlide);
