import { useState } from 'react';

    function ResForm() {
        const [name, setName] = useState("");
        const [numofpeople, setNum] = useState("");
        const [date, setDate] = useState("");
        const [email, setEmail] = useState("");

        function validform() {
            return(
            name && email && numofpeople && date
            )
        }
        function handleSubmit() {
            return(
                setName(""),
                setDate(""),
                setNum(""),
                setEmail("")
            )}

    return (
        <form id="reservation">
            <fieldset className="form">
                <h2>Reserve a Table</h2>
                <div className="f1">
                   <label>Name</label>
                    <input value={name} type="text" placeholder="text" required onChange={(e) => { setName(e.target.value) }}></input>
                </div>
                <div className="f1">
                   <label>Num of people</label>
                    <input value={numofpeople} type="text" placeholder="text" required onChange={(e) => { setNum(e.target.value) }}></input>
                </div>
                <div className="f1">
                   <label>Date</label>
                    <input value={date} type="date" required onChange={(e) => { setDate(e.target.value) }}></input>
                </div>
                <div className="f1">
                   <label>Email</label>
                   <input value={email} type="text" placeholder="email address" required onChange={(e) => { setEmail(e.target.value) }}></input>
                </div>
                <button id="btn" type="submit" disabled={!validform()} onClick={handleSubmit}>Submit</button>
            </fieldset>
        </form> 
    ) 
}
export default ResForm;