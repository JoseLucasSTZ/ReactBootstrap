import React, { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';

function App() {
  const [destinatario, setDestinatario] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [texto, setTexto] = useState('');
  const [erro, setErro] = useState('');

  const handleVisualizar = (event) => {
    event.preventDefault();
    if (!destinatario || !cargo || !empresa || !texto) {
      setErro('Por favor, preencha todos os campos!');
    } else {
      setErro('');
    }
  };

  const handleImprimir = (event) => {
    event.preventDefault();
    if (!destinatario || !cargo || !empresa || !texto) {
      setErro('Por favor, preencha todos os campos!');
    } else {
      setErro('');
      window.open(`data:text/plain;charset=utf-8,${encodeURIComponent(
        `Prezado(a) ${destinatario},\n\n${texto}\n\nAtenciosamente,\n${cargo} - ${empresa}`
      )}`);
    }
  };

  return (
    <div className="container-fluid">
      <Row>
        <Col md={6}>
          <h3>Formulário de carta de recomendação</h3>
          <Form>
            <Form.Group>
              <Form.Label>Destinatário</Form.Label>
              <Form.Control type="text" value={destinatario} onChange={(e) => setDestinatario(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cargo do destinatário</Form.Label>
              <Form.Control type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Empresa do destinatário</Form.Label>
              <Form.Control type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Texto da carta de recomendação</Form.Label>
              <Form.Control as="textarea" rows={6} value={texto} onChange={(e) => setTexto(e.target.value)} />
            </Form.Group>
            {erro && <p className="text-danger">{erro}</p>}
            <Button variant="primary" type="submit" onClick={handleVisualizar}>Visualizar</Button>
            <Button variant="success" type="submit" onClick={handleImprimir} disabled={!!erro}>Imprimir</Button>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Carta de recomendação</h3>
          <div style={{ whiteSpace: 'pre-line' }}>
            {`Prezado(a) ${destinatario},\n\n${texto}\n\nAtenciosamente,\n${cargo} - ${empresa}`}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
