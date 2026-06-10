const Card = (preps) => {
    return (
        <div style={{
            border: "1px solid #a19a9a",
            borderRadius: "5px",
            width: "250px",
            height: "470px",
        }}>
            <img src={preps.src} alt="Iphone 15" style={{
                width: "100%",
                height: "280px",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
            }} />
            <div style={{
                padding: "10px",
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: '0px'
                }}>
                    <h1 style={{ fontSize: '1.5rem', }}>{preps.price}</h1>
                    <span>{preps.icon}</span>
                </div>
                <p style={{ margin: "0px", height: "50px"}}>{preps.title}</p>
                <p style={{
                    fontSize: '0.9rem',
                    color: 'gray',
                    margin: "5px 0px"
                }}>{preps.location}</p>
                <p style={{
                    fontSize: '0.8rem',
                    color: 'gray',
                    margin: "5px 0px",
                }}>{preps.time}</p>
            </div>
        </div>
    )
}

export default Card
