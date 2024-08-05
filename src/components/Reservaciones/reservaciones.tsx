import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reservaciones.css';
import logo from '../../assets/logo-avion.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneArrival, faPlaneUp, faBuildingUser, faLocationPin, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
const FlightReservation: React.FC = () => {
    return (
        <div className="flight-reservation-container">
            <div className="flight-reservation-card">
                <div className="flight-reservation-header">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="flight-reservation-logo" 
                    />
                    <h2 className="flight-reservation-title">Reservacion</h2>
                </div>
                <form>
                    <div className="form-row">
                        <div className="form-column">
                            <div className="form-group">
                                <label htmlFor="firstName">Agencia</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faBuildingUser} /></span>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="firstName" 
                                        placeholder="Laser Airlines" 
                                    />
                                </div>
                            </div>
                           
                            
                            <div className="form-group">
                                <label htmlFor="departure">hora de salida</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faPlaneUp} /></span>
                                    </div>
                                    <input 
                                        type="salida" 
                                        className="form-control" 
                                        id="departure" 
                                        placeholder="8:00"
                                    />
                                </div>
                            </div>
                        
                        
                            <div className="form-group">
                                <label htmlFor="return">hora de llegada</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faPlaneArrival} /></span>
                                    </div>
                                    <input 
                                        type="llegada" 
                                        className="form-control" 
                                        id="return"
                                        placeholder='8:50' 
                                    />
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
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="flightNumber" 
                                        placeholder="1234" 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="origin">Origen</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faLocationArrow} /></span>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="origin" 
                                        placeholder="New York" 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="destination">Destino</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faLocationPin} /></span>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="destination" 
                                        placeholder="Los Angeles" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default FlightReservation;
