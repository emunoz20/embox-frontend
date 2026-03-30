import { useEffect, useState } from "react";

export default function MessageHistory() {

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadLogs = async () => {
    try {

      const res = await fetch("http://localhost:3000/api/message-logs");
      const data = await res.json();

      setLogs(data);

    } catch (err) {

      console.log("Error loading message logs", err);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLogs();
  }, []);

  if (loading) {
    return <div>Cargando historial de mensajes...</div>;
  }

  return (
    <div className="card">

      <h2>Historial de Mensajes</h2>

      <table style={{ width: "100%", marginTop: 10 }}>

        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tbody>

          {logs.length === 0 && (
            <tr>
              <td colSpan="5">No hay mensajes aún</td>
            </tr>
          )}

          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.full_name}</td>
              <td>{log.phone}</td>
              <td>{log.type}</td>
              <td>{log.status}</td>
              <td>
                {new Date(log.created_at).toLocaleString()}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}