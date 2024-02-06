const Patient = (props) => {

    console.log(props);

    return (

        <>

             <h1>Profile Information</h1>

             <h1> Name: { props.name } </h1>

             <h1> Age: { props.age} </h1>

             { props.children }

         </>

      );

}

export default Patient;