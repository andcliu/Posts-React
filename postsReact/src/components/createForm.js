import React, {Component} from 'react';
import { Button, Jumbotron, Form, Input } from 'reactstrap';

export default class CreateForm extends Component{
	constructor(props){
		super(props);
		this.state={
			date:'',
			description:'',
			title:''
		}
		this.handleForm = this.handleForm.bind(this);
		this.handleTitle=this.handleTitle.bind(this);
		this.handleDesc=this.handleDesc.bind(this);
		this.handleDate=this.handleDate.bind(this);
	}

	handleTitle(e){
		this.setState({title:e.target.value})
	}
	handleDate=(e)=>{
		this.setState({date:e.target.value})
	}
	handleDesc=(e)=>{
		this.setState({description:e.target.value})
	}
	handleForm=(e)=>{
		e.preventDefault();
		this.props.createItem(this.state.title,this.state.description,this.state.date)
		// console.log(this.state.date + '  ' + this.state.title + '   ' + this.state.description)
	}

	render(){
		return(
			<Jumbotron>
			<h3>Create New Item</h3>
			<Form>
				Title: <Input type='text' id='titleForm' value={this.state.title} onChange={this.handleTitle}/><br/>
				Description <Input type='text' id='descForm' value={this.state.description} onChange={this.handleDesc}/><br/>
				Date Posted <Input type='date' id='dateForm' value={this.state.date} onChange={this.handleDate}/><br/>	
				<Button color='primary' onClick={this.handleForm} type='submit'>Submit</Button>
			</Form>
			</Jumbotron>
		)
	}
}