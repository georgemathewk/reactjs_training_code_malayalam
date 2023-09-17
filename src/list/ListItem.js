
import Label2 from './Label2';
import './ListItem.css';
import SimpleList from './SimpleList';
import React, { useEffect } from 'react';

function ListItem(props) {

	const { title, desc, isActive, onDelete, onLabelClicked } = props;

	useEffect( () => {
		console.log("useEffect Hook is called");
	});

	console.log("ListItem : Render");

	return (

			<div className="list-item">
					<div className="list-title">
						<h4>{title}</h4>
						<label onClick={onDelete}>Delete</label>
					</div>
					<div className="list-desc">
						{desc}
					</div>
					<div className="list-label">
						<Label2 onAction={ onLabelClicked } isActive={isActive} />						
					</div>
				</div>


	);

}

export default ListItem;