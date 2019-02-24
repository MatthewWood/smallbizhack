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
	style: {fill: statusColor(status), stroke: statusColor(status)},
}}

const circlePropsByStatus = (status) => {
 return	{
	className: status,
	style: {fill: statusColor(status), stroke: statusColor(status)},
}}
const pathPropsByStatus = (status) => {
	return {
		style: {
				fill:'none',
				stroke: statusColor(status),
				strokeWidth: '15px'
		}
}}
const statusColor = (status) => {
	return status === "complete" ? 'green':
	status === "in progress" ? 'orange' :
	status === "ready" ? 'blue' :
	status === "blocked" ?  'red' : 'black';
}
const parseMaterial = (material) => ({
	_id: material._id + Math.random().toString(),
	name: material.name,
	circleProps: circlePropsByStatus('complete'),
	textProps: defaultTextProps(),
	pathProps: pathPropsByStatus('complete')
})

const name = (id) => {
	return id === "1" ? "Roof" :
	id === "2" ? "Back and sides" :
	id === "3" ? "Door" :
	id === "4" ? "Walls" :
	id === "5" ? "Dog house" : "Random Piece"
}

const defaultTextProps = () => {
	return {style: {fontSize: 'x-large', fontWeight: '900', textTransform: 'capitalize',
	 transform: 'rotate(180deg)'

	}}
}

const data = (treeData) => {
	if (treeData.components === undefined) {
		treeData.components = []
	}
	if (treeData.materials === undefined) {
		treeData.materials = []
	}
	console.dir(treeData);
	return {
		_id: treeData.myId,
    name: name(treeData.myId),
		// gProps: status(treeData.status),
		textProps: defaultTextProps(),
		circleProps: circlePropsByStatus(treeData.status),
		pathProps: pathPropsByStatus(treeData.status),
		children:
		treeData.components.map(data).concat( treeData.materials.map(parseMaterial))
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
			width={900}
			pathProps={{
				className: 'link',
				style: {
						fill:'none',
						stroke:'black',
				}
			}}
			margins={{ bottom : 10, left : 140, right : 50, top : 10}}
			textProps={{
				textTransform: 'capitalize',
				fontSize: 'x-large',
				fontWeight: '900'
			}}
			nodeOffset={10}
			nodeRadius={20}
			svgProps={{ style: { paddingLeft:'100px', transform: 'rotate(180deg)', overflow: 'visible'}}}
			/>
			// </div>
  );
}

export default Diagram;
