"use client"

import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Formulario = () => {
    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: '',
            email: '',
            message: '',
            telefono: '',
            incluirTelefono: false
        }
    });

    const onSubmit = (data) => {
        // Si el checkbox de incluirTelefono no está marcado, asignar un valor por defecto a telefono
        const telefono = data.incluirTelefono ? data.telefono : 'No proporcionado';

        // Construir el objeto de datos a enviar
        const emailData = {
            ...data,
            telefono: telefono
        };

        emailjs.send('service_j1no15c', 'template_sk7yt0h', emailData, '_8tOF78uWm1KQoLnS')
            .then((response) => {
                toast.success('El mensaje se ha enviado correctamente!');
            })
            .catch((error) => {
                toast.error('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
            });
    };

    const incluirTelefono = watch('incluirTelefono');

    return (
        <div className="bg-darkBg p-8 rounded-lg shadow-lg max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-secondary">Formulario de Contacto</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-20" >
                <div className="flex flex-col">
                    <label className="text-lg font-medium mb-1 text-gray-300">Nombre</label>
                    <input
                        type="text"
                        {...register('nombre', {
                            required: 'El campo nombre es requerido',
                            maxLength: {
                                value: 30,
                                message: 'El campo nombre debe tener menos de 30 caracteres'
                            }
                        })}
                        className="p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-300 shadow-sm"
                    />
                    {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-medium mb-1 text-gray-300">Email</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'El campo email es requerido',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                                message: 'El formato del email es incorrecto'
                            }
                        })}
                        className="p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-300 shadow-sm"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-medium mb-1 text-gray-300">Mensaje</label>
                    <textarea
                        {...register('message', {
                            required: 'El campo mensaje es requerido'
                        })}
                        className="p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-300 shadow-sm h-32 resize-none"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        {...register('incluirTelefono')}
                        className="h-5 w-5 text-secondary border-gray-600 rounded"
                    />
                    <label className="text-lg font-medium text-gray-300">¿Incluir teléfono?</label>
                </div>
                
                {incluirTelefono && (
                    <div className="flex flex-col">
                        <label className="text-lg font-medium mb-1 text-gray-300">Teléfono</label>
                        <input
                            type="text"
                            {...register('telefono')}
                            className="p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-300 shadow-sm"
                        />
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-secondary text-white py-3 rounded-lg font-bold shadow-md hover:bg-blue-600 transition duration-300"
                >
                    Enviar
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Formulario;
