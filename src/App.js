import React, { useState } from "react";
import Modal from "react-modal";
import "./styles.css";

// Componente de modal para validar sesión
const SessionModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica de validación de la sesión
    // utilizando los datos de username y password

    // Ejemplo básico de validación
    if (username === "admin" && password === "password") {
      console.log("Sesión válida");
      // Aquí puedes realizar las acciones necesarias cuando la sesión es válida,
      // como establecer una variable de estado para indicar que el usuario está autenticado
      // y cerrar el modal.
      onClose();
    } else {
      console.log("Credenciales inválidas");
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2 className="tituloModal">Validar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label className="usuario">
          Usuario:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label className="contraseña">
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button className="botonInicioSesionModal" type="submit">
          Iniciar sesión
        </button>
      </form>
    </Modal>
  );
};

// Uso del componente SessionModal
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="titulo">Modal para validacion inicio de sesión</h1>
      <button className="buttonInicioSesion" onClick={openModal}>
        Iniciar sesión
      </button>
      <SessionModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
