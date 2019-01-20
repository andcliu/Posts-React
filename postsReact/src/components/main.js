import React, {Component} from 'react';
import Header from './header';
import Body from './body';
import axios from 'axios';
import headerImg from '../images/postit.jpg';
import CreateForm from './createForm';
import UpdateForm from './updateForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'reactstrap';

export default class Main extends Component{
	constructor(props){
		super(props);
		this.state={
			data:[],
			showItem:false,
			id:'',
			title:'',
			description:'',
			date_posted:''

		}
		this.deleteItem=this.deleteItem.bind(this);
		this.createItem=this.createItem.bind(this);
		this.showUpdateForm=this.showUpdateForm.bind(this);
		this.updateItem=this.updateItem.bind(this);
	};

	componentDidMount(){
		axios.get('http://localhost:3001/posts_api')
		.then(res=>{
			const results=res.data;
			this.setState({data:results})
		})
	};

	showUpdateForm=(id) =>{
		let temptitle:'';
		let tempdescr:'';
		let tempdate:'';
		this.state.data.map(function(k){
			if(k.id === id){
				temptitle=k.title
				tempdescr=k.description
				tempdate=k.date_posted
			};
		})
		this.setState({
			id:id,
			showItem:true,
			title:temptitle,
			description:tempdescr,
			date_posted:tempdate
		})
	}	

	updateItem=(id,title,description,date_posted)=>{
		var updateItems={id:id,title:title,description:description,date_posted:date_posted};
		var stringified=JSON.stringify(updateItems);
		axios.put(`http://localhost:3001/posts/${id}`,stringified,{headers: {'Content-Type':'application/json'}})
		.then(res =>{
			console.log(res);
			let newData=this.state.data.filter((i) => i.id !== res.data.id)
			newData.push(res.data)
			this.setState({data:newData,id:'',title:'',description:'',date_posted:'',showItem:false})
		})
		.catch(error => console.log(error))
	}
	

	deleteItem=(id) =>{
		axios.delete(`http://localhost:3001/posts/${id}.json`)
		.then(res=>{
		  var newData = this.state.data.filter((d) => d.id !==id)
		  this.setState({data: newData});
		})
		.catch(error => console.log(error))
		console.log(id)
	}

	createItem=(title,description,date_posted)=>{
		let fields={
			title:title,
			description:description,
			date_posted:date_posted
		}
		let strf=JSON.stringify(fields)
		axios.post(`http://localhost:3001/posts`,strf, {headers: {'Content-Type': 'application/json'}})
		.then(res=>{
			// console.log(res);
			this.setState({
				data:this.state.data.concat(fields)
			})
		})
		.catch(error=>{
			console.log(error)
		})
	}


	render(){

		const hide={
			'display':'none'
		}
		const show={
			'display':''
		}

		return(
			<Container>
				<Header headerImg={headerImg}/>
				<br/>
				<Row>
					<Col md='8'>
						<Body data={this.state.data} deleteItem={this.deleteItem} showUpdateForm={this.showUpdateForm}/>
					</Col>
					<Col md='4'>
						<div>
							<CreateForm createItem={this.createItem}/>
						</div>
						<br />
						<div style={this.state.showItem === true ? show : hide} >
							<UpdateForm title={this.state.title} description={this.state.description} date_posted={this.state.date_posted} id={this.state.id} updateItem={this.updateItem} />
						</div>
					</Col>
				</Row>
			</Container>
		)
	}
};
