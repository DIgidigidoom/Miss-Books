// Takes data — an array of { title, value }

// For each item, renders a <li> with a <span> styled as a vertical bar

// The height of each bar is set by value + '%', which visually creates a bar chart

// The title is shown on hover, and value% is shown inside the bar

export function Chart({ data }) {
    return (

        <ul className="chart">
            {
                data.map((item) =>
                    <React.Fragment>
                        <li key={item.title}>
                            <span title={item.title}
                                style={{ height: item.value + '%' }}>
                                {item.value + '%'}
                            </span>
                            <p className="dashbored-title">{item.title}</p>
                        </li>

                    </React.Fragment>
                )
            }
        </ul>

    )
}