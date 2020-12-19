import React, { Component } from 'react';

export default class InserirP extends Component {

    constructor(props) {
        super(props);

        this.onChangeProfissao = this.onChangeProfissao.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profissao: ''
        }


    }

    onChangeProfissao(e) {
        this.setState({ profissao: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const { profissao } = this.state;
        console.log(profissao)
        fetch('http://localhost/crud-react-php-pgsql/src/api/inserirP.php', {
                method: 'POST',
                headers: {
                    'Accept': 'Application/json',
                    'content-type': 'Application/json'
                },
                body: JSON.stringify({
                    profissao: profissao,
 
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
                <h3>Adicionar Profissao</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Profissao:</label>
                        <input type="text" className="form-control"
                            value={this.state.profissao} onChange={this.onChangeProfissao} />
                    </div>
                    
                   
                    
                    <input type="submit" value="Registrar" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}