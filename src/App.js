import './App.css';
import { Grid } from "@mui/material";
import {useEffect, useState} from "react";
import Record from "./components/Record";
import SearchInput from "./components/SearchInput";
import History from "./components/History";

// import dataset from json file directly
const dataset = require('./dataset.json');

function App() {

    // instantiate states
    const [keywords, setKeywords] = useState([]);
    const [history, setHistory] = useState([]);
    const [records, setRecords] = useState([]);
    const [favorites, setFavorites] = useState([]);

    // use hook for history click purposes
    useEffect(() => {
        handleInputChange(keywords);
    }, [keywords]);

    /**
     * handle change on autocomplete component SearchInput
     *
     * @param value - the new values
     * @param reason - why it changed, used to track history on createOption
     */
    function handleInputChange(value, reason) {
        setKeywords(value);

        if (reason === 'createOption') {
            const lastValue = value.at(-1);
            if (history.findIndex((elem) => elem === lastValue) === -1) {
                setHistory([...history, lastValue]);
            }
        }

        setRecords([]);
        // search logic
        if (value.length > 0) {
            const recordsFound = [];
            dataset.records.forEach((record) => {
                if (value.every((v) => record.fields.type_tournage.toLowerCase().includes(v.toLowerCase()))) {
                    recordsFound.push(record);
                }
                if (value.every((v) => record.fields.annee_tournage.includes(v))) {
                    if (recordsFound.findIndex((elem) => elem.recordid === record.recordid) < 0) {
                        recordsFound.push(record);
                    }
                }
                if (value.every((v) => record.fields.ardt_lieu.includes(v))) {
                    if (recordsFound.findIndex((elem) => elem.recordid === record.recordid) < 0) {
                        recordsFound.push(record);
                    }
                }
            })
            setRecords(recordsFound);
        }
    }

    /**
     * handle click on history strings
     *
     * @param value - string clicked
     */
    function handleHistoryClick(value) {
        if (keywords.findIndex((elem) => elem === value) === -1) {
            setKeywords([...keywords, value]);
        }
    }

    /**
     * handle click on favorite icon
     *
     * @param id - id of the record to add/remove from favorites
     */
    function handleFavoriteClick(id) {
        const index = favorites.findIndex((elem) => elem === id);
        if (index === -1) {
            setFavorites([...favorites, id]);
        } else {
            const favTmp = favorites;
            favTmp.splice(index, 1);
            setFavorites([...favTmp]);
        }
    }

    /**
     * helper method to know if current record is favorite or not
     *
     * @param id - id of the record to check
     * @returns {boolean} - true if is favorite, false otherwise
     */
    function isRecordFavorite(id) {
        return favorites.findIndex((elem) => elem === id) !== -1;
    }

  return (
    <div className="App">
        <h1>SMART SEARCH</h1>
        <SearchInput keywords={keywords} onSearchChange={handleInputChange} />
        <History history={history} onHistoryClick={handleHistoryClick}/>
        <Grid container spacing={2}>
        {
            records.map((elem) => {
                return <Grid item xs={4} key={elem.recordid}>
                    <Record {...elem.fields} recordId={elem.recordid} onFavoriteClick={handleFavoriteClick} isFavorite={isRecordFavorite(elem.recordid)} />
                </Grid>
            })
        }
        </Grid>
    </div>
  );
}

export default App;
