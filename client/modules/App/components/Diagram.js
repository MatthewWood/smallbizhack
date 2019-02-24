import React from 'react';
import bg from '../header-bk.png';
// import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Tree from 'react-tree-graph';

// import "react-tree-graph/dist/style.css";
// import styles from "./Diagram.css";

const status = (status) => {

 return	{
	className: status,
	style: style(status),
}}
const statusColor = (status) => {
	return status === "complete" ? 'green':
	status === "in progres" ? 'orange' :
	status === "ready" ? 'blue' :
	status === "blocked" ?  'red' : 'black';
}
const style = (status) => {
	return status === "complete" ? {fill: 'green', stroke: 'green'} :
	status === "in progres" ? {fill: 'orange', stroke: 'orange'} :
	status === "ready" ? {fill: 'blue', stroke: 'blue'} :
	status === "blocked" ?  {fill: 'red', stroke: 'red'} : {}
}
const parseMaterial = (material) => ({
	_id: material._id + Math.random().toString(),
	name: material.name,
	circleProps: status('complete'),
	textProps: {style: {fontSize: 'x-large', fontWeight: '900', textTransform: 'capitalize'
	}},
	pathProps: {
		style: {
				fill:'none',
				stroke: statusColor('complete'),
				strokeWidth: '15px'
		}
	}
})

const name = (id) => {
	return id === "1" ? "Roof" :
	id === "2" ? "Back and sides" :
	id === "3" ? "Door" :
	id === "4" ? "Walls" :
	id === "5" ? "Dog house bitches!" : "Random Piece"
}


const data = (treeData) => {
	return {
		_id: treeData.myId,
    name: name(treeData.myId),
		// gProps: status(treeData.status),
		textProps: {dx: -80, dy: 50, style: {textTransform: 'capitalize',
		fontSize: 'x-large',
		fontWeight: '900' }},
		circleProps: status(treeData.status),
		pathProps: {
			style: {
					fill:'none',
					stroke: statusColor(treeData.status),
					strokeWidth: '15px'
			}
		},
		children: treeData.components.map(data).concat( treeData.materials.map(parseMaterial))
	}
};

export function Diagram(props) {
  const { classes, treeData } = props;

  return (
		// <div className={styles.link, styles.node}>
		<Tree
			data={data(treeData)}
			keyProp="_id"
			height={500}
			width={800}
			animated
			pathProps={{
				className: 'link',
				style: {
						fill:'none',
						stroke:'black',
				}
			}}
			margins={{ bottom : 10, left : 20, right : 180, top : 10}}
			textProps={{
				textTransform: 'capitalize',
				fontSize: 'x-large',
				fontWeight: '900'
			}}
			nodeOffset={10}
			nodeRadius={20}
			/>
			// </div>
  );
}

export default Diagram;
