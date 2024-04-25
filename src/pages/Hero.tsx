import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
    return (
        <div className="container mx-auto">
            {/* Aquí va el contenido del hero */}
            <h1>Bienvenido a nuestro comparador de tarifas</h1>
            <p>Completa el formulario para obtener las mejores tarifas para ti.</p>
            <Link
                to="/form"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
            >
                Ver Tarifas
            </Link>
        </div>
    );
};
