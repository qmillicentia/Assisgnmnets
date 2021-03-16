function Typography(props){


    return(

        <nav 
        style={{backgroundColor:props.color}}>
            {props.text}
        </nav>
    )
}

export default Typography; 