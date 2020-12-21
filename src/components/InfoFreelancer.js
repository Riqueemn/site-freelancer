import React, { Component } from 'react';



export default class InfoFreelancer extends Component{
    constructor(props){
        super(props)


    }

    render(){
        return (
            <div className="container-fluid perfil">
                <div className="infoPerfil infoDados">
                <div className="card cardDados">
                        <div className="img-avatar-perfil"></div>
                        <div className="card-body">
                            <h5 className="card-title">Henrique Moreira</h5>
                            <p className="card-text">Programador TI</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Rio de Janeiro - Campo Grande</li>
                        </ul>
                        <div className="card-body">
                            <h4>Contatos:</h4>
                            <img height="30px" src="https://img2.gratispng.com/20180425/doq/kisspng-email-address-electronic-mailing-list-logo-interne-corrugated-tape-5ae0f197d8e2a3.6291700715246913518884.jpg" />
                            <h7> henriquemoreira842@gmail.com</h7><br/>
                            <img height="30px" src="https://images.vexels.com/media/users/3/140965/isolated/preview/a945eef28564ae85fff5ac18adf637d9-iacute-cone-redondo-do-telefone-by-vexels.png" />
                            <h7> (85)987750237</h7>
                        </div>
                        
                    </div>
                </div>
                <div className="infoPerfil infoProjetos">
                    <div className="container">
                    <div className="card">
                        <div class="card-header">
                            Detalhes
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                            <p>Desenvolvedor de Sites e Sistemas</p>
                            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 