export const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>ABC</li>
                <li>DHD</li>
                <li>FFF</li>
            </ul>
            <label>
                <div className="switchContainer">
                    <input type="checkbox" name="" id="toggleSwitch" />
                    <div className="switch"></div>
                </div>
            </label>
            <button>Login</button>
            <button>Register</button>
        </nav>
    )
}