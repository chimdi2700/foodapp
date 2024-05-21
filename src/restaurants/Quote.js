const Quote = ({quotes, calfunc}) => {
    // calfunc(5)
    return(
        <div>
            <h1>Quote</h1>
            <ul className="list-group">
                {
                    quotes.map((quo, index)=>{
                        return(
                            <li className="list-group-item" key={index}>{quo.text} <span>{quo.author}</span></li>
                        )
                    })
                }
            </ul>
            <button onClick={()=>{calfunc(2)}}>Click Me</button>
        </div>
    )
}
export default Quote