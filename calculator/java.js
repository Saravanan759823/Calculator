var result=document.getElementById("display")
    function number(num)
    {
        if(result.value==0)
        {
            result.value='';
        
        }
        result.value+=num;
    }
    function clearthenumber()
    {
        result.value="0";
    }
    function deletethe()
    {
        result.value=result.value.toString().slice(0,-1);
    }
    function calculate()
    {
        result.value=eval(result.value)

    }
    
    document.onkeyup = event =>{
        
        if(event.key=="0" || event.key=="Num0")
        {
             result.value+='0'
        }
        else if(event.key=="1" || event.key=="Num1")
        {
           
            if(result.value==0)
            {
            result.value='';
            result.value=1
            }  
            else
            result.value+='1'
        
        }
        else if(event.key=="2" || event.key=="Num2")
        {
            if(result.value==0)
            {
            result.value='';
            result.value=2
            }  
            else
            result.value+='2'
        } else if(event.key=="3" || event.key=="Num3")
        {
            if(result.value==0)
            {
            result.value='';
            result.value=3
            }  
            else

            result.value+='3'
            
        } else if(event.key=="4" || event.key=="Num4")
        {
            if(result.value==0)
            {
            result.value='';
            result.value=4
            }  
            else
            result.value+='4'
        } else if(event.key=="5" || event.key=="Num5")
        {
            if(result.value==0)
            {
            result.value='';
            result.value=5
            }  
            else
            result.value+='5'
        } else if(event.key=="6" || event.key=="Num6")
        {
            if(result.value==0)
            {
            result.value='';
            result.value=6
            }  
            else
            result.value+='6'
        } else if(event.key=="7" || event.key=="Num7")
        {
            if(result.value==0)
            {
            result.value='';
            result.value=7
            }  
            else
            result.value+='7'
        } else if(event.key=="8" || event.key=="Num8")
        {
            if(result.value==0)
            {
            result.value='';
            result.value=8
            }  
            else
            result.value+='8'
        } else if(event.key=="9" || event.key=="Num9")
        {
            if(result.value==0)
            {
            result.value='';
            result.value=9
            }  
            else
            result.value+='9'
        }
        else if(event.key=="+" || event.key=="Num+")
        {
            result.value+='+'
        } else if(event.key=="-" || event.key=="Num-")
        {
            result.value+='-'
        } else if(event.key=="*" || event.key=="Num*")
        {
            result.value+='*'
        } else if(event.key=="/" || event.key=="Num/")
        {
            result.value+='/'
        }
        else if(event.key=="." || event.key=="Num.")
        {
            result.value+='.'
        }
        else if(event.key=="Enter" || event.key=="Numenter")
        {
            calculate()
        }
        else if(event.key=="Backspace" || event.key=="Numbackspace")
        {
            deletethe()
        }
        else if(event.key=="Delete" || event.key=="Numdelete")
        {
            clearthenumber()
        }
        

    }
    var switchthe=document.getElementById("the")
   switchthe.onclick=function()
   {
    document.body.classList.toggle("darktheme");
   }
 
