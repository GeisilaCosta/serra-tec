import React, { useState, useEffect, useContext } from "react"; // Import useContext from React
import { Container, TextField, Button, Typography } from "@mui/material";
import "./styles.css";
import axios from "axios";
import ProductList from "../products/ProductList";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Context";

export default function Cadastro() {
  const { setPassword } = useContext(AuthContext);
  const [nome, setNome] = useState("");
  // const [nascimento, setNascimento] = useState('');
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [cadastrado, setCadastrado] = useState(false);
  const [senha, setSenha] = useState("");
  const [confirmasenha, setConfirmaSenha] = useState("");

  const [isEmailTaken, setIsEmailTaken] = useState(false);

  const checkEmail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/clientes/listarClientes`
      );

      if (response.data.length > 0) {
        setIsEmailTaken(true);
      } else {
        setIsEmailTaken(false);
      }
    } catch (error) {
      console.error("Erro ao verificar o e-mail", error);
    }
  };

  useEffect(() => {
    checkEmail();
  }, [email]);

  const handleCadastrar = async () => {
    console.log("Dados do formulário:");
    console.log("Nome:", nome);

    console.log("Telefone:", telefone);
    console.log("Email:", email);
    console.log("CPF:", cpf);
    console.log("CEP:", cep);
    console.log("Senha:", senha);
    console.log("Confirmar Senha:", confirmasenha);

    const usuario = {
      nome,
      telefone,
      email,
      cpf,
    };

    try {
      // Faz uma solicitação POST para a API para criar o usuário
      const response = await axios.post(
        `http://localhost:8080/clientes/cadastrar/${cep}`,
        usuario
      );

      if ([200, 201].includes(response.status)) {
        console.log("Usuário cadastrado com sucesso!");
        setCadastrado(true);
      } else {
        console.log("Erro ao cadastrar usuário:", response);
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }

    setNome("");

    setTelefone("");
    setEmail("");
    setCpf("");
    setCep("");
    setSenha("");
    setConfirmaSenha("");
  };
  const handleConfirmacaoSenhaChange = (event) => {
    setConfirmaSenha(event.target.value);
  };

  const verificarSenhas = () => {
    if (senha !== confirmasenha) {
      alert("As senhas não correspondem!");
    } else {
      alert("As senhas correspondem!");
    }
  };

  return (
    <Container maxWidth="sm" component="article" className="form">
      <h1>Crie Seu Cadastro</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <TextField
          id="nome"
          label="Nome"
          variant="outlined"
          margin="dense"
          fullWidth
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        {/* <ProductList/> */}
        {/* <TextField
          id="nascimento"
          label="Nascimento"
          type="date"
          variant="outlined"
          margin="dense"
          fullWidth
          value={nascimento}
          onChange={(event) => setNascimento(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        /> */}
        <TextField
          id="telefone"
          label="Telefone"
          variant="outlined"
          margin="dense"
          fullWidth
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />

        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="dense"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextField
          id="cpf"
          label="CPF"
          variant="outlined"
          margin="dense"
          fullWidth
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />
        <TextField
          id="cep"
          label="CEP"
          variant="outlined"
          margin="dense"
          fullWidth
          value={cep}
          onChange={(event) => setCep(event.target.value)}
        />

        <TextField
          id="senha"
          label="Senha"
          variant="outlined"
          margin="dense"
          fullWidth
          onChange={(event) => setSenha(event.target.value)}
        />
        <TextField
          id="confirmaSenha"
          label="Confirme sua Senha"
          variant="outlined"
          margin="dense"
          fullWidth
          onChange={handleConfirmacaoSenhaChange}
          onBlur={verificarSenhas}
        />

        <Button
          type="button"
          className="btn-form"
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          onClick={handleCadastrar}
        >
          Cadastrar
        </Button>
      </form>
      {cadastrado && (
        <Typography variant="h6" color="secondary" className="mensagem-sucesso">
          Usuário cadastrado com sucesso!
        </Typography>
      )}
    </Container>
  );
}
