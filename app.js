let row=prompt("Nro de filas (entre 1 a 30)")
let col=prompt("Nro de columnas (entre 1 a 30)")

if(row==null||col==null){
    console.warn("operacion cancelada")
}else{
    row=parseInt(row)
    col=parseInt(col)
    if(isNaN(row)||row>30||row<1||isNaN(col)||col>30||col<1){
        alert("error: has introducido un valor incorrecto")
        console.error("has introducido un valor incorrecto")
    }else{
        let nums=row*col
        document.write(`<table border>`)
        for(let r=1;r<=row;r++){
            document.write("<tr>")
            for(let c=1;c<=col;c++){
                document.write("<td>")
                document.write(nums)
                nums--
                document.write("</td>")
            }
            document.write("</tr>")
        }
        document.write(`</table>`)
    }
}