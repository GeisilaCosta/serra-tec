import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; 
import './contato.css'; 


const Contato = () => {
    const participantes = [
        {
            nome: 'Geisila Costa',
            email: 'geisilascosta@gmail.com',
            facebook: 'https://www.facebook.com/geisila.silvadacosta/',
            instagram: 'https://www.instagram.com/geisilasilvadacosta',
            linkedin: 'https://www.linkedin.com/in/geisila-silva-da-costa-0089a3177/',
            github: 'https://github.com/GeisilaCosta',
            whatsapp: 'https://wa.me/5524988362454',
        },
        {
            nome: 'Felipe Amorim',
            email: 'felipe.mauriz@aluno.senai.br',
            facebook: 'https://www.facebook.com/LipeeAmoorim',
            instagram: 'https://www.instagram.com/felipe.mauriz?utm_source=qr&igsh=NTRwMHRiYnZiaWR3',
            linkedin: 'https://www.linkedin.com/in/felipe-amorim-1b96aa158/',
            github: 'https://github.com/FelipeMauriz',
            whatsapp: 'https://wa.me/qr/OIZOK2J4JQOPL1',
        },
        {
            nome: 'Patrick Haubrich',
            email: 'patrick.d.lopes6@aluno.senai.br',
            facebook: '',
            instagram: 'https://www.instagram.com/haubrichp?igsh=bmozNzNuZzdtaTBh',
            linkedin: 'https://www.linkedin.com/in/patrick-haubrich-0868b624?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/GeisilaCosta',
            whatsapp: 'https://wa.me/message/AOPC77CT2SJ5O1',
        },
        {
            nome: 'Carlos ',
            email: 'geisilascosta@gmail.com',
            facebook: 'https://facebook.com/participante1',
            instagram: 'https://www.instagram.com/geisilasilvadacosta',
            linkedin: 'https://www.instagram.com/geisilasilvadacosta',
            github: 'https://github.com/GeisilaCosta',
            whatsapp: 'https://wa.me/5524988362454',
        },
        {
            nome: 'Marcela',
            email: 'geisilascosta@gmail.com',
            facebook: 'https://facebook.com/participante1',
            instagram: 'https://www.instagram.com/geisilasilvadacosta',
            linkedin: 'https://www.instagram.com/geisilasilvadacosta',
            github: 'https://github.com/GeisilaCosta',
            whatsapp: 'https://wa.me/5524988362454',
        },
        {
            nome: 'Gustavo',
            email: 'geisilascosta@gmail.com',
            facebook: 'https://facebook.com/participante1',
            instagram: 'https://www.instagram.com/geisilasilvadacosta',
            linkedin: 'https://www.instagram.com/geisilasilvadacosta',
            github: 'https://github.com/GeisilaCosta',
            whatsapp: 'https://wa.me/5524988362454',
        },
    ];

    return (
        <div className="contato-container">
            <h1>Contatos</h1>
            <ul>
                {participantes.map((participante, index) => (
                    <li key={index}>
                        <p>{participante.nome}</p>
                        <div className="social-icons">
                            <a href={`mailto:${participante.email}`}><FaEnvelope /></a>
                            <a href={participante.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href={participante.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href={participante.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href={participante.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href={participante.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contato;
