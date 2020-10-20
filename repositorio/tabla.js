let tabla= document.querySelector("#tablaTareas");
let compras= [];
let btn= document.querySelector("#btnAdd")
let input= document.querySelector("#inputAdd")
let input2= document.querySelector("#inputAdd2")
let input3= document.querySelector("#inputAdd3")

function addHeaders()
    {
        let fila= document.createElement("tr");
        let enc1= document.createElement("th");
        enc1.innerHTML="Materia";
        let enc2= document.createElement("th");
        enc2.innerHTML="Descripción";
        let enc3= document.createElement("th");
        enc3.innerHTML="Fecha";
        fila.appendChild(enc1);
        fila.appendChild(enc2);
        fila.appendChild(enc3);
        tabla.appendChild(fila);
    }
function hacerTablas(){
tabla.innerHTML="";
addHeaders();
 for(let i = 0; i < compras.length; i= i + 3)
{
    let h= i + 1;
    let t= i + 2;
    let fila= document.createElement("tr")
    let tdMateria= document.createElement("td")
    tdMateria.innerHTML= compras[i];
    let tdDescripcion= document.createElement("td")
    tdDescripcion.innerHTML= compras[h];
    let tdFecha= document.createElement("td")
    tdFecha.innerHTML= compras[t];
    fila.appendChild(tdMateria)
    fila.appendChild(tdDescripcion)
    fila.appendChild(tdFecha)
    tabla.appendChild(fila);
}
}
function addItem()
{
    let item = input.value;
    compras.push(item);
    let item2 = input2.value;
    compras.push(item2);
    let item3 = input3.value;
    compras.push(item3);
    hacerTablas();
    input.value="";
    input2.value="";
    input3.value="";
}
btn.onclick = addItem;
