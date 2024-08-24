
import React, { useState } from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importe os ícones das mídias sociais

const Footer = () => {
    const [email, setEmail] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setConfirmation('Inscrição confirmada!');
        }, 1000); 
    };


    return (
        <footer className="footer">

            <div className="footer-content">
                <div className="navigation-links">
                    <a href="/contato">Contato</a>
                    {/* Adicione mais links conforme necessário */}
                </div>

                <div className="social-media-icons">
                    <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
                    <a href="https://github.com/CarlosOtrebla/trabalho-final-react.git" target="_blank"><FaGithub /></a>
                    {/* Adicione mais ícones conforme necessário */}
                </div>
                <div className="copyright">
                    <p>© {new Date().getFullYear()} Serra Tech. Todos os direitos reservados.</p>
                </div>
                <div className="subscription-section">
                    <form onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Inscreva-se</button>
                    </form>
                    {confirmation && <p className="subscription-confirmation">{confirmation}</p>}
                </div>

            </div>
        </footer>
    );
};
export default Footer;

