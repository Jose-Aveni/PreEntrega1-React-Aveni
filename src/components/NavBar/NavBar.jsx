import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <div>
                <button>iPhone</button>
                <button>MacBook</button>
                <button>iPad</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar