import React from 'react';
import './footer.css'; 

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Freeway Airlines. Todos los derechos reservados.</p>
                <p>
                    <a href="#privacy-policy">Política de Privacidad</a> | <a href="#terms-of-service">Términos de Servicio</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
