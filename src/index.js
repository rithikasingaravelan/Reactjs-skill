import React from 'react';
import ReactDOM from 'react-dom';

function Student(props) {
	return( 
	<div>
		<table style={{border: "1px solid black", padding:"3px"}}>
	    <tr>
        <th style={{border: "1px solid black", padding:"3px"}}>Name</th> 
		<td style={{border: "1px solid black", padding:"3px"}}>{ props.details.name }</td>
		</tr>
		<tr>
		<th  style={{border: "1px solid black", padding:"3px"}}>Department</th>
		<td  style={{border: "1px solid black", padding:"3px"}}>{ props.details.dept }</td>
		</tr>
		<tr>
		<th  style={{border: "1px solid black", padding:"3px"}}>Year</th>
		<td  style={{border: "1px solid black", padding:"3px"}}>{ props.details.year }</td>
		</tr>
		</table>
	</div>
	);
  }
  
  function Contact(props){
	return(
	<div>
	<h3>Email: { props.cont.email }</h3>
	<h2>Phone: { props.cont.phone }</h2>
	</div>
	);
	
  }
  function Garage() {
	const det={name:"Sindhu",dept:"IT",year:"III"};
	const std = { email: "xxxx@gmail.com", phone: "89347274234" };
	return (
	  <>
	  <h1>Student Detail</h1>
		<Student details={det} />
		<h1>Contact Detail</h1>
		<Contact cont={std} />
	  </>
	);
  }

  
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);