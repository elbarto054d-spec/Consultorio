function Navbar({
menuOpen,
toggleMenu,
cerrarMenu,
navbarScroll,
activeSection,
abrirFormulario
}) {


return (

<nav 
className={
navbarScroll 
? "navbar scrolled"
: "navbar"
}
>


<div className="nav-container">


<a href="#" className="nav-logo">

<span className="logo-icon">

<i className="fa-solid fa-user-doctor"></i>

</span>


<span className="logo-text">
San José
</span>


</a>



<ul 
className={
menuOpen
? "nav-links open"
: "nav-links"
}
>


<li>

<a 
href="#hero"

className={
activeSection==="hero"
?"active"
:""
}

onClick={cerrarMenu}

>

Inicio

</a>

</li>



<li>

<a 
href="#about"

className={
activeSection==="about"
?"active"
:""
}

onClick={cerrarMenu}

>

Nosotros

</a>

</li>



<li>

<a 
href="#services"

className={
activeSection==="services"
?"active"
:""
}

onClick={cerrarMenu}

>

Servicios

</a>

</li>



<li>

<a 
href="#doctors"

className={
activeSection==="doctors"
?"active"
:""
}

onClick={cerrarMenu}

>

Médicos

</a>

</li>



<li>

<a 
href="#testimonials"

className={
activeSection==="testimonials"
?"active"
:""
}

onClick={cerrarMenu}

>

Reseñas

</a>

</li>



<li>

<a 
href="#contact"

className={
activeSection==="contact"
?"active"
:""
}

onClick={cerrarMenu}

>

Contacto

</a>

</li>


</ul>




<a
href="#appointment"
className="btn-appointment-nav"

onClick={(e)=>{

e.preventDefault();

cerrarMenu();

abrirFormulario();

}}

>

Agendar Cita

</a>




<button

className={
menuOpen
?
"hamburger active"
:
"hamburger"
}

onClick={toggleMenu}

>


<span></span>

<span></span>

<span></span>


</button>



</div>


</nav>

);


}


export default Navbar;