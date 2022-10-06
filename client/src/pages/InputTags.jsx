import React from 'react';
import { useRef } from 'react';
import { Box, TextField } from '@mui/material';
import Tag from "./Tag.jsx"

const InputTags = ( { tags, setTags }) => {

    const tagRef = useRef();

    const handleKeyDown = (e) => {
        if (e.which !== 13) {
            return;
        }

        e.preventDefault();
        if (tagRef.current.value === "" || tags.includes(tagRef.current.value)) {
            tagRef.current.value = "";
            return;
        }

        setTags([...tags, tagRef.current.value]);
        tagRef.current.value = "";
    }

    const handleDelete = (toDelete) => {
        setTags(tags.filter((t) => t !== toDelete));
    }

    return (

        <Box display="flex" flexDirection="column" sx={{
            border: 1,
            borderColor: "#D3D3D3",
            borderRadius: "4px",
            marginLeft: "0",
            marginRight: "auto",
            width: "100%",
            padding: "8px",
            boxSizing: "border-box"
        }}>

            <Box display="inline-flex" flexWrap="wrap">
                {tags.map((text, index) => {
                    return (
                        <Tag data={text} key={index} handleDelete={handleDelete} />
                    )
                })}
            </Box>

            <TextField sx={{margin: "8px"}}
                variant='standard'
                placeholder='Enter tags here'
                onKeyDown={handleKeyDown}
                inputRef={tagRef}>

            </TextField>
        </Box>

    );
}

export default InputTags;