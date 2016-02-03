

disc_min = document.getElementById("disc_min");
disc_max = document.getElementById("disc_max");


point_min = document.getElementById("point_min");
point_max = document.getElementById("point_max");


interval = document.querySelector(".slider-price");

line_active = document.getElementById("line_active");


price_min = document.getElementById("price_min");
price_max = document.getElementById("price_max");


var min_value = disc_min.offsetLeft;
var max_value = disc_max.offsetLeft;

interval.onmouseover = function(e){
    
   console.log(e.clientX - interval.offsetLeft); 
    
};


disc_min.onmousedown = function(e){
    
    disc_min.ondragstart = function(){
        
        return false; 
        
    }
    
    moveAt(e);
    
    function moveAt(e){
        
       // var i = e.clientX - 233;
        var i = e.clientX - interval.offsetLeft - 9;
        var cost = i - 21;
        
        if(i >= 21 && i < (disc_max.offsetLeft)){

            disc_min.style.left =  i + "px"; // перемещаем диск
            point_min.style.left =  (i + 9) + "px"; // перемещаем и центруем точку           
            price_min.value = cost * 223; // указываем стоимость
            line_active.style.left = i + "px";  // красим выбранную зону
            line_active.style.width = disc_max.offsetLeft - i + "px"; // определяем длину выделеной зоны

        }                
        
    }
    
    document.onmousemove = function(e){
        
        moveAt(e);
        
    }
    
    disc_min.onmouseup = function(){
        
        document.onmousemove = null;
        disc_min.onmouseup = null;
        
    }
    
    
}


disc_max.onmousedown = function(e){
    
    disc_max.ondragstart = function(){
        
        return false; 
        
    }
    
    moveAt(e);
    
    function moveAt(e){
        
        //var i = e.clientX - 233;       
        var i = e.clientX - interval.offsetLeft - 9;
        var cost = i - 21;
        
        if(i <= 190 &&  i > (disc_min.offsetLeft)){

            disc_max.style.left =  i + "px"; // перемещаем диск
            point_max.style.left =  (i + 9) + "px"; // перемещаем и центруем точку   
            
            price_max.value = cost * 223; // указываем стоимость

            line_active.style.left =  disc_min.offsetLeft;  // красим выбранную зону            
            
            line_active.style.width =  i - disc_min.offsetLeft + "px"; // определяем длину выделеной зоны
            
        }                
        
    }
    
    document.onmousemove = function(e){

        moveAt(e);
        
    }
    
    disc_max.onmouseup = function(){
        
        document.onmousemove = null;
        disc_max.onmouseup = null;
        
    }
    
    
    
}


//price_min.value 
//price_max.value

/*


21 = 0
30000 = 159
1 = x


x = 159 / 30000


*/
