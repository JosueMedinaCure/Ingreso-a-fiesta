let free = false;

alert("La hora de entrada de la fiesta es de 10 PM hasta las 7 AM, y la primera persona en pasar despues de 2 AM entra gratis")
    const validarCliente = ()=>{
    
        let edad = prompt(" cual es tu edad");
        let time = prompt("ingrese hora de llegada");
         if(edad >= 18 ){
            
            if (time >= 2 &&time < 7 && free == false){
                alert("podes pasar gratis porque eres la primera persona despues de las 2 AM");
                free = true;
            }else {
                alert(`son las ${time}:00HS y puedes pasar, pero tienes que pagar porque no eres la primera persona en llegar despues de las 2 AM `);
                }

            }else{
                alert("No pudedes pasar, eres menor de edad");
            }


    }


validarCliente();
validarCliente();
validarCliente();
validarCliente();