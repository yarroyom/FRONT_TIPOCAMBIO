// src/components/TipoCambio.js
import React, { useState } from 'react';
import axios from 'axios';

const TipoCambio = () => {
  const [tipoCambio, setTipoCambio] = useState({ fecha: '', referencia: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const obtenerTipoCambio = async () => {
    setLoading(true);
    setError(null);
    try {
      // Cambia la URL al endpoint correcto
      const response = await axios.get('http://localhost:8080/api/tipoCambio/actual');

      // Obtener el contenido de TipoCambioDiaStringResult
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, "text/xml");
      
      // Extraer el contenido de TipoCambioDiaStringResult
      const tipoCambioResult = xmlDoc.getElementsByTagName("TipoCambioDiaStringResult")[0].textContent;

      // Parsear el contenido de tipoCambioResult que es un XML en sí
      const innerXmlDoc = parser.parseFromString(tipoCambioResult, "text/xml");
      const fecha = innerXmlDoc.getElementsByTagName("fecha")[0].textContent;
      const referencia = innerXmlDoc.getElementsByTagName("referencia")[0].textContent;

      // Establecer el estado con la fecha y referencia
      setTipoCambio({ fecha, referencia });
    } catch (err) {
      setError('Error al obtener el tipo de cambio');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Tipo de Cambio</h1>
      <button onClick={obtenerTipoCambio}>Obtener Tipo de Cambio</button>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {tipoCambio.fecha && tipoCambio.referencia && (
        <div>
          <h2>Tipo de Cambio Actual:</h2>
          <p>Fecha: <strong>{tipoCambio.fecha}</strong></p>
          <p>Referencia: <strong>{tipoCambio.referencia}</strong></p>
        </div>
      )}
    </div>
  );
};

export default TipoCambio;
