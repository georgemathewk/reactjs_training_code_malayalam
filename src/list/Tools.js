import React from 'react';
import './Tools.css';
import AddNew from './AddNew';

class Tools extends React.Component{
    render(){
        const { children, onAction, curState, onAddNew, onRefreshClicked } = this.props;
        const onlyChild = React.Children.only(children)
        const cnt = React.Children.count(onlyChild.props.children);
        
        console.log("Tools : Render");

        return (
        
            <div className="list-tools">
                <div className="list-header">

                    <select value={curState} onChange={onAction}>
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">InActive</option>
                    </select>
                
                </div>

                <AddNew onAddNew={onAddNew} onRefreshClicked={onRefreshClicked} />

                {children}

                <div className="list-footer">
                            Item Count : { cnt }
                </div>
            
            </div>

        );
                    
        
    }
}

export default Tools;