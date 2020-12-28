function getparagraph1(){
    var inputs=[];
    
    
    for (var i=1; i<=6; i++){
        inputs.push(document.getElementById("input_" + i).value)
        console.log(inputs);
        
    }
    
    
    console.log(inputs);
    document.getElementById("show_para_1").innerHTML=inputs.join(". ");
    }
    
    function get_paragraph_2(){
        var inputs=[];
        
        
        for (var k=1; k<=6; k++){
            inputs.push(document.getElementById("input_" + k).value)
            console.log(inputs);
            
        }
        
        
        console.log(inputs);
        document.getElementById("show_para_2").innerHTML=inputs.join(". ");
        }
        
    