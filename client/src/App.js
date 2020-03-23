import React from 'react';
import Players from './components/Players'
import NavBar from './components/NavBar'
import 'semantic-ui-css/semantic.min.css'
import './App.css';


 export default class App extends React.Component{
   constructor(){
     super()
     this.state={
       data:[]

     }
   }

   componentDidMount(){
     fetch(`http://localhost:5000/api/players`)
     .then(res=> res.json())
     .then(res=>this.setState({data:res}))
     .catch(err=>console.log(err))
   }

   render(){
     return(
       <div>
         <div className='App'>
           <h1>Women's World Cup Rankings</h1>
           <h2>Players ranked by search interest from Google Trends, June-July 2019 worldwide</h2>
           <NavBar/>
         </div>
         <div className='card'>
           {this.state.data.map(players => <Players key={players.id} players={players}/>)}
         </div>
       </div>
     );
   }

 }