function calculate()
{
    var weight=(document.getElementById("weight").value);
    var height=(document.getElementById("height").value);
    var bmi=(weight)/((height*height));
        
document.getElementById("bmi-out").innerHTML=bmi;
     
     if(bmi<18)
     {
        document.getElementById("bmi-status").innerHTML="underweight";
     }
   else if(bmi<25)
   {
    document.getElementById("bmi-status").innerHTML="Normal weight";
   }
   else if(bmi<30)
    {
     document.getElementById("bmi-status").innerHTML="over weight";
    }
    else 
        {
         document.getElementById("bmi-status").innerHTML="obesity";
        }
   
}
