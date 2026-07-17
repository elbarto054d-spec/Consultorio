import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import useAppEffects 
from "./hooks/useAppEffects";



function App() {


  const app = useAppEffects();



  return (

    <>


     <Navbar

menuOpen={app.menuOpen}

toggleMenu={app.toggleMenu}

cerrarMenu={app.cerrarMenu}

navbarScroll={app.navbarScroll}

activeSection={app.activeSection}

abrirFormulario={app.abrirFormulario}

/>



      <Hero

        abrirFormulario={
          app.abrirFormulario
        }

      />



      <About />

      <Services />



      <Appointment

        mostrarFormulario={
          app.mostrarFormulario
        }

        mostrarToast={
          app.mostrarToast
        }

        toast={
          app.toast
        }

      />



      <Doctors

        abrirFormulario={
          app.abrirFormulario
        }

      />



      <Testimonials />

      <Contact />

   <Footer
  abrirFormulario={app.abrirFormulario}
/>

    </>

  );


}


export default App;