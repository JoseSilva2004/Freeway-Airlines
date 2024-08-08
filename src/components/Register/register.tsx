import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'; 
import logo from '../../assets/logo-avion.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faKey, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 

// Interfaz para el estado del formulario
interface FormData {
    firstName: string;
    lastName: string;
    age: string;
    email: string;
    phone: string;
    username: string;
    password: string;
}

// Interfaz para los errores del formulario
interface FormErrors {
    firstName?: string;
    lastName?: string;
    age?: string;
    email?: string;
    phone?: string;
    username?: string;
    password?: string;
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        phone: '',
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const navigate = useNavigate(); // Hook para redirección

    const validateField = (name: string, value: string) => {
        let error = '';
        switch (name) {
            case 'firstName':
                if (!value) error = 'Nombre es requerido';
                break;
            case 'lastName':
                if (!value) error = 'Apellido es requerido';
                break;
            case 'age':
                if (!value) {
                    error = 'Edad es requerida';
                } else if (isNaN(Number(value)) || Number(value) <= 0) {
                    error = 'Edad debe ser un número positivo';
                }
                break;
            case 'email':
                if (!value) {
                    error = 'Correo es requerido';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = 'Correo no es válido';
                }
                break;
            case 'phone':
                if (!value) {
                    error = 'Teléfono es requerido';
                } else if (!/^\d{7,10}$/.test(value)) {
                    error = 'Teléfono no es válido';
                }
                break;
            case 'username':
                if (!value) error = 'Usuario es requerido';
                break;
            case 'password':
                if (!value) error = 'Contraseña es requerida';
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        const error = validateField(id, value);
        setErrors({ ...errors, [id]: error });
    };

    const validate = () => {
        const newErrors: FormErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof FormData]);
            if (error) newErrors[key as keyof FormErrors] = error;
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            toast.info('Registro Exitoso!!. Redirigiendo a inicio de sesión', {
                autoClose: 3000,
                onClose: () => navigate('/login'),
            });
        } else {
            toast.info('Rellene los campos que faltan')
        }
    };

    return (
        <div className="register-container">
            <div className="card register-card">
                <div className="card-body">
                    <div className="register-header">
                        <img src={logo} alt="Logo" className="register-logo" />
                        <h2 className="register-title">Registrarse</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="firstName">Nombre</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                                        </div>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                            id="firstName"
                                            placeholder="Jhon"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">Edad</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faCalendarAlt} /></span>
                                        </div>
                                        <input
                                            type="number"
                                            className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                                            id="age"
                                            placeholder="20"
                                            value={formData.age}
                                            onChange={handleChange}
                                        />
                                        {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Correo</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                                        </div>
                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            id="email"
                                            placeholder="Jhon@gmail.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Usuario</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                                        </div>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                            id="username"
                                            placeholder="Jhon123"
                                            value={formData.username}
                                            onChange={handleChange}
                                        />
                                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="lastName">Apellido</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                                        </div>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                            id="lastName"
                                            placeholder="Doe"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Teléfono</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faPhone} /></span>
                                        </div>
                                        <input
                                            type="tel"
                                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                            id="phone"
                                            placeholder="4123456789"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Contraseña</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
                                        </div>
                                        <input
                                            type="password"
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            id="password"
                                            placeholder="Ingrese una Contraseña"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ToastContainer />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-4">Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

