import "../styles/plantilla.css";

export const Plantilla = ({formData, listaEducacion, listaLaborales}) => {
    let {nombre, email, telefono, descripcion, localidad} = formData.generales

    console.log(listaLaborales)
    
    return (
        <section className="plantilla">
            <section className="datosGeneralesPlantilla">
                <div className="imagenContainer">
                    <img src="https://img-0.journaldunet.com/SZw7irj_l7yGFjlHKyMBUV_nWto=/1500x/smart/92dbb86b11eb414aaa5f3dd90f571d98/ccmcms-jdn/10095918.jpg" alt="" />
                </div>
                <div className="nombreDesc">
                    <h1>{nombre || "Nombre"}</h1>
                    <h4>Sobre mi</h4>
                    <p>{descripcion || "DESCRIPCIÓN"}</p>
                </div>
                <div className="infoComple">
                    <p><i className="fas fa-envelope"></i> {email || "ejemplo@correo.com"}</p>
                    <p><i className="fas fa-phone"></i> {telefono || "xx-xxxx-xxxx"}</p>
                    <p><i className="fas fa-location-dot"></i> {localidad || "Buenos Aires, Argentina"}</p>
                </div>
            </section>
            <section className="datosEducacionPlantilla">
                <div className="eduTitle">
                    <h2>Educación</h2>
                </div>
                {listaEducacion.map((lista, i) =>
                <div key={i}>
                    <p><strong>{lista.institucion ? lista.institucion : "Nombre de la institución"}</strong></p>
                    <p><strong>{lista.titulo ? lista.titulo : "Nombre del título"}</strong></p>
                    <p>{lista.fechaInicio.split("-").reverse().join("/") || "02/07/2020"} - {lista.fechaFin.split("-").reverse().join("/") || "Actualidad"}</p>
                </div>
                )}
            </section>
            <section className="datosLaboralesPlantilla">
                <h2>Experiencia laboral</h2>

                    {listaLaborales.map(lista => (
                    <>
                    <div>
                        <p><strong>{lista.empresa || "Nombre de la empresa"}</strong></p>
                        <p><strong>{lista.puesto || "Puesto"}</strong></p>
                        <p>Responsabilidades</p>
                        <ul className="responsabilidadesUl">
                            <li key={lista.responsabilidades}>{lista.responsabilidades}</li>
                        </ul>
                        <p>Desde: {lista.desde.split("-").reverse().join("/") || "02/07/2022"}</p>
                        <p>Hasta: {lista.hasta.split("-").reverse().join("/") || "04/10/2023"}</p>
                    </div>
                    </>
                    ))}

                    
            </section>
        </section>
    )
}