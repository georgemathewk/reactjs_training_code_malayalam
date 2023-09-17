import React from 'react';
import './Label.css';
import { MyContext, MyNewContext } from '../pages/mycontexts';

class Label2 extends React.Component{

    render() {
        const props = this.props;
        const style = props.isActive? { background: 'green' } : { background: 'orange'};
        console.log("Label2 : Render");
        return (

            <MyContext.Consumer>{
                (val) => {
                    if (!val) return;
                    return (
                        
                        <span  onClick={props.onAction}  className="list-label-item" style={style}>
                            {props.isActive?'Active':'InActive'}
                        </span>
                    )
                }
            }
            
            </MyContext.Consumer>            

        )
    }
}

Label2.contextType = MyNewContext;

export default Label2;