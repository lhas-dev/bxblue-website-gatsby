import React from "react"
import "./contact.scss"

const Contact = props => {
  return (
    <section className="section-contact" id="_contact">
      <h2 className="title">Como podemos ajudar?</h2>
      <p>
        Sabemos que o processo de pegar um empréstimo gera dúvidas, por isso
        estamos aqui para te ajudar. Se precisar, entre em contato.
      </p>
      <p className="links">
        <a className="-email" href="mailto:ola@bxblue.com.br">
          <i className="fas fa-envelope"></i>
          <span>ola@bxblue.com.br</span>
        </a>
        <a
          className="-facebook"
          href="https://www.facebook.com/bxbluebr"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
          <span>Facebook</span>
        </a>
      </p>
      <div className="buttons">
        <a className="bx-button" href="https://bxblue.com.br/aprenda">
          Visite nosso blog
        </a>
        <a
          className="bx-button"
          href="https://bxblue.com.br/produtos/emprestimo-consignado"
        >
          Faça uma simulação
        </a>
      </div>
    </section>
  )
}

export default Contact
