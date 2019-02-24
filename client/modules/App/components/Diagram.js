import React from 'react';
import bg from '../header-bk.png';
// import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Tree from 'react-tree-graph';

// import "react-tree-graph/dist/style.css";
import styles from "./Diagram.css";
const stylesIn = (_) => ({
		nodeCircle: {
		 fill :'white',
		 stroke:'black',
	 	},
		pathLink: {
			fill:'none',
			stroke:'black',
		},
		blocked: {
			fill: 'red',
			stroke: 'red',
		},
		ready: {
			fill: 'blue',
			stroke: 'blue',
		},
		inprogress: {
			fill: 'orange',
			stroke: 'orange',
		},
		complete: {
			fill: 'green',
			stroke: 'green',
		}
});
const status = (status) => {

 return	{
	className: 'node ' +  status,
	style: style(status)
}}

const style = (status) => {
	return status === "complete" ? {fill: 'green', stroke: 'green'} :
	status === "in progres" ? {fill: 'orange', stroke: 'orange'} :
	status === "ready" ? {fill: 'blue', stroke: 'blue'} :
	status === "blocked" ?  {fill: 'red', stroke: 'red'} : {}
}
const parseMaterial = (material) => ({
	_id: material._id + Math.random().toString(),
	name: material.name,
	gProps: status('complete')
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
		gProps: status(treeData.status),
		children: treeData.components.map(data).concat( treeData.materials.map(parseMaterial))
	}
};

export function Diagram(props) {
  const { classes, treeData } = props;

  return (
		<Tree
			data={data(treeData)}
			keyProp="_id"
			height={500}
			width={800}
			animated/>
  );
}

export default Diagram;
