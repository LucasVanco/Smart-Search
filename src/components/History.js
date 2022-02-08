import '../App.css';

function History(props) {

    /**
     * handle click on history strings
     * send info back to parent
     *
     * @param value - string clicked
     */
    function handleHistoryClick(value) {
        props.onHistoryClick(value);
    }

    return (
        <div id='history'>
            {
                props.history.length > 0 &&
                <span>
                    <b>Searched : </b>
                    {
                        props.history.map((elem, index) => <span key={index} className='searched' onClick={() => handleHistoryClick(elem)}>{elem}</span>)
                    }
                </span>
            }
        </div>
    );
}

export default History;
