import React from 'react';

function Formulario() {
    return (
        <div className="formulario">
            <div className="logo-nombre">
                <img src="../public/img/ExpressMX-logo-png.png" alt="Logo Express MX" />
                <h1 className="nombre-empresa">Express MX</h1>
            </div>
            <h2 className="titulo">Cotizar producto</h2>
            <p className="subtitulo">Obtén tu cotización personalizada en segundos.</p><hr />

            <form className="form">
                <div className="contacto">
                    <h3>Información de contacto</h3>
                    <div className="info-contacto">
                        <label>Nombre</label>
                        <input type="text" placeholder="Escribe tu nombre" />
                    </div>
                    <div className="info-contacto">
                        <label>Correo</label>
                        <input type="email" placeholder="Escribe tu correo" />
                    </div>
                </div><hr />

                <div className="adicional">
                    <h3>Información adicional</h3>
                    <div className="info-adicional">
                        <label>Cantidad de productos</label>
                        <input type="number" placeholder="Ej. 10" />
                    </div>
                    <div className="info-adicional">
                        <label>Tipo de entrega</label>
                        <select>
                        <option value="">Seleccionar</option>
                        <option value="express">Express</option>
                        <option value="normal">Normal</option>
                        </select>
                    </div>
                </div>
                <hr />

                <div className="pie-formulario">
                    <label className="terminos">
                        <input type="checkbox" />
                        Acepto los términos y condiciones
                    </label>
                    <button type="submit" className="enviar-boton">Enviar cotización</button>
                </div>
            </form>
        </div>
    );
}

export default Formulario;