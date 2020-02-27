import React, {componetn, Component} from "react";
import { Button } from "reactstrap";
import "./contador.css"


class Contador extends Component {
    state = {
        numero: 0  
      }
    
      aumentar = () =>  {
        let novoNumero = this.state.numero
    
        novoNumero = novoNumero + 1
    
        this.setState({numero: novoNumero})
    
        // ou também poderia ser feito como o próximo códico
    
        // this.setState({numero:this.state.numero +100})
        
      }
    
      diminuir = () =>  {
        if (this.state.numero > 0) {
        this.setState({numero:this.state.numero -1})
        } else {
          return alert ("Ja chegou em 0")
        }
        
      }
    
      render() {
        return (
        <div>
            <h1 className="contador-titulo">
              {this.state.numero }
            </h1>
            {/* <button type="button" className="contador-aumentar" onClick={this.aumentar} >Aumentar</button>
            <button type="button" className="contador-diminuir" onClick={this.diminuir}>Diminuir</button> */}

            <Button className="mr-2" color="danger" outline onClick={this.diminuir} >Diminuir</Button>
            <Button color="success" outline onClick={this.aumentar} >Aumentar</Button>
        </div>


            
      
        )
        
      }
    
    

}

export default Contador;
// para ultilizar em outros lugares é necessário export 