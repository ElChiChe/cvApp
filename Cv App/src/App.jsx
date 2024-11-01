import { useState } from "react";
import { Header } from "./components/Header";
import { Inputs } from "./components/Inputs";
import { Plantilla } from "./components/Plantilla";

function App() {

   const [formData, setFormData] = useState({
    generales: {nombre: "", email: "", telefono: "", descripcion: "", localidad: ""},
    educacion: {institucion: "", titulo: "", fechaInicio: "", fechaFin: ""},
    laborales: {empresa: "", puesto: "", responsabilidades: "", desde: "", hasta: ""}
   })

   const [listaEducacion, setListaEducacion] = useState([]);
   const [listaLaborales, setListaLaborales] = useState([])

   const agregarEducacion = () => {
    if(listaEducacion.length >= 4) return;

    setListaEducacion([...listaEducacion, formData.educacion])

    }

    const agregarLaborales = () => {
        if(listaLaborales.length >= 4) return;
    
        setListaLaborales([...listaLaborales, formData.laborales])
    }    

    return (
        <main>
            <Header />
            <Inputs formData={formData} setFormData={setFormData} agregarEducacion={agregarEducacion} agregarLaborales={agregarLaborales}/>
            <Plantilla formData={formData} listaEducacion={listaEducacion} listaLaborales={listaLaborales} />
        </main>
        )
    }

export default App;
