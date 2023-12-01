import React from 'react';

const SearchInput = ({ onSearch }) => {
    const handleChange = (event) => {
        const searchTerm = event.target.value;
        onSearch(searchTerm);
    };

    return (
        <>

            <div style={containerStyle}>
                <input
                    type="text"
                    placeholder="Rechercher..."
                    onChange={handleChange}
                    style={inputStyle}
                />

            </div>
            <div style={{display:"flex",justifyContent:"center",marginTop:"80px"}}>
            <div style={{ width: "900px",marign:"auto",display:"flex",justifyContent:"center", height: "1px", backgroundColor: "white" }}></div>

            </div>
        </>
    );
};

const containerStyle = {
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'center',
};

const inputStyle = {
    width: '30%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    margin: 'auto',
    border: '1px solid #ccc',
};

export default SearchInput;
