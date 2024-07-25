import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className='c-wrapper'>
            <div className="paddings innerWidth flexCenter c-container">
                {/* Lado izquierdo */}
                <div className='c-left'>
                    <span className='orangeText'>Nuestros Contactos</span>
                    <span className='primaryText'>Fácil de Contactarnos</span>
                    <span className='secondaryText'>Tratamos de mejorar</span>

                    <div className='contactModes'>
                        <div className='row'>
                            <div className='mode'>
                                <div className='flexStart'>
                                    <div className='icon'>
                                        <MdCall size={25}/>
                                    </div>
                                    <div className='detail'>
                                        <span>Llama Ahora</span>
                                        <span>930706954</span>
                                    </div>
                                </div>
                                <div className="button">Llama Ahora</div>
                            </div>
                            
                            <div className='mode'>
                                <div className='flexStart'>
                                    <div className='icon'>
                                        <FaWhatsapp size={25}/>
                                    </div>
                                    <div className='detail'>
                                        <span>WhatsApp</span>
                                        <span>930706954</span>
                                    </div>
                                </div>
                                <div className="button">Envía un WhatsApp</div>
                            </div>

                            <div className='mode'>
                                <div className='flexStart'>
                                    <div className='icon'>
                                        <FaMapMarkerAlt size={25}/>
                                    </div>
                                    <div className='detail'>
                                        <span>Dirección</span>
                                        <span>Calle Falsa 123, Lima</span>
                                    </div>
                                </div>
                            </div>

                            <div className='mode'>
                                <div className='flexStart'>
                                    <div className='icon'>
                                        <FaEnvelope size={25}/>
                                    </div>
                                    <div className='detail'>
                                        <span>Email</span>
                                        <span>contacto@empresa.com</span>
                                    </div>
                                </div>
                                <div className="button">Enviar Email</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lado derecho */}
                <div className='c-right'>
                    <div className='image-container'>
                        <img src="./contact.jpg" alt="Contact Us" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
