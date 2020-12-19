import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export default class ListaDeRegistro extends Component{
    constructor(props){
        super(props);

        this.state = {
            redirect: false
        }

        this.deletar = this.deletar.bind(this);

    }

    deletar(){
        fetch('http://localhost/crud-react-php-pgsql/src/api/deletar.php?id=' + this.props.obj.id)
        .then(
            setTimeout(() => {this.setState({ redirect: true })}, 1000)
        )
        .catch(err => console.log(err))
    }


    render(){
        const { redirect } = this.state;

            if(redirect){
                return <Redirect to='/ver' />;
            }


        return(
            <tr>
                <td>
                    {this.props.obj.nome}
                </td>
                <td>
                    {this.props.obj.municipio}
                </td>
                <td>
                    {this.props.obj.regiao}
                </td>
                <td>
                    <Link to={'/editar/' + this.props.obj.id} className="btn btn-primary">Editar</Link>
                </td>
                <td>
                    <button onClick={this.deletar} className="btn btn-danger">Deletar</button>
                </td>
            </tr>
        )
    }
}