import {
    Autocomplete,
    Chip,
    InputAdornment,
    TextField
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput(props) {

    /**
     * handle changes on autocomplete input
     * send info back to parent
     *
     * @param value - new value
     * @param reason - reason of change
     */
    function handleInputChange(value, reason) {
        props.onSearchChange(value, reason);
    }

    return (
        <Autocomplete
            multiple
            id="tags-filled"
            options={[]}
            freeSolo
            value={props.keywords}
            onChange={(event, value, reason) => handleInputChange(value, reason)}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                    />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Keyword"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <>
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                                {params.InputProps.startAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
}

export default SearchInput;
