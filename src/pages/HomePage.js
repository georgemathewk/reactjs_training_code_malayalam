import React from 'react';
import ListItem from '../list/ListItem';
import Tools from '../list/Tools';
import SimpleList from '../list/SimpleList';

import { MyContext, MyNewContext } from './mycontexts';


class HomePage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            data: [],
            activeState: 'all',
            showLabel: true

        }

    }

    componentDidMount() {
        fetch('./data.json') 
            .then( (data) => {
                return data.json();
            })
            .then ( (data) => {
                this.setState( {
                    data: data
                });
            });

    }

    handleRefresh = () => {

        console.log("handleRefresh");

        
        fetch('./data2.json') 
            .then( (data) => {
                return data.json();
            })
            .then ( (data) => {
                this.setState( {
                    data: data
                });
            });
        

    }

    

    componentDidUpdate(prevProps, prevState){
        
        if(prevState.message !== this.state.message){
            this.setState({
                message:'message'
            });
        }
    }

    componentWillUnmount() {
        console.log("HomePage : Unmount");
    }

    onAction = (evt) => {

        const selected = evt.target.value;
        this.setState({ activeState: selected});


    }

    handleDelete = (obj) => {
        const newData = this.state.data.filter ( item =>{
            return obj.id !== item.id
        } );

        this.setState( {
            data: newData
        });
    }

    labelClick = (obj) => {

        let curState = 'all';
        if(obj.isActive){
            curState = 'active';
        }else {
            curState = 'inactive';
        }
        this.setState( {
            activeState : curState
        })

    }

    addNew = (title, desc, activeState) => {
        const data = this.state.data;
        const newData = data.push({
            id: this.state.data.length+1,
            title: title,
            desc: desc,
            isActive: activeState
        });

        this.setState({
             data: data
        });

        console.log(data);
    }

    showLabelClicked = (val) => {
        this.setState({showLabel: val});
    }


    render(){

        const { data, activeState } = this.state;



        const newArray = data.filter( value => {

            if(activeState === "all"){
                return true;
            }

            if(activeState === "active"){
                if(value.isActive == true){
                    return true;
                }
            }

            if(activeState === "inactive"){
                if(value.isActive == false){
                    return true;
                }
            }

            return false;

        });



        
        return ( 


            <div>

                <div>
                    <input type='checkbox' checked={this.state.showLabel} onClick={ (evt) => {
                            this.showLabelClicked(evt.target.checked);
                        }
                    } /> Show Label
                </div>

                <MyNewContext.Provider value={100}>

                    <MyContext.Provider value={this.state.showLabel}>
                
                        <Tools onAddNew={this.addNew} curState={activeState} onAction={this.onAction} onRefreshClicked={this.handleRefresh}>
                            <SimpleList data = {newArray} onAction={this.handleDelete} onLabelClicked={this.labelClick} />
                        </Tools>

                    </MyContext.Provider>

                </MyNewContext.Provider>

                

            </div>


        );
    }
}


export default HomePage;

