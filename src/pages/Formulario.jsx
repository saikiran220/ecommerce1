import React, { Component, useState, useEffect } from 'react'


class Formulario extends Component {

    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this)
        this.state = {
            active: false,
        };
    }

    toggleClass(event) {
        event.preventDefault();
        const { value } = event.target;
        if (value === 'a3') {
            const currentState = this.state.active;
            this.setState({ active: !currentState });
        }
    };
    render(){              
        return(
         <>
            <div className="form-group">
                    <label className="col-md-4 control-label">First select</label>
                    <div className="col-md-4 selectContainer mx-auto">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                            <select name="department" onClick={this.toggleClass} id="department" className="form-control selectpicker">
                                <option>Seleccionar sector</option>
                                <option value="a1">A1</option>
                                <option value="a2">A2</option>
                                <option value="a3">A3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={this.state.active ? ` form-group area` : ` form-group area`}>
                    <label className="col-md-4 control-label">Another Input</label>
                    <div className="col-md-4 selectContainer mx-auto">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                            <input name="organismoagn" placeholder="Área" className="form-control"  type="text" />
                        </div>
                    </div>
               </div>  
            </>
        )
    
    }
}

export default Formulario;