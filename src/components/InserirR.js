import React, { Component } from 'react';

export default class InserirR extends Component {

    constructor(props) {
        super(props);

        this.onChangeNome = this.onChangeNome.bind(this);


        this.state = {
            nome: '',

        }


    }

    onChangeNome(e) {
        this.setState({ nome: e.target.value });
    }


    onSubmit(e) {
        e.preventDefault();
        const { nome } = this.state;

        fetch('http://localhost/crud-react-php-pgsql/src/api/inserirR.php', {
                method: 'POST',
                headers: {
                    'Accept': 'Application/json',
                    'content-type': 'Application/json'
                },
                body: JSON.stringify({
                    nome: nome,

                })
            }).then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        return (  
            <div className="container">
                <h3>Adicionar Região</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Região:</label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.onChangeNome} />
                    </div>

                    <input type="submit" value="Registrar" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}