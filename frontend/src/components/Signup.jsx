import axios from "axios"
import { useRef, useState } from "react"
export function Signup({setShowPopup}) {
    const [otpPage, setOtpPage] = useState(false)
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const dayRef = useRef()
    const monthRef = useRef()
    const yearRef = useRef()
    const genderRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/signup", {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            day: parseInt(dayRef.current.value),
            month: parseInt(monthRef.current.value),
            year: parseInt(yearRef.current.value),
            gender: genderRef.current.querySelector('input:checked').id
        })
        .then((res)=>{
            alert(res.data);
            setOtpPage(true)
        })
        .catch((e)=>{
            alert("Choose Proper Inputs")
        })
    }

    return <div>
        {otpPage ? <>
            <h1 style={{fontWeight: "600", fontSize:"32px", lineHeight:"38px", paddingLeft:"10px"}}>Enter OTP sent to your email:</h1>
        </> : <div className="signupcard">
        <h1 style={{fontWeight: "600", fontSize:"32px", lineHeight:"38px", paddingLeft:"10px"}}>Sign Up</h1>
        <h3 style={{color: "#606770", fontFamily: "SFProText-Regular, Helvetica, Arial, sans-serif",fontSize: "15px", lineHeight: "24px", paddingLeft:"10px"}}>It's quick and easy.</h3>
        <img onClick={()=>{
            setShowPopup(false)
        }} className="closeIcon" src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/zgulV2zGm8t.png" alt width={24} height={24}/>
        <div className="signup-line"></div>
        <form className="signup" onSubmit={handleSubmit} action="">
            <input type="text" id="fName" placeholder="First name" ref={firstNameRef} required/> 
            <input type="text" id="surname" placeholder="Surname" ref={lastNameRef} required/><br />
            <input type="text" id="uname" placeholder="New Username" ref={usernameRef} required/><br />
            <input type="text" id="email" placeholder="Email" ref={emailRef} required/><br />
            <input type="password" id="pword"placeholder="New Password" ref={passwordRef} required/><br />
            <h3 className="dob">Date of birth</h3>
            <div style={{marginBottom:"10px"}}>
            <select aria-label="Day" name="day" id="day" ref={dayRef} required>
                <option value="Day">Day</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
            <select aria-label="Month" name="month" id="month" ref={monthRef} required>
                <option value="Month">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
            <select aria-label="Year" name="year" id="year" ref={yearRef} required>
                <option value="Year">Year</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
                <option value="1904">1904</option>
                <option value="1903">1903</option>
                <option value="1901">1901</option>
                <option value="1900">1900</option>
            </select>
            </div>

            <h3 className="dob">Gender</h3>
            <div className="gender" datatype="radio" ref={genderRef} required>
            <div id="malediv">
                <label htmlFor="male" className="label">Male</label>
                <input type="radio" name="gender" id="male" required/>                
            </div>
            <div id="femalediv">
                <label htmlFor="female" className="label">Female</label>
                <input type="radio" name="gender" id="female" required/>                
            </div>                
            </div>
            <div className="signupbutton-container">
                <button className="signupbutton"  type="submit">Sign Up</button>
            </div>


        </form>

    </div>}
    </div>
}