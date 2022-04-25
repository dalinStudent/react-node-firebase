import MainNavugation from './MainNavigation';
import classes from '../../css/layout.module.css';

export default function Layout(props) {
    return (
        <div>
            <MainNavugation />
            <main className={classes.main}>{props.children}</main>
        </div>
     );
}