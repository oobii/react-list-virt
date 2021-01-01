const List = ({d: data = [], renderEmpty,  f: func}) => {

    if(!data.length){ return renderEmpty }

    return (
        <div>
            <h2>Tallest Peaks</h2>
        <ul>
            { data.map((peak,i) => { return (
                <li key={i}>
                    {/* {peak.name} - {peak.elevation.toLocaleString()}m */}
                    { func(peak) }
                </li>
            )})
            }
        </ul>
        </div>
    )
}

export default List;