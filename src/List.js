const List = ({d: data = [], renderEmpty,  renderItem}) => {

    if(!data.length){ return renderEmpty }

    return (
        <div>
            <h2>Tallest Peaks</h2>
        <ul>
            { data.map((peak,i) => { return (
                <li key={i}>
                    { renderItem(peak) }
                </li>
            )})
            }
        </ul>
        </div>
    )
}

export default List;