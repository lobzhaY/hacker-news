import React from "react";
import styles from './footer.module.scss';
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Link to='https://github.com/lobzhaY'>@Yuliya Lobzha</Link>
        </footer>
    )
}