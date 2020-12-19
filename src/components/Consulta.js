import React, { Component } from 'react';

export default class Consulta extends Component {

    constructor(props) {
        super(props);

        this.onChangePrimeiroNome = this.onChangePrimeiroNome.bind(this);
        this.onChangeUltimoNome = this.onChangeUltimoNome.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            primeiro_nome: '',
            ultimo_nome: '',
            email: ''
        }


    }

    onChangePrimeiroNome(e) {
        this.setState({ primeiro_nome: e.target.value });
    }

    onChangeUltimoNome(e) {
        this.setState({ ultimo_nome: e.target.value });
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const { primeiro_nome } = this.state;
        const { ultimo_nome } = this.state;
        const { email } = this.state;

        fetch('http://localhost/crud-react-php-pgsql/src/api/inserir.php', {
                method: 'POST',
                headers: {
                    'Accept': 'Application/json',
                    'content-type': 'Application/json'
                },
                body: JSON.stringify({
                    primeiroNome: primeiro_nome,
                    ultimoNome: ultimo_nome,
                    email: email
                })
            }).then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        return (  
            <div style={{ martginTop: 10 }}>
                <h3>Consulta</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Primeiro nome:</label>
                        <input type="text" className="form-control"
                            value={this.state.primeiro_nome} onChange={this.onChangePrimeiroNome} />
                    </div>
                    <div className="form-group">
                        <label>Último nome:</label>
                        <input type="text" className="form-control"
                            value={this.state.ultimo_nome} onChange={this.onChangeUltimoNome} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control"
                            value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <input type="submit" value="Registrar" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}