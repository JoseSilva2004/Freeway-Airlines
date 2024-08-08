import React from 'react';
import { useTable, Column } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './itinerarios.css';

interface FlightData {
    flightNumber: string;
    departureTime: string;
    arrivalTime: string;
    origin: string;
    destination: string;
}

const Itinerario: React.FC = () => {
    const navigate = useNavigate();

    // Datos de ejemplo
    const data: FlightData[] = React.useMemo(
        () => [
            {
                flightNumber: 'YV0008',
                departureTime: '08:45 PM',
                arrivalTime: '09:55 PM',
                origin: 'Maiquetía',
                destination: 'Porlamar',
            },
            {
                flightNumber: 'YV0012',
                departureTime: '06:50 AM',
                arrivalTime: '12:20 AM',
                origin: 'Porlamar',
                destination: 'Canaima',
            },
            {
                flightNumber: 'YV0008',
                departureTime: '05:55 PM',
                arrivalTime: '06:30 PM',
                origin: 'Puerto Ordaz',
                destination: 'Los Roques',
            },
            {
                flightNumber: 'YV0012',
                departureTime: '06:30 PM',
                arrivalTime: '07:15 PM',
                origin: 'Los Roques',
                destination: 'Canaima',
            },
            {
                flightNumber: 'YV0008',
                departureTime: '04:20 PM',
                arrivalTime: '05:05 PM',
                origin: 'Porlamar',
                destination: 'Los Roques',
            },
        ],
        []
    );

    // Definición de las columnas
    const columns: Column<FlightData>[] = React.useMemo(
        () => [
            {
                Header: 'Vuelo',
                accessor: 'flightNumber',
                Cell: ({ value }: { value: string }) => (
                    <div className="flight-number-cell">
                        {value}
                        <a
                            href="#"
                            className="flight-icon-link"
                            onClick={(e) => {
                                e.preventDefault(); 
                                toast.info('Vuelo seleccionado. Redirigiendo a reservación', {
                                    autoClose: 3000,
                                    onClose: () => navigate('/reservaciones'), 
                                });
                            }}
                        >
                            <FontAwesomeIcon icon={faPlane} className="flight-icon" />
                        </a>
                    </div>
                ),
            },
            {
                Header: 'Hora de Salida',
                accessor: 'departureTime',
            },
            {
                Header: 'Hora de Llegada',
                accessor: 'arrivalTime',
            },
            {
                Header: 'Origen',
                accessor: 'origin',
            },
            {
                Header: 'Destino',
                accessor: 'destination',
            },
        ],
        [navigate]
    );

    // Estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = React.useState('');

    // Filtrar datos en función del término de búsqueda
    const filteredData = React.useMemo(() => {
        return data.filter(flight =>
            flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            flight.departureTime.toLowerCase().includes(searchTerm.toLowerCase()) ||
            flight.arrivalTime.toLowerCase().includes(searchTerm.toLowerCase()) ||
            flight.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
            flight.destination.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, data]);

    // Crear la tabla usando react-table
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: filteredData });

    return (
        <div className="itinerario-container">
            <div className="session-card">
                <p>Usuario: Jhon Doe</p>
            </div>
            <input
                type="text"
                placeholder="Buscar vuelos..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="datatable">
                <table {...getTableProps()} className="table">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Itinerario;
