import React, {useContext} from 'react';
import './Label.css';
import { MyContext } from '../pages/HomePage';

// class Label extends React.Component{

//     render() {
//         const props = this.props;
//         const style = props.isActive? { background: 'green' } : { background: 'orange'};
//         const val = useContext(MyContext);

//         if(!val){
//             return;
//         }

//         return <span  onClick={props.onAction}  className="list-label-item" style={style}>{props.isActive?'Active':'InActive'}</span>;
//     }
// }

function Label(props){
    
        const style = props.isActive? { background: 'green' } : { background: 'orange'};
        const val = useContext(MyContext);

        if(!val){
            return;
        }
        return <span  onClick={props.onAction}  className="list-label-item" style={style}>{props.isActive?'Active':'InActive'}</span>;

}

export default Label;