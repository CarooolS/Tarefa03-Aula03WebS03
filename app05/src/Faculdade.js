import React from 'react';
import Aluno from './Aluno';

class Faculdade extends React.Component{
    render(){
        return(
            <div>
                <h2>Quem está na faculdade?</h2>
                <Aluno/>
            </div>
        );
    }
}

export default Faculdade;