import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './check-in.css';
import qrCodeImage from '../../assets/codigoQR.png'; // Asegúrate de tener una imagen de QR en esta ruta

const Check_In: React.FC = () => {
    return (
        <div className="qr-checkin-container">
            <div className="qr-checkin-card">
                <div className="qr-checkin-header">
                    <h2 className="qr-checkin-title">Check In</h2>
                </div>
                <div className="qr-code-section">
                    <img 
                        src={qrCodeImage} 
                        alt="QR Code" 
                        className="qr-code-image" 
                    />
                    <button className="btn btn-primary">Escanear</button>
                    <p>Escanee el QR para verificar los datos del vuelo</p>
                </div>
            </div>
        </div>
    );
}

export default Check_In;
