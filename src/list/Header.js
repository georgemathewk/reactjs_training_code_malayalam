import './Header.css';


function Header(props){



	const { clickHandler } = props;


    return (
        <div className="app-header">
			
			<span className="header-title">Code Malayalam</span>

			<span onClick={ () => {
				clickHandler('home') 
			} }>Home</span>

			<span onClick={ () => {
				clickHandler('usage') 
			}}>Usage</span>

			<span onClick={ () => {
				clickHandler('settings') 
			}} > Settings</span>

			<span onClick={ () => {
				clickHandler('logout') 
			}}>Logout</span>

		</div>
    );
}


export default Header;