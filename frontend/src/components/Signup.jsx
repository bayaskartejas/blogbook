export function Signup() {
    return <div className="signupcard">
        <h1>Sign Up</h1>
        <h3>It's quick and easy.</h3>
        <div id="line"></div>
        <form action="">
            <input type="text" id="fName"/> 
            <input type="text" id="surname"/><br />
            <input type="text" id="uname"/><br />
            <input type="text" id="email"/><br />
            <input type="password" id="pword"/><br />
            <h3>Date of birth</h3>
            <select aria-label="Day" name="day" id="day" ></select>
            <select aria-label="Month" name="month" id="month" ></select>
            <select aria-label="Year" name="year" id="year" ></select>
        </form>

    </div>
}