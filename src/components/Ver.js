import React, { Component } from 'react';
import ListaDeRegistro from './ListaDeRegistro';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Ver extends Component{
    constructor(props){
        super(props)

        this.state = {profissionais: [], profissao: '', municipio: '', municipios: [], regioes: [], regiao: '', profissoes: [], disabledR: true, idmesorregiao: ''}

        this.onChangeProfissao = this.onChangeProfissao.bind(this)
        this.onChangeMunicipio = this.onChangeMunicipio.bind(this)
        this.onChangeRegiao = this.onChangeRegiao.bind(this)

        this.consultarProfissionais()
        this.consultarMunicipios()
        this.consultarProfissoes()
    }


    onChangeProfissao(e){
        this.setState({
            profissao: e.target.value,
        });

        setTimeout(() => {
            this.consultarProfissionais();
        }, 50);
    }

    onChangeMunicipio(e){
        this.setState({
            municipio: e.target.value,
        });

        var m = this.state.municipios
        var municipio = m.filter(function (local) {
            return local.nome === e.target.value
          })
          this.state.idmesorregiao = municipio[0]["microrregiao"]["mesorregiao"]["id"]
        this.setState({
            idmesorregiao: municipio[0]["microrregiao"]["mesorregiao"]["id"],
        });

        console.log(this.state.idmesorregiao);

        this.setState({regioes: []})
        
        setTimeout(() => {
            this.consultarProfissionais();
        }, 50);
        
        
        if (municipio.length !== 0) {
            this.consultarRegioes(municipio[0].id)
        }

        

        console.log(this.state.profissionais.length)
        if (this.state.profissionais.length === 0){
              this.setState({
                idmesorregiao: municipio[0]["microrregiao"]["mesorregiao"]["id"],
            });
        } 
        
    }

    onChangeRegiao(e){
        this.setState({
            regiao: e.target.value,
        });


        setTimeout(() => {
            this.consultarProfissionais();
        }, 50);

        var a = this.state.municipio
        var m = this.state.municipios
        var municipio = m.filter(function (local) {
            return local.nome === a
          })

        if (this.state.profissionais.length === 0){
            var l = m.filter(function (local) {
                return local["microrregiao"]["mesorregiao"]["id"] === municipio[0]["microrregiao"]["mesorregiao"]["id"]
              })
            console.log(l)
        }

    }


    consultarProfissoes(){

        fetch('http://localhost/crud-react-php-pgsql/src/api/searchP.php')
        .then(response => response.json())
        .then(json =>
             {
            this.setState({profissoes : json})
        })
    }

    consultarProfissionais(){

        const {profissao} = this.state;
        const {municipio} = this.state;
        const {regiao} = this.state;
        const {idmesorregiao} = this.state;

        fetch('http://localhost/crud-react-php-pgsql/src/api/search.php', {
            method: 'POST',
            headers: {
                'Accept': 'Application/json',
                'content-type': 'Application/json'
            },
            body: JSON.stringify({
                profissao: profissao,
                municipio: municipio,
                regiao: regiao,
                idmesorregiao: idmesorregiao
        })
        })
        .then(response => response.json())
        .then(json =>
        { 
            this.setState({profissionais: json});
})
        .catch(error => {
            console.log(error);
        })
        
    }

    consultarMunicipios(){

        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios')
        .then(response => response.json())
        .then(json =>
             {
            this.setState({municipios : json})
            console.log(json)
        })
    }

    consultarRegioes(id){

        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/'+id+'/subdistritos')
        .then(response => response.json())
        .then(json =>
             {
            this.setState({regioes : json})

            if (json.length === 0) {
                this.setState({
                    disabledR: true,
                });
            } else {
                this.setState({
                    disabledR: false,
                });
            }
        })

        
        
    }

    listarRegioes(){
        return  this.state.regioes.map(function(object, i){
            return <option value={object.nome} key={i} id={object.id}>{object.nome}</option>
        })
    }

    listarMunicipios(){
        return  this.state.municipios.map(function(object, i){
            return <option value={object.nome} key={i} id={object.id}>{object.nome}</option>
        })
    }

    listarProfissionais(){
        return this.state.profissionais.map(function(object, i){
            return <ListaDeRegistro obj={object} key={i} />;
        });
    }

    listarProfissoes(){
        return  this.state.profissoes.map(function(object, i){
            return <option value={object.nome} key={i} id={object.id}>{object.nome}</option>
        })
    }

    render(){
        return (
            <div className="container">
                <div className="filtro">
                <h3 align="center">Consultar Freelancers</h3>
                <form>
                    <div className="container">
                    <div class="row">
                    <div class="col-sm">
                    <div className="form-group selectSearch">
                        <label>Profissao: </label>
                        <select className="form-control form-select form-select " aria-label="Default select example" onChange={this.onChangeProfissao}>
                            <option value="">Empty</option>
                            {this.listarProfissoes()}
                        </select>
                    </div>
                    </div>
                    <div class="col-sm">
                    <div className="form-group selectSearch">
                        <label>Municipio: </label>
                        <select className="form-control form-select-sm" aria-label="Default select example" onChange={this.onChangeMunicipio}>
                            <option value="">Empty</option>
                            { this.listarMunicipios() }
                        </select>
                    </div>
                    </div>
                    <div class="col-sm">
                    <div className="form-group selectSearch">
                        <label>Regiao: </label>
                        <select className="form-control form-select" aria-label="Default select example" disabled={this.state.disabledR}  onChange={this.onChangeRegiao}>
                            <option value="">Empty</option>
                            {this.listarRegioes()}
                        </select>
                    </div>
                    </div>
                    </div>
                    </div>
                </form>
                </div>
                <div className="container containerResult">
                <div className="filtroFreelancerResult">
                <div class="row">

                <div class="col-sm">

                    <div className="card listaFreelancer">
                        <div className="img-avatar">
                        </div>
                        <div className="card-body">
                            <p className="card-title titleFreelancer">Henrique Moreira</p>
                            <p className="card-text profissaoFreelancer">Programador TI</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item font-local">Rio de Janeiro - Campo Grande</li>
                        </ul>
                        <div className="card-body">
                            <Link path="/infoFreelancer" to={'/infoFreelancer'} className="btn btn-info">Ver Mais</Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm">

                    <div className="card listaFreelancer">
                        <div className="img-avatar">
                        </div>
                        <div className="card-body">
                            <h6 className="card-title titleFreelancer">Carlos Henrique</h6>
                            <p className="card-text profissaoFreelancer">Design</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item font-local">Seropédica</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="btn btn-info">Ver Mais</a>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
                
            </div>
        )
    }
}

/*

<table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Municipio</th>
                            <th colSpan="2">Regiao</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.listarProfissionais() }
                    </tbody>
                </table>

                */