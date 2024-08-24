
import React from "react";
import "./sobre.css";
import logoSerraTech from "/src/assets/img/logo.jpeg";

import { NavBar } from "../../components/layout/NavBar";

const descricaoGrupo = {
  nome: "Serra Tech: Inovação e Tecnologia em Harmonia",
  paragrafos: [
    "Somos um grupo diversificado de seis entusiastas da tecnologia, unidos pela paixão por inovação e pelo desejo de transformar o mercado de e-commerce de produtos de informática.",
    "Nossa equipe é composta por Marcela, a visionária criativa; Carlos, o estrategista analítico; Patrick, o desenvolvedor ágil; Geisila, a especialista em experiência do usuário; Felipe, o arquiteto de soluções; e Gustavo, o otimizador incansável.",
    "Juntos, na residência em TIC e software do Serratec, estamos desenvolvendo um projeto em React que não é apenas um e-commerce, mas uma experiência de compra revolucionária.",
    "Cada membro traz uma habilidade única para a mesa, garantindo que cada aspecto do nosso projeto seja meticulosamente planejado e executado com excelência.",
    "Acreditamos que a tecnologia deve ser acessível, intuitiva e avançada, e é isso que nos esforçamos para refletir em nosso trabalho. “Serra Tech” não é apenas um nome; é uma promessa de qualidade, inovação e confiança.",
  ],
};
const team = [

    { name: 'Geisila', bio: 'Tenho 41 anos, mãe de 3 filhos; me considero muito resiliente, dedicada, pontual, organizada e alegre e procuro sempre ver o lado positivo da vida! ', photo: '/src/assets/img/ge.png' },
    { name: 'Carlos', bio: 'Sou um homem casado com uma esposa maravilhosa, Mariana,  pai de dois meninos, João e Sebastião que são a razão da minha constante luta para alcançar meus objetivos. Tenho 47 anos, e sou apaixonado por música Sertaneja, “de 2000 pra trás”, salvo algumas exceções atuais, bem poucas. kkkk. Sou extrovertido, brincalhão e adoro fazer novas amizades.', photo: '/src/assets/img/Carlos.webp' },
    { name: 'Patrick', bio: 'Profissional da área de hotelaria, com 32 anos e 14 anos de expertise em atendimento ao cliente, sempre animado e pronto a encarar novos desafios!', photo: '/src/assets/img/Patrick.webp' },
    { name: 'Felipe', bio: 'Tenho 31 anos e sou Pai de 2 Meninos, Sou feliz, dedicado E um dia muitos saberão quem sou eu.', photo: '/src/assets/img/Felipe.jpg' },
    { name: 'Gustavo', bio: '', photo: '/src/assets/img/gustavo.jpg' },
    { name: 'Marcela', bio: 'Tenho 55 anos, mãe de três filhos. Sou corredora amadora, extrovertida, dedicada e agregadora. Amo desafios.', photo: '/src/assets/img/marcela.jpg' },
];

export function Sobre() {
    return (
        <>
        <div className="sobre">
                <div className="descricao">
                    <h1>{descricaoGrupo.nome}</h1>
                    {descricaoGrupo.paragrafos.map((paragrafo, index) => (
                        <p key={index}>{paragrafo}</p>
                    ))}
                </div>
            </div>
            <div className="team">
                {team.map(member => (
                    <div key={member.name} className="member">
                        <img src={member.photo} alt={member.name} />
                        <h2>{member.name}</h2>
                        <p>{member.bio}</p>
                    </div>
                ))}
                <contato-container />
        </div>
        </>
    );

}
