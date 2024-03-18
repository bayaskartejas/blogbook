export function Signin() {
    return <div className="signincard">
        <form action="" className="signincardIn">
            <input type="text" id="username" placeholder="Email or Username"/><br />
            <input type="password" id="password" placeholder="Password"/><br />
            <button id="login">Log in</button>
            <div id="line"></div>
            <h3 id="midtext">New to Blogbook ?</h3>
            <button id="newaccount">Create new account</button>
        </form>
    </div>
}