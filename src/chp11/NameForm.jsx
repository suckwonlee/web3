import React, { useState } from "react";

function NameForm(props) {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        alert(`입력한 이름: ${name}`);
        event.preventDefault();
    };

    const handleChange = (event) => {
        setName(event.target.value.toUpperCase());
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                성명:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default NameForm;
