const List = () => {
    const mounts = [
        { name: 'Everest', elevation: 8848},
        { name: 'K2', elevation: 8611},
        { name: 'Kangchenjunga', elevation: 8586},
        { name: 'Lhotse', elevation: 8516},
        { name: 'Makalu', elevation: 8485},
    ];

    return (
        <div>
            <h2>Tallest Peaks</h2>
        <ul>
            { mounts.map((peak,i) => { return (
                <li key={i}>
                    {peak.name} - {peak.elevation.toLocaleString()}
                </li>
            )})
            }
        </ul>
        </div>
    )
}

export default List;