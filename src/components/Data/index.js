import "./Data.css";

const Data = (props) => {
    const { title, amount, change, changeColor, icon } = props;

    return (
        <div className="Data">
            <div className="Data-Left">
                <div className="Data-Left-Main">
                    <p>{title}</p>
                    <h1>{amount}</h1>
                </div>
                <p className="Data-Left-Change" style={{"color": `${changeColor}`}}>
                    {change}
                </p>
            </div>
            <div className="Data-Right">
                {icon}
            </div>
        </div>
    )
}

export default Data