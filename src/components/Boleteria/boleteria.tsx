import React, { useState } from "react";
import "./boleteria.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface FlightTicket {
  airline: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  availableSeats: number;
  destino: string;
  salida: string;
}

interface FlightTicketListProps {
  tickets: FlightTicket[];
}

const FlightTicketListComponent: React.FC<FlightTicketListProps> = ({
  tickets,
}) => {
  const [selectedTicket, setSelectedTicket] = useState<FlightTicket | null>(null);

  const handlePurchase = (ticket: FlightTicket) => {
    setSelectedTicket(ticket);
  };

  return (
    <div className="contenedor">
      <h1>Informacion de boletos</h1>
      <ul className="lista">
        {tickets.map((ticket, index) => (
          <li key={index} className="flight-ticket lista1">
            <div className="contenido2">
              <h2>{ticket.airline}</h2>
              <button
                className="btn boton"
                onClick={(e) => {
                  e.preventDefault();
                  handlePurchase(ticket);
                }}
              >
                Comprar
              </button>
            </div>
            <div className="contenido">
              <p>Origen: {ticket.salida}</p>
              <p>Destino: {ticket.destino}</p>
              <p>Salida: {ticket.departureTime}</p>
              <p>Llegada: {ticket.arrivalTime}</p>
              <p>Asientos disponibles: {ticket.availableSeats}</p>
              <p className="p">
                Precios: <h5>${ticket.price}</h5>
              </p>
            </div>
          </li>
        ))}
      </ul>
      {selectedTicket && (
        <PurchaseForm ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />
      )}
      <ToastContainer />
    </div>
  );
};

interface PurchaseFormProps {
  ticket: FlightTicket;
  onClose: () => void;
}

const PurchaseForm: React.FC<PurchaseFormProps> = ({ ticket, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Boleto comprado exitosamente!", {
      autoClose: 3000,
      onClose: () => navigate("/check-in"),
    });
    onClose();
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>Comprar Boleto</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Apellido:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Método de Pago:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Seleccione un método de pago</option>
              <option value="credit">Tarjeta de Crédito</option>
              <option value="debit">Tarjeta de Débito</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <div>
            <p>Vuelo: {ticket.airline}</p>
            <p>Origen: {ticket.salida}</p>
            <p>Destino: {ticket.destino}</p>
            <p>Salida: {ticket.departureTime}</p>
            <p>Llegada: {ticket.arrivalTime}</p>
            <p>Precio: ${ticket.price}</p>
          </div>
          <div className="button-group">
            <button type="submit" className="btn boton">Comprar</button>
            <button type="button" className="btn boton-cancel" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Boleteria: React.FC = () => {
  const ticketData: FlightTicket[] = [
    {
      airline: "Y0008",
      departureTime: "10:00 AM",
      arrivalTime: "12:00 PM",
      price: 200,
      availableSeats: 50,
      destino: "Maiquetia",
      salida: "Porlamar",
    },
    {
      airline: "Y00012",
      departureTime: "1:00 PM",
      arrivalTime: "3:00 PM",
      price: 250,
      availableSeats: 30,
      destino: "porlamar",
      salida: "Maiquetia",
    },
    {
      airline: "Y0008",
      departureTime: "10:00 AM",
      arrivalTime: "12:00 PM",
      price: 200,
      availableSeats: 50,
      destino: "Canaima",
      salida: "Los Roques",
    },
    {
      airline: "Y00012",
      departureTime: "1:00 PM",
      arrivalTime: "3:00 PM",
      price: 250,
      availableSeats: 30,
      destino: "Puerto Ordaz",
      salida: "Canaima",
    },
  ];

  return <FlightTicketListComponent tickets={ticketData} />;
};

export default Boleteria;


