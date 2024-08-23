import styles from './Header.module.css'

const Header = () => {
    return(
        <div className={`${styles.container} container`}>
            <h1>MAY I HELP YOU??</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a explicabo, tempore eius et possimus facere. Dolore corporis quo, ipsam voluptate in, at ullam culpa architecto molestiae nostrum, maiores quam.</p>
        </div>
    );
};

export default Header;