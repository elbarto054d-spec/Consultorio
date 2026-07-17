import { useState } from "react";


function Appointment({
    mostrarFormulario,
    mostrarToast
}) {


const medicos = {

    general:[
        "Dr. Juan Pérez",
        "Dra. Ana López"
    ],

    pediatria:[
        "Dra. María Gómez",
        "Dr. Carlos Ruiz"
    ],

    cardiologia:[
        "Dr. Luis Torres",
        "Dra. Sofía Herrera"
    ],

    ginecologia:[
        "Dra. Laura Mendoza"
    ],

    dermatologia:[
        "Dr. Andrés Castillo"
    ],

    oftalmologia:[
        "Dra. Patricia Flores"
    ],

    odontologia:[
        "Dr. Ricardo Pérez"
    ],

    neurologia:[
        "Dr. Carlos Ramírez"
    ],

    psicologia:[
        "Lic. María Fernández"
    ],

    nutricion:[
        "Dra. Daniela Torres"
    ]

};




const horariosMedicos = {


    "Dr. Juan Pérez":[
        "08:00",
        "09:00",
        "10:00"
    ],


    "Dra. Ana López":[
        "14:00",
        "15:00",
        "16:00"
    ],


    "Dra. María Gómez":[
        "08:30",
        "10:30",
        "12:00"
    ],


    "Dr. Carlos Ruiz":[
        "13:00",
        "15:00",
        "16:30"
    ],


    "Dr. Luis Torres":[
        "09:00",
        "11:00",
        "14:00"
    ],


    "Dra. Sofía Herrera":[
        "14:00",
        "16:00"
    ],


    "Dra. Laura Mendoza":[
        "08:00",
        "12:00"
    ],


    "Dr. Andrés Castillo":[
        "10:00",
        "15:00"
    ],


    "Dra. Patricia Flores":[
        "09:00",
        "14:00"
    ],


    "Dr. Ricardo Pérez":[
        "08:30",
        "13:30"
    ],


    "Dr. Carlos Ramírez":[
        "11:00",
        "16:00"
    ],


    "Lic. María Fernández":[
        "09:30",
        "15:30"
    ],


    "Dra. Daniela Torres":[
        "10:00",
        "14:00"
    ]

};





const [formData,setFormData]=useState({

    nombre:"",
    edad:"",
    sexo:"",
    correo:"",
    especialidad:"",
    medico:"",
    fecha:"",
    hora:"",
    motivo:"",
    confirmacion:"",
    telefono:"",
    correoConfirmacion:""

});



const [mensaje,setMensaje]=useState("");



const [validacion,setValidacion]=useState({});



const handleChange=(e)=>{


const {name,value}=e.target;



setFormData(prev=>({

    ...prev,

    [name]:value

}));



let correcto=false;
let texto="";



// ===============================
// NOMBRE
// ===============================

if(name==="nombre"){

    correcto=
    /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{5,}$/.test(value);


    texto=correcto
    ?
    "✓ Nombre válido"
    :
    "✗ Mínimo 5 letras, solo texto";

}




// ===============================
// EDAD
// ===============================

if(name==="edad"){

    correcto=
    value>=1 && value<=120;


    texto=correcto
    ?
    "✓ Edad válida"
    :
    "✗ Edad entre 1 y 120 años";

}





// ===============================
// SEXO
// ===============================

if(name==="sexo"){

    correcto=
    value!=="";


    texto=correcto
    ?
    "✓ Sexo seleccionado"
    :
    "✗ Seleccione una opción";

}





// ===============================
// CORREO
// ===============================

if(name==="correo"){


    const dominios=[
        "gmail.com",
        "hotmail.com",
        "outlook.com",
        "yahoo.com"
    ];


    const partes=value.split("@");


    if(partes.length===2){

        correcto=
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        &&
        dominios.includes(partes[1]);

    }



    texto=correcto
    ?
    "✓ Correo válido"
    :
    "✗ Correo no permitido";

}





// ===============================
// MÉDICO
// ===============================

if(name==="medico"){


    correcto=
    value!=="";


    texto=correcto
    ?
    "✓ Médico seleccionado"
    :
    "✗ Seleccione médico";


}





// ===============================
// FECHA
// ===============================

if(name==="fecha"){


    correcto=
    value!=="";


    texto=correcto
    ?
    "✓ Fecha válida"
    :
    "✗ Seleccione fecha";


}




// ===============================
// MOTIVO
// ===============================

if(name==="motivo"){


    correcto=
    value.length>=5;


    texto=correcto
    ?
    "✓ Motivo correcto"
    :
    "✗ Mínimo 5 caracteres";


}




// ===============================
// CONFIRMACIÓN
// ===============================

if(name==="confirmacion"){


correcto=value!=="";


texto=correcto
?
"✓ Método seleccionado"
:
"✗ Seleccione método";



if(
value==="whatsapp" ||
value==="sms" ||
value==="llamada"
){

setFormData(prev=>({

...prev,

telefono:""

}));

}


}





// ===============================
// TELÉFONO
// ===============================
if(name==="telefono"){


correcto =
/^\d{10}$/.test(value);

correcto =
/^0\d{9}$/.test(value);

texto=correcto
?
"✓ Número válido"
:
"✗ Ingrese exactamente 10 dígitos";


}



// ===============================
// CORREO CONFIRMACIÓN
// ===============================

if(name==="correoConfirmacion"){


    const dominios=[
        "gmail.com",
        "hotmail.com",
        "outlook.com",
        "yahoo.com"
    ];


    const partes=value.split("@");


    if(partes.length===2){


        correcto=
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        &&
        dominios.includes(partes[1]);


    }



    texto=correcto
    ?
    "✓ Correo de confirmación válido"
    :
    "✗ Correo incorrecto o dominio no permitido";


}




setValidacion(prev=>({

    ...prev,


    [name]:{

        correcto,

        texto

    }


}));



};
const cambiarEspecialidad=(e)=>{


const valor=e.target.value;



setFormData(prev=>({

    ...prev,

    especialidad:valor,

    medico:"",

    hora:""

}));



setValidacion(prev=>({

    ...prev,

    especialidad:{

        correcto:valor!=="",

        texto:
        valor!==""
        ?
        "✓ Especialidad seleccionada"
        :
        "✗ Seleccione especialidad"

    },

    medico:{

        correcto:false,

        texto:""

    },

    hora:{

        correcto:false,

        texto:""

    }

}));



};





const seleccionarHora=(hora)=>{


setFormData(prev=>({

    ...prev,

    hora

}));



setValidacion(prev=>({

    ...prev,

    hora:{

        correcto:true,

        texto:"✓ Horario seleccionado"

    }

}));



};






const validarFormulario=()=>{


return(


validacion.nombre?.correcto &&


validacion.edad?.correcto &&


validacion.sexo?.correcto &&


validacion.correo?.correcto &&


formData.especialidad!=="" &&


formData.medico!=="" &&


formData.fecha!=="" &&


validacion.hora?.correcto &&


validacion.motivo?.correcto &&


validacion.confirmacion?.correcto &&



(

formData.confirmacion==="correo"

?

validacion.correoConfirmacion?.correcto

:

validacion.telefono?.correcto

)



);


};






const enviarCita=(e)=>{

    e.preventDefault();


    if(!validarFormulario()){

        setMensaje(
            "Complete todos los campos obligatorios"
        );

        return;

    }


    // Mensaje de éxito

    setMensaje(
        "✅ Cita registrada correctamente"
    );


    mostrarToast?.(
        "Cita agendada exitosamente"
    );


    // Esperar un momento para mostrar el mensaje
    setTimeout(()=>{


        setFormData({

            nombre:"",
            edad:"",
            sexo:"",
            correo:"",
            especialidad:"",
            medico:"",
            fecha:"",
            hora:"",
            motivo:"",
            confirmacion:"",
            telefono:"",
            correoConfirmacion:""

        });


        setValidacion({});


        setMensaje("");


    },2000);


};




const cancelar=()=>{


setFormData({

    nombre:"",
    edad:"",
    sexo:"",
    correo:"",
    especialidad:"",
    medico:"",
    fecha:"",
    hora:"",
    motivo:"",
    confirmacion:"",
    telefono:"",
    correoConfirmacion:""

});



setValidacion({});



setMensaje("");



};
if(!mostrarFormulario){

return null;

}



return (

<section 
className="appointment section"
id="appointment"
>


<div className="appointment-bg"></div>


<div className="container">


<div className="appointment-content">


<div className="section-header center light">

<span className="section-label">
Agenda tu Cita
</span>


<h2 className="section-title">
Agendar nueva cita
</h2>


<p className="section-desc">
Complete la información para reservar su cita médica.
</p>


</div>





<form

className="appointment-form"

onSubmit={enviarCita}

>




<h3>
Información del paciente
</h3>





<div className="form-group">


<label>
Nombres *
</label>


<input

className="form-control"

name="nombre"

value={formData.nombre}

onChange={handleChange}

placeholder="Ejemplo: Juan Pérez"

/>


<small
className={
validacion.nombre?.correcto
?
"ok"
:
"error"
}
>

{validacion.nombre?.texto}

</small>


</div>





<div className="form-group">


<label>
Edad *
</label>


<input

type="number"

name="edad"

value={formData.edad}

onChange={handleChange}

/>



<small
className={
validacion.edad?.correcto
?
"ok"
:
"error"
}
>

{validacion.edad?.texto}

</small>


</div>






<div className="form-group">


<label>
Sexo *
</label>


<select

name="sexo"

value={formData.sexo}

onChange={handleChange}

>


<option value="">
Seleccione
</option>


<option value="Masculino">
Masculino
</option>


<option value="Femenino">
Femenino
</option>


</select>



<small
className={
validacion.sexo?.correcto
?
"ok"
:
"error"
}
>

{validacion.sexo?.texto}

</small>


</div>







<div className="form-group">


<label>
Correo *
</label>


<input

name="correo"

value={formData.correo}

onChange={handleChange}

/>


<small
className={
validacion.correo?.correcto
?
"ok"
:
"error"
}
>

{validacion.correo?.texto}

</small>


</div>







<h3>
Información de la cita
</h3>






<div className="form-group">


<label>
Especialidad *
</label>


<select

value={formData.especialidad}

onChange={cambiarEspecialidad}

>


<option value="">
Seleccione especialidad
</option>



{

Object.keys(medicos).map((item)=>(

<option

key={item}

value={item}

>

{item}

</option>


))

}


</select>




<small
className={
validacion.especialidad?.correcto
?
"ok"
:
"error"
}
>

{validacion.especialidad?.texto}

</small>


</div>







<div className="form-group">


<label>
Médico *
</label>


<select

name="medico"

value={formData.medico}

onChange={handleChange}

>


<option value="">
Seleccione médico
</option>



{

medicos[formData.especialidad]?.map((doc)=>(

<option

key={doc}

value={doc}

>

{doc}

</option>

))

}


</select>



<small
className={
validacion.medico?.correcto
?
"ok"
:
"error"
}
>

{validacion.medico?.texto}

</small>


</div>







<div className="form-group">


<label>
Fecha *
</label>


<input

type="date"

name="fecha"

min={
new Date()
.toISOString()
.split("T")[0]
}

value={formData.fecha}

onChange={handleChange}

/>


<small
className={
validacion.fecha?.correcto
?
"ok"
:
"error"
}
>

{validacion.fecha?.texto}

</small>


</div>






<div className="form-group">


<label>
Horarios disponibles *
</label>



<div id="horarios">


{

horariosMedicos[formData.medico]?.map((hora)=>(


<button

type="button"

key={hora}

className={
formData.hora===hora
?
"hora activo"
:
"hora"
}

onClick={()=>seleccionarHora(hora)}

>

{hora}

</button>


))

}



</div>


<small
className={
validacion.hora?.correcto
?
"ok"
:
"error"
}
>

{validacion.hora?.texto}

</small>


</div>






<div className="form-group">


<label>
Motivo *
</label>


<textarea

name="motivo"

value={formData.motivo}

onChange={handleChange}

/>



<small
className={
validacion.motivo?.correcto
?
"ok"
:
"error"
}
>

{validacion.motivo?.texto}

</small>


</div>
<div className="form-group">


<label>
Confirmar mediante *
</label>


<select

name="confirmacion"

value={formData.confirmacion}

onChange={handleChange}

>


<option value="">
Seleccione
</option>


<option value="whatsapp">
WhatsApp
</option>


<option value="sms">
SMS
</option>


<option value="llamada">
Llamada
</option>


<option value="correo">
Correo
</option>


</select>



<small
className={
validacion.confirmacion?.correcto
?
"ok"
:
"error"
}
>

{validacion.confirmacion?.texto}

</small>


</div>







{

["whatsapp","sms","llamada"]

.includes(formData.confirmacion)

&&


<div className="form-group">


<label>
Teléfono *
</label>


<input

name="telefono"

type="tel"

maxLength="10"

value={formData.telefono}

onChange={handleChange}

onKeyDown={(e)=>{

    if(
        !/[0-9]/.test(e.key)
        &&
        e.key!=="Backspace"
        &&
        e.key!=="Tab"
    ){

        e.preventDefault();

    }

}}

/>



<small
className={
validacion.telefono?.correcto
?
"ok"
:
"error"
}
>

{validacion.telefono?.texto}

</small>


</div>


}







{

formData.confirmacion==="correo"

&&


<div className="form-group">


<label>
Correo de confirmación *
</label>



<input

name="correoConfirmacion"

value={formData.correoConfirmacion}

onChange={handleChange}

/>



<small
className={
validacion.correoConfirmacion?.correcto
?
"ok"
:
"error"
}
>

{validacion.correoConfirmacion?.texto}

</small>


</div>


}







<div className="botones">



<button

type="submit"

className="btn btn-primary"

disabled={!validarFormulario()}

>

Confirmar cita

</button>




<button

type="button"

className="btn btn-outline"

onClick={cancelar}

>

Cancelar cita

</button>



</div>







<div id="mensaje">

{mensaje}

</div>




</form>


</div>


</div>


</section>


);


}


export default Appointment;