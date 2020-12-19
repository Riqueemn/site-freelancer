import React, { Component } from 'react';

export default class InserirFL extends Component {

    constructor(props) {
        super(props);

        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeProfissao = this.onChangeProfissao.bind(this);
        this.onChangeRegiao = this.onChangeRegiao.bind(this);
        this.onChangeMunicipio = this.onChangeMunicipio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nome: '',
            profissao: '',
            municipio: '',
            regiao: '',
            municipios: [], 
            regioes: [],
            profissoes: [],
            idmesorregiao: '',
        }

        this.consultarMunicipios()
        this.consultarProfissoes()

    }

    onChangeNome(e) {
        this.setState({ nome: e.target.value });
    }

    onChangeProfissao(e) {
        this.setState({ profissao: e.target.value });
    }

    onChangeMunicipio(e) {
        this.setState({ municipio: e.target.value });
        
        var m = this.state.municipios
        var municipio = m.filter(function (local) {
            return local.nome === e.target.value
        })
        console.log(municipio[0].id)
        this.setState({ idmesorregiao: municipio[0]["microrregiao"]["mesorregiao"]["id"] });
        this.consultarRegioes(municipio[0].id)

    }

    onChangeRegiao(e) {
        this.setState({ regiao: e.target.value });
    }

  

    consultarMunicipios(){

        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios')
        .then(response => response.json())
        .then(json =>
             {
            this.setState({municipios : json})
        })

        
        
    }

    consultarRegioes(id){

        console.log('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/'+id+'/subdistritos')
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/'+id+'/subdistritos')
        .then(response => response.json())
        .then(json =>
             {
            this.setState({regioes : json})
        })

        
        
    }

    consultarProfissoes(){

        fetch('http://localhost/crud-react-php-pgsql/src/api/searchP.php')
        .then(response => response.json())
        .then(json =>
             {
            this.setState({profissoes : json})
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

    listarProfissoes(){
        return  this.state.profissoes.map(function(object, i){
            return <option value={object.nome} key={i} id={object.id}>{object.nome}</option>
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const { nome } = this.state;
        const { profissao } = this.state;
        const { regiao } = this.state;
        const { municipio } = this.state;
        const { idmesorregiao } = this.state;
        fetch('http://localhost/crud-react-php-pgsql/src/api/inserirFL.php', {
                method: 'POST',
                headers: {
                    'Accept': 'Application/json',
                    'content-type': 'Application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    profissao: profissao,
                    regiao: regiao,
                    municipio: municipio,
                    idmesorregiao: idmesorregiao
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
                <h3>Adicionar Freelancer</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.onChangeNome} />
                    </div>
                    <div className="form-group">
                        <label>Profissao: </label>
                        <select className="form-control form-select" aria-label="Default select example" id={this.state.profissao} onChange={this.onChangeProfissao}>
                            <option value="">Empty</option>
                            { this.listarProfissoes() }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Municipio: </label>
                        <select className="form-control form-select" aria-label="Default select example" id={this.state.municipio} onChange={this.onChangeMunicipio}>
                            <option value="">Empty</option> 
                            { this.listarMunicipios() }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Regiao: </label>
                        <select className="form-control form-select" aria-label="Default select example" id={this.state.regiao} onChange={this.onChangeRegiao}>
                            <option value="">Empty</option>
                            {this.listarRegioes()}
                        </select>
                    </div>
                    
                    <input type="submit" value="Registrar" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}