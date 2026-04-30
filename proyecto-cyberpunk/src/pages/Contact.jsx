import { useState, useRef } from "react";
import { showToast } from "../utils/toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const modalRef = useRef(null);

  // Validación en tiempo real
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "El nombre es requerido";
        if (value.length < 3) return "El nombre debe tener al menos 3 caracteres";
        return "";
      case "email":
        if (!value.trim()) return "El email es requerido";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Email inválido";
        return "";
      case "message":
        if (!value.trim()) return "El mensaje es requerido";
        if (value.length < 10) return "El mensaje debe tener al menos 10 caracteres";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validar en tiempo real si el campo ya fue tocado
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const isFormValid = () => {
    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);
    
    return !nameError && !emailError && !messageError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Marcar todos los campos como tocados
    setTouched({ name: true, email: true, message: true });
    
    // Validar todos los campos
    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);
    
    setErrors({
      name: nameError,
      email: emailError,
      message: messageError
    });
    
    if (!nameError && !emailError && !messageError) {
      // Dark pattern: modal innecesario antes de enviar
      modalRef.current?.showModal();
    }
  };

  // Dark pattern intencional: Este modal aparece aunque no sea necesario, 
  // confundiendo al usuario y haciéndole dudar si quiere enviar el mensaje.
  // En una aplicación ética, el formulario se enviaría directamente sin este paso adicional.
  const confirmSend = () => {
    modalRef.current?.close();
    showToast(`✅ Mensaje enviado, ${formData.name}! Te responderemos pronto.`, "success");
    setFormData({ name: "", email: "", message: "" });
    setTouched({});
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-cyber-neon mb-2">📡 Contacto</h1>
      <p className="text-cyber-pink mb-6">¿Listo para entrar al cyberespacio? Escríbenos</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo Nombre */}
        <div>
          <label htmlFor="name" className="block text-cyber-neon mb-2 font-bold">
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-3 bg-cyber-gray border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-neon ${
              errors.name && touched.name ? "border-red-500" : "border-cyber-neon"
            }`}
            aria-label="Nombre completo"
            aria-required="true"
            aria-invalid={!!errors.name && touched.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && touched.name && (
            <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
              ⚠️ {errors.name}
            </p>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <label htmlFor="email" className="block text-cyber-neon mb-2 font-bold">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-3 bg-cyber-gray border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-neon ${
              errors.email && touched.email ? "border-red-500" : "border-cyber-neon"
            }`}
            aria-label="Correo electrónico"
            aria-required="true"
            aria-invalid={!!errors.email && touched.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && touched.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
              ⚠️ {errors.email}
            </p>
          )}
        </div>

        {/* Campo Mensaje */}
        <div>
          <label htmlFor="message" className="block text-cyber-neon mb-2 font-bold">
            Mensaje *
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-3 bg-cyber-gray border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-neon ${
              errors.message && touched.message ? "border-red-500" : "border-cyber-neon"
            }`}
            aria-label="Mensaje"
            aria-required="true"
            aria-invalid={!!errors.message && touched.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && touched.message && (
            <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
              ⚠️ {errors.message}
            </p>
          )}
        </div>

        {/* Botón submit con disabled si el formulario no es válido */}
        <button
          type="submit"
          disabled={!isFormValid()}
          className={`w-full py-3 rounded-lg font-bold transition ${
            isFormValid()
              ? "bg-cyber-neon text-black hover:bg-cyber-pink cursor-pointer"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
          aria-label="Enviar mensaje"
        >
          {isFormValid() ? "Enviar mensaje" : "🔒 Completa todos los campos"}
        </button>
      </form>

      {/* 🔴 DARK PATTERN INTENCIONAL - Modal de confirmación innecesario */}
      {/* 
        c*/}
      <dialog 
        ref={modalRef} 
        className="bg-gradient-to-r from-red-900 to-black border-4 border-red-600 rounded-lg p-8 backdrop:bg-black/80"
      >
        <div className="text-center">
          <p className="text-4xl mb-4">⚠️⚠️⚠️</p>
          <p className="text-red-500 font-bold text-xl mb-4">
            ¿ESTÁS SEGURO DE ENVIAR ESTE MENSAJE?
          </p>
          <p className="text-gray-400 text-sm mb-6">
            (No podras editarlo una vez lo envies)
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => modalRef.current?.close()}
              className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 font-bold"
              aria-label="Cancelar envío"
            >
              No, mejor no
            </button>
            <button
              onClick={confirmSend}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-500 font-bold animate-pulse"
              aria-label="Confirmar envío"
            >
               Sí, enviar de todas formas
            </button>
          </div>
          <p className="text-red-400 text-xs mt-4">
            🔴 Dark Pattern intencional para cumplir con requisito del proyecto
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default Contact;