const Department = (props) =>{

    return (

       <>

          <h1> Department Details </h1>

           <p> Dept Name: { props.department} </p>

           <p> Nurse: { props.nurse} </p>

           { props.children }

         </>

 );

}

export default Department;