import React, { useState } from 'react';

const FormularioPerfil = () => {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    nombre1: '',
    nombre2: '',
    nombre3: '',
    detalles: ''
  });

  // Estado para manejar errores de validación
  const [errors, setErrors] = useState({});

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar validaciones antes de enviar el formulario
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Enviar el formulario si no hay errores de validación
      console.log('Formulario enviado:', formData);
    } else {
      // Actualizar el estado de errores si hay errores de validación
      setErrors(validationErrors);
    }
  };

  // Función para realizar validaciones de formulario
  const validateForm = (data) => {
    const errors = {};
    // Validar que los nombres no estén vacíos
    if (!data.nombre1.trim()) {
      errors.nombre1 = 'El nombre 1 es requerido';
    }
    if (!data.nombre2.trim()) {
      errors.nombre2 = 'El nombre 2 es requerido';
    }
    if (!data.nombre3.trim()) {
      errors.nombre3 = 'El nombre 3 es requerido';
    }
    // Puedes agregar más validaciones según tus necesidades

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor='nombre1' className='text-gray-700 uppercase font-bold text-sm'>Nombre 1: </label>
        <input
          id='nombre1'
          type="text"
          className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5 ${errors.nombre1 && 'border-red-500'}`}
          placeholder='Nombre 1'
          name='nombre1'
          value={formData.nombre1}
          onChange={handleChange}
        />
        {errors.nombre1 && <p className="text-red-500 text-xs italic">{errors.nombre1}</p>}
      </div>
      <div>
        <label htmlFor='nombre2' className='text-gray-700 uppercase font-bold text-sm'>Nombre 2: </label>
        <input
          id='nombre2'
          type="text"
          className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5 ${errors.nombre2 && 'border-red-500'}`}
          placeholder='Nombre 2'
          name='nombre2'
          value={formData.nombre2}
          onChange={handleChange}
        />
        {errors.nombre2 && <p className="text-red-500 text-xs italic">{errors.nombre2}</p>}
      </div>
      <div>
        <label htmlFor='nombre3' className='text-gray-700 uppercase font-bold text-sm'>Nombre 3: </label>
        <input
          id='nombre3'
          type="text"
          className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5 ${errors.nombre3 && 'border-red-500'}`}
          placeholder='Nombre 3'
          name='nombre3'
          value={formData.nombre3}
          onChange={handleChange}
        />
        {errors.nombre3 && <p className="text-red-500 text-xs italic">{errors.nombre3}</p>}
      </div>

      <div>
        <label htmlFor='detalles' className='text-gray-700 uppercase font-bold text-sm'>Detalles: </label>
        <textarea
          id='detalles'
          type="text"
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          name='detalles'
          value={formData.detalles}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className='bg-gray-800 w-full p-3 
        text-slate-300 uppercase font-bold rounded-lg 
        hover:bg-gray-600 cursor-pointer transition-all'
        value='Actualizar'
      />

    </form>
  );
};

export default FormularioPerfil;
