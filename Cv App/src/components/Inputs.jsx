import { useState } from "react";
import "../styles/inputs.css";

export const Inputs = ({formData, setFormData, agregarEducacion, agregarLaborales}) => {

    const [datosGenerales, setDatosGenerales] = useState(false);
    const [datosEducacion, setDatosEducacion] = useState(false);
    const [datosLaborales, setDatosLaborales] = useState(false);

    const handleGenerales = e => {
        setFormData({
            ...formData,
            generales: {
                ...formData.generales,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleEducacion = e => {
        setFormData({
            ...formData,
            educacion: {
                ...formData.educacion,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleLaborales = e => {
        setFormData({
            ...formData,
            laborales: {
                ...formData.laborales,
                [e.target.name]: e.target.value
            }
        });
    }

    

    return (
        <section className="datosContainer">
            <div className="datos datosGenerales">
                <h4 onClick={() => setDatosGenerales(!datosGenerales)} className="tituloDato">Datos generales<i className={datosGenerales ? "fas fa-arrow-up" : "fas fa-arrow-down"}></i></h4>
                <div className={datosGenerales ? "general" : ""}>
                    <input name="nombre" type="text" placeholder="Nombre" onChange={handleGenerales} minLength={"20"} maxLength={"20"}/>
                    <input name="descripcion" type="text" placeholder="Descripción" minLength={"30"} maxLength={"250"} onChange={handleGenerales} />
                    <input name="email" type="email" placeholder="Correo electrónico" onChange={handleGenerales} />
                    <input name="telefono" type="number" placeholder="Número telefónico" onChange={handleGenerales} />
                    <input name="localidad" type="text" placeholder="Localidad" onChange={handleGenerales} />
                </div>
            </div>
            <div className="datos datosEducacion">
                <h4 onClick={() => setDatosEducacion(!datosEducacion)} className="tituloDato">Datos de educación <i className={datosEducacion ? "fas fa-arrow-up" : "fas fa-arrow-down"}></i></h4>
                <div className={datosEducacion ? "educacion" : ""}>
                    <input name="institucion" type="text" onChange={handleEducacion} placeholder="Nombre de la institución" maxLength={50} />
                    <input name="titulo" type="text" onChange={handleEducacion} placeholder="Nombre del título" maxLength={50} />
                    <span>Inicio</span>
                    <input name="fechaInicio" type="date" onChange={handleEducacion} placeholder="Fecha de estudio" />
                    <span>Fin previsto</span>
                    <input name="fechaFin" type="date" onChange={handleEducacion} placeholder="Fecha de estudio" />
                    <button onClick={agregarEducacion} style={{padding: "5px"}}>Agregar</button>
                </div>
            </div>
            <div className="datos datosLaboralPractica">
                <h4 onClick={() => setDatosLaborales(!datosLaborales)} className="tituloDato">Experiencia laboral <i className={datosLaborales ? "fas fa-arrow-up" : "fas fa-arrow-down"}></i></h4>
                <div className={datosLaborales ? "laborales" : ""}>
                    <input name="empresa" type="text" onChange={handleLaborales} placeholder="Nombre de la empresa" maxLength={40} />
                    <input name="puesto" type="text" onChange={handleLaborales} placeholder="Puesto" maxLength={40} />
                    <input name="responsabilidades" type="text" onChange={handleLaborales} placeholder="Breve descripción del puesto" minLength={"50"} maxLength={"120"} />
                    <p htmlFor="">Desde</p>
                    <input name="desde" onChange={handleLaborales} type="date"/>
                    <label htmlFor="">Hasta</label>
                    <input name="hasta" onChange={handleLaborales} type="date"/>
                    <button onClick={agregarLaborales} style={{padding: "5px"}}>Agregar</button>
                </div>
            </div>
        </section>
    )
}