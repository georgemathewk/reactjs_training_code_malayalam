import React from 'react';


class DummyPage extends React.Component {


    componentWillUnmount(){
        const { menu } = this.props;
        
        console.log("Unmounting : " + menu);
    }

    render() {
        const { menu } = this.props;

        return menu;
    }


}

export default DummyPage;