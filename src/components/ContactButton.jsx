import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

export const ContactButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setSuccessMessage('');
    setErrorMessage('');
  };
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage('');
    setErrorMessage('');

    const formData = {
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      message: e.target.message.value
    };

    try {
      const res = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json(); // Siempre JSON

      if (res.ok && result.success) {
        setSuccessMessage(result.message || 'Mensaje enviado con éxito!');
        e.target.reset();
      } else {
        throw new Error(result.error || 'Error al enviar el mensaje');
      }
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Botón para abrir modal */}
      <button
        className='bg-sky-500 p-3 rounded-full cursor-pointer flex items-center justify-center shadow-lg hover:bg-sky-600 transition'
        title='Enviar mensaje'
        aria-label='Enviar mensaje'
        onClick={handleOpenModal}
      >
        <MdEmail className='text-white' size={24} />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className='fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4'
          onClick={handleCloseModal}
        >
          <div
            className='w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 relative'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              type='button'
              className='absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-800 dark:hover:text-white transition'
              onClick={handleCloseModal}
            >
              <IoMdClose size={28} />
            </button>

            {/* Título */}
            <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-4'>
              Contáctame
            </h2>

            {/* Feedback */}
            {successMessage && (
              <p className='bg-green-100 text-green-800 px-4 py-2 rounded mb-2'>
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className='bg-red-100 text-red-800 px-4 py-2 rounded mb-2'>
                {errorMessage}
              </p>
            )}

            {/* Formulario */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="from_name"
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-gray-700 dark:text-white transition"
                placeholder="Nombre"
                required
              />
              <input
                type="email"
                name="from_email"
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-gray-700 dark:text-white transition"
                placeholder="Dirección de correo"
                required
              />
              <textarea
                name="message"
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-gray-700 dark:text-white transition resize-none h-32"
                placeholder="Tu mensaje"
                required
              />

              <button
                type="submit"
                disabled={isSending}
                className={`bg-sky-500 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-sky-600 transition font-semibold ${
                  isSending ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FaPaperPlane size={18} />
                <span>{isSending ? 'Enviando...' : 'Enviar mensaje'}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
