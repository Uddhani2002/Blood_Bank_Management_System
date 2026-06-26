import React from "react";
import helpImage from "../assets/image/help.png";
const OurTeamList = () => {
    const team =[
        { id: 1, name: "John Doe", position: "Manager" },
        { id: 2, name: "Jane Smith", position: "Developer" },
        { id: 3, name: "Bob Johnson", position: "Designer" },
        { id: 4, name: "Alice Brown", position: "QA Engineer" },
        { id: 5, name: "Charlie Wilson", position: "Sales Associate" },
        { id: 6, name: "Emily Davis", position: "Marketing Specialist" }
    ];

  return (<div className="row" style={{backgroundColor:"#585d62"}}>
    <div className="text-center" >
        <h1 style={{marginTop: '20px', marginBottom: '20px', color: 'white'}}>Our Team</h1>
    </div>
        {team.map((item) => {
            return (
            <div className="col-sm-4" >
                <div class="card" style={{margin: '10px'}}>
                    <div className="text-center">  
                        <img class="card-img-top" src={helpImage} style={{height: '100px', width: '100px'}} alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">{item.name}</h5>
                    </div>
                </div>
            </div>);
            })}
  </div>
  );
};

export default OurTeamList;