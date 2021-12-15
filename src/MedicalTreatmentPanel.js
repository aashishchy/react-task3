import React from "react";
const  MedicalTreatmentPanel=()=>{
  const[treatId,settreatId]=React.useState('');
  const[treatCourseId,settreatCourseId]=React.useState('');
  const[type,settype]=React.useState('');
  const[category,setcategory]=React.useState('');
  const[name,setname]=React.useState('');
  const[startDate,setstartDate]=React.useState('');
  const[MedicalTreatmentlist,setMedicalTreatmentlist]=React.useState([]);
  const newMedicalTreatmentlist=(event)=>{
    var addvalue=MedicalTreatmentlist;
    var v={a:treatId,b:treatCourseId,c:type,d:category,e:name,f:startDate}
    addvalue.push(v);
    setMedicalTreatmentlist(addvalue);
    event.preventDefault();
    settreatId("");
    settreatCourseId("");
    settype("");
    setcategory("");
    setname("");
    setstartDate("");


  }
    
   
    
  
  
    const listMedicalTreatment=MedicalTreatmentlist.map((product)=><li key={product.a}>treatId={product.a} treatCourseId={product.b} type={product.c} category={product.d} name={product.e} startDate={product.f}</li>);


  return(

    
    <div>

      <h1 >MedicalTreatmentPanel</h1>
      <input type="text" placeholder="treatId" value={treatId} onChange={function(e){settreatId(e.target.value)}}/>
      <br/>
      <input type="text" placeholder="treatCourseId" value={treatCourseId} onChange={function(e){settreatCourseId(e.target.value)}}/>
      <br/>
      <input type="text" placeholder="type" value={type} onChange={function(e){settype(e.target.value)}}/>
      <br/>
      <input type="text" placeholder="category" value={category} onChange={function(e){setcategory(e.target.value)}}/>
      <br/>
      <input type="text" placeholder="name" value={name} onChange={function(e){setname(e.target.value)}}/>
      <br/>
      <input type="text" placeholder="startDate" value={startDate} onChange={function(e){setstartDate(e.target.value)}}/>
      <br/>
      <hr/>
      <button type="button" onClick={newMedicalTreatmentlist}>Submit Panel</button>
      <h2>MedicalTreatmentlist</h2>
      <ul>{listMedicalTreatment}</ul>

    </div>
  );
}
export default MedicalTreatmentPanel