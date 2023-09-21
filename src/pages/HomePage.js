import React, { useEffect } from 'react';
import ListItem from '../list/ListItem';
import Tools from '../list/Tools';
import SimpleList from '../list/SimpleList';

import { MyContext, MyNewContext } from './mycontexts';
import JustComponent from './JustInfo';


function HomePage(props){

    console.log("HomePage : Render");

    const [ data, setData ] = React.useState([]);
    const [ activeState, setActiveState ] = React.useState('all');
    const [ showLabel, setShowLabel ] = React.useState(true);

    useEffect( () => {

        console.log('HomePage : useEffect');
        fetch('./data.json') 
            .then( (data) => {
                return data.json();
            })
            .then ( (data) => {
                setData(data);
            });
    },[]);

    const handleRefresh = () => {

        fetch('./data2.json') 
            .then( (data) => {
                return data.json();
            })
            .then ( (data) => {
                setData(data);
            });
    }

    const onAction = (evt) => {

        const selected = evt.target.value;
        setActiveState(selected);

    }

    const handleDelete = (obj) => {
        const newData = data.filter ( item =>{
            return obj.id !== item.id
        } );

        setData(newData);
    }

    const labelClick = (obj) => {
            
            let curState = 'all';
            if(obj.isActive){
                curState = 'active';
            }else {
                curState = 'inactive';
            }
            setActiveState(curState);
    
    }

    const addNew = (title, desc, activeState) => {
        const newData = data.push({
            id: data.length+1,
            title: title,
            desc: desc,
            isActive: activeState
        });

        setData(newData);

    }

    const showLabelClicked = (val) => {
        setShowLabel(val);
    }


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
                    <input type='checkbox' checked={showLabel} onClick={ (evt) => {
                            showLabelClicked(evt.target.checked);
                        }
                    } /> Show Label
            </div>

            <MyNewContext.Provider value={100}>

                <MyContext.Provider value={showLabel}>
            
                    <Tools onAddNew={addNew} curState={activeState} onAction={onAction} onRefreshClicked={handleRefresh}>
                        <SimpleList data = {newArray} onAction={handleDelete} onLabelClicked={labelClick} />
                    </Tools>

                    <JustComponent />

                </MyContext.Provider>

            </MyNewContext.Provider>            

        </div>
    )
}


export default HomePage;

