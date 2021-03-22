import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default class SearchApp extends Component {

    constructor(){
        super();
        this.state = {users:[],searchUser:'',matchedUsers:[], allUsers:[]};
        this.x = 0;
        this.searchUsers = this.searchUsers.bind(this);
    }

    searchUsers(event){
        console.log("searchUsers called");
        this.state.searchUser = event.target.value;
        this.getMatchedUsers = this.state.allUsers.filter(user=>
            user.name.toLowerCase().includes(this.state.searchUser.toLowerCase()));
        this.setState({matchedUsers:this.getMatchedUsers})
        if(!this.getMatchedUsers.length)
            alert(`Sorry User ${event.target.value} not available!`);
    }

    componentDidMount(){
        console.log("componentDidMount called")
        fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json())
        .then(users=>this.setState({allUsers:users}));
    }

    render() {
        console.log("render called",this.state.matchedUsers.length);
        if(this.state.matchedUsers.length){
            console.log("if condition",this.state.matchedUsers.length);
            this.state.users = this.state.matchedUsers;
        }else{
            this.state.users = this.state.allUsers;
        }
        return (
            <div className="d-flex flex-wrap justify-content-center">
                <input type="text" placeholder="Search by User's Name" className="my-3 form-control" onChange={this.searchUsers}></input>
                {this.state.users.map((user,index)=>(
                    <div className="customeffect">
                        <div key={index} className="shadow card m-3" style={{width : "18rem"}}>
                            <img className="card-img-top customColor" src={`https://robohash.org/${index}?set=set3`} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text text-center"><strong>User Name : {user.name}</strong></p>
                                <p className="small text-center">Email : {user.email}</p>
                                <p className="small text-center">Status : {user.company.catchPhrase}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
