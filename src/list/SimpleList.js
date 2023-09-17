
import ListItem from './ListItem';

function SimpleList(props) {


    const { data, onAction, onLabelClicked} = props;

    

    return (

        <div className="app-list">

                        {

                            data.map( (obj) =>  {
                                return  (
                                
                                    <ListItem 
                                        key={obj.title} 
                                        title={obj.title} 
                                        desc={obj.desc} 
                                        isActive={obj.isActive}
                                        onLabelClicked={ () => {
                                            onLabelClicked(obj);
                                        }}
                                        onDelete={ () => {
                                            onAction(obj);
                                        }} />
                                );
                            })
                        }
                    
                </div>

    );
}


export default SimpleList;