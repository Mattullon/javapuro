 function e() 

    const styles = e.currentTarget.classList;

    // aca modificando al contador
    if (styles.contains("decrease")) count--;

    if (styles.contains("reset")) count = 0;

    if (styles.contains("increase")) count++;

    //Asignando los colores
    if (count > 0) value.style.color = "green";

    if (count < 0) value.style.color = "red";
    
    if (count === 0) value.style.color = "black";

    //Asignando el valor
    value.textContent = count;

export default e;