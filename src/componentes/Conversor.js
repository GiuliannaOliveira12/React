import React, { Component } from 'react';

// minha classe conversor esta herdando elementos de componente 
export default class Conversor extends Component {
 
    constructor(props){
        super(props);

        this.state={
            moedaA_valor:"",
            moedaB_valor:0,
        }
        this.converter =this.converter.bind(this)

    }
 
     converter(){

        // converter moeda A para moeda B 

       let de_para= `${this.props.moedaA}_${this.props.moedaB}`;
       let url=`http://free.currconv.com/api/v7/convert?q=${de_para}&compact=y=ultra&apiKey=64c38d604adda37100bc`
       

       fetch(url)
       .then(res=>{

        return res.json

       })
       // usar a url para atribuir valor a variavel "de para"

       .then(json=>{
           let cotacao = json[de_para].val;
           let moedaB_valor=(parseFloat(this.state.moedaA_valor)* cotacao).toFixed(2)
            this.setState({moedaB_valor})
       })
     }
 
    render() {
    return (
        <div classeName="conversor">
            
            <p>esse é nosso conversor</p>
    <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
         

            <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
            <input type="button"value="Converter" onClick={this.converter}></input>
            
    <h2>{this.state.moedaB_valor}</h2>
        
        
        </div>
    )
  }
}
