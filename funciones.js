



export function eve(e,count){
    const styles = e.currentTarget.classList;
       
    
    if (styles.contains("decrease")) count--;
    


    if (styles.contains("reset")) count = 0;

    if (styles.contains("increase")) count++;


    if (count > 0) value.style.color = "green";

    if (count < 0) value.style.color = "red";

    if (count === 0) value.style.color = "black";


    return count ; 
//console.log("funic")
}

export function tecla(event) {
    const tecla = event.key;
    const styles = event.currentTarget.classList;
  
    if (tecla == "-") count--;
  
    if (tecla == "0") count = 0;
  
    if (tecla == "+") count++;
  
    if (count > 0) value.style.color = "green";
  
    if (count < 0) value.style.color = "red";
  
    if (count === 0) value.style.color = "black";
  
    value.textContent = count;
  }

