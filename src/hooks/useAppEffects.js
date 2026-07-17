import { useEffect, useState } from "react";


export default function useAppEffects(){


    const [navbarScroll,setNavbarScroll] = useState(false);

    const [menuOpen,setMenuOpen] = useState(false);

    const [activeSection,setActiveSection] = useState("hero");

    const [mostrarFormulario,setMostrarFormulario] = useState(false);

    const [toast,setToast] = useState("");



    // ==========================
    // NAVBAR + SECCIONES ACTIVAS
    // ==========================

    useEffect(()=>{


        const handleScroll = ()=>{


            // Navbar cambia color

            setNavbarScroll(
                window.scrollY > 50
            );



            // Detectar sección actual

            const sections =
            document.querySelectorAll(
                "section[id]"
            );


            let current="hero";


            sections.forEach(section=>{


                if(
                    window.scrollY >=
                    section.offsetTop - 200
                ){

                    current = section.id;

                }


            });


            setActiveSection(current);


        };



        window.addEventListener(
            "scroll",
            handleScroll
        );



        return ()=>{

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };


    },[]);





    // ==========================
    // ABRIR FORMULARIO CITA
    // ==========================


    const abrirFormulario = ()=>{


        setMostrarFormulario(true);



        setTimeout(()=>{


            document
            .getElementById(
                "appointment"
            )
            ?.scrollIntoView({

                behavior:"smooth"

            });



        },100);


    };





    // ==========================
    // MENU
    // ==========================


    const toggleMenu = ()=>{


        setMenuOpen(
            estado=>!estado
        );


    };



    const cerrarMenu = ()=>{


        setMenuOpen(false);


    };





    // ==========================
    // MENSAJE TOAST
    // ==========================


    const mostrarToast=(mensaje)=>{


        setToast(mensaje);



        setTimeout(()=>{


            setToast("");

        },4000);


    };




    return {


        navbarScroll,

        menuOpen,

        activeSection,

        mostrarFormulario,

        toast,


        abrirFormulario,

        toggleMenu,

        cerrarMenu,

        mostrarToast


    };


}