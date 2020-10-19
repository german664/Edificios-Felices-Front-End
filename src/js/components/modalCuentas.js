import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const ModalCuentas = ({ show, onHide }) => {
    return (<Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Cuentas de prueba para acceder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul className="p-0 ml-3">
                <li><strong>Rol SuperAdministrador:</strong> superAdministrador1</li>
                <li><strong>Rol Administrador:</strong> Administrador1</li>
                <li><strong>Rol Conserje:</strong> Conserje1</li>
                <li><strong>Rol Usuario:</strong> Usuario1</li>
            </ul>
            <p className="mt-4 ml-3">Contraseñas: 1234</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
                Cerrar
          </Button>

        </Modal.Footer>
    </Modal>
    )
}

export default ModalCuentas;