const Title = ({number, label}) => {
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p style={{ fontSize: '14px', color: '#3655a0', padding: '5px 10px', borderRadius: '50%', fontWeight: 'bold', backgroundColor: 'white', margin: '0px 5px'}}>{number}</p>
            <label style={{ fontWeight: 'bold', color: 'white'}}> {label} </label>
        </div>
    )
}

export default Title