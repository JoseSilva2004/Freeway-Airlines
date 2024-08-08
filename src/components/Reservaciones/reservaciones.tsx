import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reservaciones.css';
import logo from '../../assets/logo-avion.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneArrival, faPlaneUp, faBuildingUser, faLocationPin, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


interface ReservationData {
    agencia: string;
    hora_salida: string;
    hora_llegada: string;
    vuelo: string;
    origen: string;
    destino: string;
}

interface ReservationErrors {
    agencia?: string;
    hora_salida?: string;
    hora_llegada?: string;
    vuelo?: string;
    origen?: string;
    destino?: string;
}

const Reservaciones: React.FC = () => {
    const [ReservationData, setReservationData] = useState<ReservationData>({
        agencia: '',
        hora_salida: '',
        hora_llegada: '',
        vuelo: '',
        origen: '',
        destino: ''
    });

    const [errors, setErrors] = useState<ReservationErrors>({});

    const navigate = useNavigate();

    const validate = () => {
        const newErrors: ReservationErrors = {};
        Object.keys(ReservationData).forEach(key => {
            const error = validateField(key, ReservationData[key as keyof ReservationData]);
            if (error) newErrors[key as keyof ReservationErrors] = error;
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            toast.info('Reservacion registrada!!. Redirigiendo a boleteria', {
                autoClose: 3000,
                    onClose: () => navigate('/boleteria'),
            });
        } else {
            toast.info('Seleccione los campos que faltan')
        }
    };

    const validateField = (name: string, value: string) => {
        let error = '';
        switch (name) {
            case 'agencia':
                if (!value) error = 'La agencia es requerida';
                break;
            case 'hora_salida':
                if (!value) error = 'La hora de salida es requerida';
                break;
            case 'hora_llegada':
                if (!value) error = 'La hora de llegada es requerida';
                break;
            case 'vuelo':
                if (!value) error = 'El numero de vuelo es requerido';
                break;
            case 'origen':
                if (!value) error = 'El origen es requerido';
                break;
            case 'destino':
                if (!value) error = 'El destino es requerido';
                break;        
            default:
                break;
        }
        return error;
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target;
        setReservationData({ ...ReservationData, [id]: value });

        const error = validateField(id, value);
        setErrors({ ...errors, [id]: error });
    };

    return (
        <div className="flight-reservation-container">
            <div className="flight-reservation-card">
                <div className="flight-reservation-header">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="flight-reservation-logo" 
                    />
                    <h2 className="flight-reservation-title">Reservación</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-column">
                            <div className="form-group">
                                <label htmlFor="agency">Agencia</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faBuildingUser} /></span>
                                    </div>
                                    <select 
                                        className="form-control" 
                                        id="agencia"
                                        value={ReservationData.agencia}
                                        onChange={handleChange}
                                    >
                                        <option value="laser">Laser Airlines</option>
                                        <option value="conviasa">Conviasa</option>
                                        <option value="aeropostal">Aeropostal</option>
                                    </select>
                                    {errors.agencia && <div className="invalid-feedback">{errors.agencia}</div>}
                                </div>
                            </div>
                           
                            <div className="form-group">
                                <label htmlFor="departure">Hora de salida</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faPlaneUp} /></span>
                                    </div>
                                    <select 
                                        className="form-control" 
                                        id="hora_salida"
                                        value={ReservationData.hora_salida}
                                        onChange={handleChange}
                                    >
                                        <option value="20:00">8:00 PM</option>
                                        <option value="21:00">9:00 PM</option>
                                        <option value="22:00">10:00 PM</option>
                                    </select>
                                    {errors.hora_salida && <div className="invalid-feedback">{errors.hora_salida}</div>}
                                </div>
                            </div>
                        
                            <div className="form-group">
                                <label htmlFor="arrival">Hora de llegada</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faPlaneArrival} /></span>
                                    </div>
                                    <select 
                                        className="form-control" 
                                        id="hora_llegada"
                                        value={ReservationData.hora_llegada}
                                        onChange={handleChange}
                                    >
                                        <option value="20:50">8:50 PM</option>
                                        <option value="21:50">9:50 PM</option>
                                        <option value="22:50">10:50 PM</option>
                                    </select>
                                    {errors.hora_llegada && <div className="invalid-feedback">{errors.hora_llegada}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="form-column">
                            <div className="form-group">
                                <label htmlFor="flightNumber">Número de Vuelo</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">123</span>
                                    </div>
                                    <select 
                                        className="form-control" 
                                        id="vuelo"
                                        value={ReservationData.vuelo}
                                        onChange={handleChange}
                                    >
                                        <option value="YV0008">YV0008</option>
                                        <option value="YV00012">YV00012</option>
                                    </select>
                                    {errors.vuelo && <div className="invalid-feedback">{errors.vuelo}</div>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="origin">Origen</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faLocationArrow} /></span>
                                    </div>
                                    <select 
                                        className="form-control" 
                                        id="origen"
                                        value={ReservationData.origen}
                                        onChange={handleChange}
                                    >
                                        <option value="porlamar">Porlamar</option>
                                        <option value="canaima">Canaima</option>
                                        <option value="losroques">Los Roques</option>
                                        <option value="maiquetia">Maiquetía</option>
                                        <option value="puertoordaz">Puerto Ordaz</option>
                                    </select>
                                    {errors.origen && <div className="invalid-feedback">{errors.origen}</div>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="destination">Destino</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faLocationPin} /></span>
                                    </div>
                                    <select 
                                        className="form-control" 
                                        id="destino"
                                        value={ReservationData.destino}
                                        onChange={handleChange}
                                    >
                                        <option value="porlamar">Porlamar</option>
                                        <option value="canaima">Canaima</option>
                                        <option value="losroques">Los Roques</option>
                                        <option value="maiquetia">Maiquetía</option>
                                        <option value="puertoordaz">Puerto Ordaz</option>
                                    </select>
                                    {errors.destino && <div className="invalid-feedback">{errors.destino}</div>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <ToastContainer />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Reservar</button>
                </form>
            </div>
        </div>
    );
}

export default Reservaciones;

