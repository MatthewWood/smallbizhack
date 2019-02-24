import React from 'react';
import bg from '../header-bk.png';
// import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Tree from 'react-tree-graph';

import "react-tree-graph/dist/style.css";
// import styles from "./Diagram.css";

const status = (status) => {

 return	{
	className: status,
	style: style(status),
}}

const style = (status) => {
	return status === "complete" ? {fill: 'green', stroke: 'green', r: '25'} :
	status === "in progres" ? {fill: 'orange', stroke: 'orange', r: '25'} :
	status === "ready" ? {fill: 'blue', stroke: 'blue', r: '25'} :
	status === "blocked" ?  {fill: 'red', stroke: 'red', r: '25'} : {}
}
const parseMaterial = (material) => ({
	_id: material._id + Math.random().toString(),
	name: material.name,
	circleProps: status('complete'),
	textProps: {style: {dx: -80, dy: 50, fontSize: 'x-large', fontWeight: '900'}}
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
		textProps: {dx: -80, dy: 50, style: {dX: -80, dY: 50, fontSize: 'x-large', fontWeight: '900'}},
		circleProps: status(treeData.status),
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
					pathLink: {
						fill:'none',
						stroke:'black',
					}
				}
			}}
			textProps={{
				dx: -80,
				dy: 50
			}}/>
			// </div>
  );
}

export default Diagram;
