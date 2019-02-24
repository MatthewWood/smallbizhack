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
// {"components":{
// "_id":"5c717963814d3324394b91a5",
// "status":"blocked",
// "isProduct":true,
// "__v":0,
// "materials":[],
// "components":[]}}
let status = (status) => {
	console.log(status);

 return	{
	className: 'node ' +  status
}}

let parseMaterial = (material) => ({
	name: material.name,
	gProps: status('complete')
})

let name = (id) => {
	return id === "1" ? "Roof" :
	id === "2" ? "Walls" :
	id === "3" ? "Door" :
	id === "4" ? "House Component" :
	id === "5" ? "Roof" : "Random Piece"
}


let data = (treeData) => {
	console.dir(treeData);
	return {
    name: name(treeData.myId),
		gProps: status(treeData.status),
		children: treeData.components.map(data).concat( treeData.materials.map(parseMaterial))
	}
};
//
// gProps: {
// 			className: {classes.blocked}
//
// 		}
// <Tree
// 	data={data}
// 	height={200}
// 	width={400}/>
let myFakeData = {
  "components":{
    "_id":"5c71c414522862eb41807410",
    "myId":"5",
    "status":"blocked",
    "isProduct":true,
    "__v":0,
    "materials":[
      {
        "_id":"5c71c414522862eb41807407",
        "name":"wooden floor",
        "__v":0
      }
    ],
    "components":[
      {
        "_id":"5c71c414522862eb4180740f",
        "myId":"4",
        "status":"blocked",
        "isProduct":false,
        "__v":0,
        "materials":[

        ],
        "components":[
          {
            "_id":"5c71c414522862eb4180740e",
            "myId":"3",
            "status":"ready",
            "isProduct":false,
            "__v":0,
            "materials":[
              {
                "_id":"5c71c414522862eb41807409",
                "name":"wooden front",
                "__v":0
              },
              {
                "_id":"5c71c414522862eb4180740a",
                "name":"entry cutout",
                "__v":0
              }
            ],
            "components":[

            ]
          },
          {
            "_id":"5c71c414522862eb4180740d",
            "myId":"2",
            "status":"ready",
            "isProduct":false,
            "__v":0,
            "materials":[
              {
                "_id":"5c71c414522862eb41807408",
                "name":"wooden side",
                "__v":0
              },
              {
                "_id":"5c71c414522862eb41807408",
                "name":"wooden side",
                "__v":0
              },
              {
                "_id":"5c71c414522862eb41807408",
                "name":"wooden side",
                "__v":0
              }
            ],
            "components":[

            ]
          }
        ]
      },
      {
        "_id":"5c71c414522862eb4180740c",
        "myId":"1",
        "status":"ready",
        "isProduct":false,
        "__v":0,
        "materials":[
          {
            "_id":"5c71c414522862eb4180740b",
            "name":"wooden roof",
            "__v":0
          },
          {
            "_id":"5c71c414522862eb4180740b",
            "name":"wooden roof",
            "__v":0
          }
        ],
        "components":[

        ]
      }
    ]
  }
}

export function Diagram(props) {
  const { classes, treeData } = props;

  return (
		<Tree
			data={data(myFakeData.components)}
			height={500}
			width={800}
			animated/>
  );
}

// Footer.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Diagram);
