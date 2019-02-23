import React from 'react';
import bg from '../header-bk.png';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Tree from 'react-tree-graph';

const styles = () => ({
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
// .red-node {
// 	fill: red;
// 	stroke: red;
// }
//
// let data = {
//     name: 'Parent',
//     children: [{
//         name: 'Child One'
//     }, {
//         name: 'Child Two',
// 				gProps: {
// 					className: {styles().}
// 				}
//     }]
// };

let data2 = (classes) => ({
    name: 'Dog House',
    children: [{
        name: 'Roof'
    }, {
        name: 'Wall',
        // gProps: { className: classes.ready }
    }, {
        name: 'Wall',
        // gProps: { className: classes.ready }
    }, {
        name: 'Wall',
        // gProps: { className: classes.ready }
				children: [{
					name: 'Wood',
					gProps: {
						className: 'ready node'
					}
				},{
					name: 'Wood',
					gProps: {
						className: 'blocked node'
					}
				}]
    }]
});
//
// gProps: {
// 			className: {classes.blocked}
//
// 		}
// <Tree
// 	data={data}
// 	height={200}
// 	width={400}/>

export function Diagram(props) {
  const { classes, treeData } = props;

  return (
		<Tree
			data={data2(treeData)}
			height={500}
			width={800}
			animated/>
  );
}

// Footer.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Diagram);
