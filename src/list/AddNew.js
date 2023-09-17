import React from 'react';
import './AddNew.css';

class AddNew extends React.Component{

    constructor(props){
        super(props);

                

        this.state = {
            titleInput: '',
            descInput: '',
            activeState: 'active'
        }
    }

    handleTitleInput = (evt) => {
        const value = evt.target.value;
        this.setState({
            titleInput: value
        })
    }

    handleDescInput = (evt) => {
        const value = evt.target.value;
        this.setState({
            descInput: value
        })
    }

    handleSelectChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            activeState: value
        });
        console.log(value);
    }


    handleAddNew = () => {

        const {onAddNew } = this.props;
        const title = this.state.titleInput;
        const desc = this.state.descInput;
        const activeState = this.state.activeState === 'active' ? true : false;

        onAddNew(title, desc, activeState);

        this.setState( {
            titleInput: '',
            descInput: '',
            activeState: false
        });
    }


    handleRefresh = () => {
        const { onRefreshClicked } = this.props;
        onRefreshClicked();
    }


    render(){

        return (

                <div className="add-new">
                    <input value={this.state.titleInput} onChange={this.handleTitleInput}/>
                    <input value={this.state.descInput} onChange={this.handleDescInput}/>
                    <select value={this.state.activeState} onChange={this.handleSelectChange}>
                        <option value="active">Active</option>
                        <option value="inactive">InActive</option>
                    </select>
                    <button onClick={this.handleAddNew}>AddNew</button>
                    <button onClick={this.handleRefresh}>Refresh</button>
                </div>
        );
    }
}

export default AddNew;