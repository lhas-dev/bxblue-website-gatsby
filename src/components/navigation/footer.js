import React from "react"
import { Link } from "@reach/router"
import logoBlue from "../../images/logo-blue.png"
import "./footer.css"

const Footer = props => {
  return (
    <footer className="bx-footer">
      <div className="bx-navigation">
        <div className="trust-box">
          <Link className="logo" to="/">
            <img src={logoBlue} alt="bxblue" />
          </Link>
          <script>
            TrustLogo("https://d3n0fx8toel08x.cloudfront.net/assets/new_layout/comodo_secure_seal-01011603211e5c3ba7d126360025c838d5a0d29a2938a3f2ca1e670982f8bf03.png",
            "SC5", "none");
          </script>
        </div>
        <nav className="links">
          <a className="link" href="/termos-de-uso">
            Termos de Uso
          </a>
          <a className="link" href="/politica-de-privacidade">
            Política de Privacidade
          </a>
          <a className="link" href="/vagas">
            Trabalhe Conosco
          </a>
          <a className="link" href="mailto:imprensa@bxblue.com.br">
            Imprensa
          </a>
          <a className="link" href="#_contact">
            Contato
          </a>
          <a className="bx-button -small -blue" href="/pedido">
            Simular
          </a>
        </nav>
      </div>
      <div className="disclaimer">
        <p>
          A BX Negócios Inteligentes LTDA não é uma instituição financeira e não
          realiza operações de crédito diretamente. A BX Negócios Inteligentes
          LTDA é uma plataforma digital que atua como correspondente bancário
          para facilitar o processo de contratação de empréstimos. Como
          correspondente bancário, seguimos as diretrizes do Banco Central do
          Brasil, nos termos da Resolução nº. 3.954, de 24 de fevereiro de 2011.
          Toda avaliação de crédito será realizada conforme a política de
          crédito da Instituição Financeira escolhida pelo usuário. Antes da
          contratação de qualquer serviço através de nossos parceiros, você
          receberá todas as condições e informações relativas ao produto a ser
          contrato, de forma completa e transparente. A BX Negócios Inteligentes
          LTDA é correspondente bancário das seguintes instituições: Banco do
          Brasil S.A. (CNPJ 00.000.000/0001-91), Banco Olé Consignado S.A. (CNPJ
          71.371.686/0001-75), Banco do Estado do Rio Grande do Sul S.A. (CNPJ
          92.702.067/0001-96) e Banco Cetelem S.A (CNPJ nº 00.558.456/0001-71).
        </p>
        <p>
          As taxas de juros, margem consignável e prazo de pagamento praticados
          nos empréstimos com consignação em pagamento dos Governos Federais,
          Estaduais e Municipais, Forças armadas e INSS observam as
          determinações de cada convênio, bem como a política de crédito da
          instituição financeira a ser utilizada.
        </p>
        <div className="block">
          <p>BX Negócios Inteligentes Ltda - ME</p>
          <p>CNPJ 22.530.382/0001-06</p>
          <p>
            Endereço: CLN 202 Bloco B Loja 25 Subsolo, Asa Norte, Brasília, DF,
            CEP 70.832-525.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
