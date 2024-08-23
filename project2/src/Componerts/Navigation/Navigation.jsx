import styles from './Navigation.module.css'

const Navigation = () =>{
    return(
        <nav className={`${styles.navigation} container`}>
            <div className="logo">
                <img src="/images/logo-mulmul.jpg" alt="logo" />
            </div>

            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navigation;