import React from 'react'

function Profile(props) {


  return (
    <div style={props.cardStyle}>
      <img style={props.imageStyle} src={props.image} alt="No Profile Picture"/>
      <div style={props.infoStyle}>
      <p><strong>Name: </strong>{props.name}</p>
      <p><strong>Job tittle: </strong>{props.job}</p>
      <p><strong>Phone: </strong>{props.phone}</p>
      <p><strong>Email: </strong>{props.email}</p>
      <p><strong>Bio:</strong><br></br>{props.bio}</p>
      </div>
    </div>
  )
}

export default Profile