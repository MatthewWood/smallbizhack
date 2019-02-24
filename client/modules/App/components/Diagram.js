import React from 'react';
import bg from '../header-bk.png';
// import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Tree from 'react-tree-graph';

// import styles from"react-tree-graph/dist/style.css";
import "./Diagram.css";

const status = (status) => {

 return	{
	className: 'node ' +  status
}}

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
