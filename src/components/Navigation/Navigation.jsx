import { Link } from "react-router-dom";
import s from './Navigation.module.css';



const Navigation = () => {
    return (
        <nav className={s.container}>
        <Link className={s.link} to="/generate">Генерировать QR код</Link>
        <Link className={s.link} to="/scan">Сканировать QR код</Link>
        <Link className={s.link} to="/generate/History">История генерирования</Link>
        <Link className={s.link} to="/scanHistory">История сканирования</Link>
        </nav>
    );
}

export default Navigation;

