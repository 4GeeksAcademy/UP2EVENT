import { notifyError, notifySuccess } from "../utils/Notifications";
import React, { useEffect, useState } from 'react';
import { backendUrl } from '../utils/Config';
import { CardEvento } from "../components/CardEvento/CardEvento";

export const MisEventos = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const eventoUsuarioLogin = async () => {
      const tokenUsuario = localStorage.getItem("token");
      const userId = localStorage.getItem("userId"); // lo guardas al iniciar sesión

      try {
        const respuesta = await fetch(backendUrl + `events/mis-eventos/${userId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${tokenUsuario}`,
            'Content-Type': 'application/json'
          }
        });

        const data = await respuesta.json();

        if (respuesta.ok) {
          setEventos(data.response || []);
          notifySuccess("Aquí está tu listado de eventos");
        } else {
          setEventos([]);
          notifyError(data.message || "No tienes eventos disponibles");
        }
      } catch (error) {
        notifyError("Error al cargar los eventos");
      }
    };

    eventoUsuarioLogin();
  }, []);

  console.log(eventos)

  return (
    <div>
      <h1>Mis eventos</h1>
      <section className="grid-cards ">
        {eventos.length === 0 ? (
          <p>No tienes eventos creados aún.</p>
        ) : (
          eventos.map((evento, index) => (
            <CardEvento key={index} item={evento} />
          ))
        )}
      </section>
    </div>
  );
};