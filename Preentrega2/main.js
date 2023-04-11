// ----------- PREENTREGA 2 ----------

// ACLARACIONES
// En la preentrega n°2 elabore una funcion constructora para automatizar la carga de los clientes. Luego de ser cargados con almacenados en el array clientes.

const clientes=[];

function Cliente(nombre, nacimiento, sexo, telefono, empleados, usuario, clave){
    this.id = (clientes.length + 1);
    this.nombre = nombre;
    this.nacimiento = nacimiento;
    this.sexo = sexo;
    this.telefono = telefono;
    this.empleados = empleados;
    this.usuarioGuardado= usuario;
    this.claveGuardada= clave;
}
console.log("Mi preentrega n°2"); //esto lo hice para que cargue antes el titulo del HTML y no salte directo el prompt

const cliente1= new Cliente(
    "Leonardo Guillermo Mattioli", 
    "27/06/1976", 
    "M",
    "343-5785476",
    {empleado1: "27456789547", empleado2: "20235643476"},
    "LeoMattioli",
    "Eleon123",
    )
clientes.push(cliente1);

let ingreso= false;

for (let i = 0; i < 3; i++) {
    let usuarioIngresado = prompt("USUARIO: ");
    let claveIngresada = prompt("CLAVE: ");
    if(usuarioIngresado === cliente1.usuarioGuardado && claveIngresada === cliente1.claveGuardada){
        alert("Hola " + cliente1.nombre + " ya puedes operar en nuestra banca digital" )  
        ingreso = true;  
        break;
    }else{
        alert("Lo siento, ha ocurrido un ERROR")
    }        
}

if(ingreso){
    let opcion= prompt("Selecciona la operacion que deseas realizar: \n1. Ingresar a la banca personal \n2. Pago a proveedores \n3. Pago de Haberes \n4. Otras consultas \n5. Cerrar sesión");

    while (opcion !="5") {
        switch (opcion) {
            case "1":
                alert("Lo siento, el simulacro es para el pago de haberes ")
                break;
            case "2":
                alert("Lo siento, el simulacro es para el pago de haberes ")
                break;
            case "3":
                for (let i = 1; i < 3; i++) {
                    let empleadoIngresado1 = prompt("Ingresa el n° de CUIL del empleado " + i);
                    
                    if(empleadoIngresado1 == cliente1.empleados.empleado1 || empleadoIngresado1 == cliente1.empleados.empleado2){
                        let periodo=prompt("Ingresa el periodo de pago");
                        let sueldoNeto= prompt("Introduce el sueldo neto");
                        alert("Se depositó $" + sueldoNeto + " en concepto de haberes por el periodo " + periodo +  "\nEmpleado n° de CUIL: " + empleadoIngresado1);
                    }else{
                    alert("El CUIL que ingresaste no se corresponde con ningun empleado declarado");
                    }
                }
                break;
            case "4":
                alert("Lo siento, el simulacro es para el pago de haberes ")
                break;
            default:
                alert("Opcion NO VALIDA")
                break;
        }
    //condicion de salida
    opcion= prompt("¡¡Gracias por operar con nosotros!! \n¿Deseas realizar otra operacion? \n1. Ingresar a la banca personal \n2. Pago a proveedores \n3. Pago de Haberes \n4. Otras consultas \n5. Cerrar sesión");
    }
}else{
    alert("Lo siento hemos bloqueado tu cuenta. Por favor comunicate con tu agente de banco mas cercano o al 0800-2423-333")
}



clientes.push(new Cliente("Julio Cesar", "17/04/1997", "M", "343-5678654", 2, "JulioCesar01", "Juli123"));

clientes.push(new Cliente("Marina Sosa", "04/08/1954", "F", "343-5676554", 0, "MariSosa", "Marina132"));

console.log("Clientes almacenados dentro del array");
console.table(clientes);
console.log(clientes.length); //para saber el numero de cliente a declarar ahora

alert("BIENVENIDO AL REGISTRO DE UN NUEVO USUARIO")
const cliente4= new Cliente(prompt("NOMBRE Y APELLIDO: "),prompt("FECHA DE NACIMIENTO: "),prompt("SEXO: M/F "),prompt("TELEFONO: "), prompt("CANTIDAD DE EMPLEADOS SI POSEE: "),prompt("USUARIO: "),prompt("CONTRASEÑA: "));
clientes.push(cliente4);
console.table(clientes);


