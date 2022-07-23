import { Link } from 'react-router-dom';

import styles from './Footer.module.css';


const Footer = () => {

    return (
            <footer id="footer" className={styles.footer}>
                <p>Cook Book is a web application developed by {' '}
                    <Link to="mailto:avradaliev@gmail.com">
                        <strong>Alex Avradaliev.
                        </strong>
                    </Link>
                </p>
                <p> &copy; 2022. All rights reserved.</p>
            </footer>
    );
};

export default Footer;
