import MessageHistory from "../../components/MessageHistory";

export default function MessageLogs() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-white">
        Historial de Mensajes
      </h1>

      <MessageHistory />

    </div>
  );
}