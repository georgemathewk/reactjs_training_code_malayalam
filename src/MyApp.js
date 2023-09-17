import React from "react";
import Header from "./list/Header";
import HomePage from "./pages/HomePage";
import Footer from "./list/Footer";
import DummyPage from "./pages/DummyPage";
import UsagePage from "./pages/UsagePage";


class MyApp extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            selectedMenu:'home'
        }
    }

    getPage = (selected) => {

        let page = 'home';

        switch(selected){

            case 'home':
                page = <HomePage />;
                break;
            
            case 'usage':
                page = <UsagePage key="usage" />;
                break;

            case 'settings':
                page = <DummyPage key="settings" menu="settings" />;
                break;

            case 'logout':
                page = <DummyPage key="logout" menu="logout" />;
                break;

        }
        
        return page;
        
    }

    clickHandler = (selected) => {        
        this.setState({
            selectedMenu: selected
        })
    }

    render(){

        return (
            <div className="app">
            
                <Header clickHandler={this.clickHandler}/>
                <div className="app-body">
                    { this.getPage(this.state.selectedMenu) }
                </div>
                <Footer />
            
            </div>    
        );
    }

}


export default MyApp;