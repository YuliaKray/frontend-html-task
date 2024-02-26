import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }) );
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    render() {
        const { isOpened } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isOpened });

        return (
            <div className={ isOpened ? containerClassnames : (`sidebar sidebar_close`)}>
                <div className='sidebar__logo-wrapper'>
                    <img
                        src={ logo }
                        alt="TensorFlow logo"
                        className='sidebar__logo'
                    />
                    <span className={isOpened ? '' : 'sidebar_invisible-span'}>TensorFlow</span>
                    <button onClick={ this.toggleSidebar }
                    className={ isOpened ? 'sidebar__arrow' : 'sidebar__arrow sidebar__arrow_close'}>
                        <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' } />
                    </button>
                </div>

                <div className='sidebar__links'>
                    {
                        routes.map((route) => (
                            <div className={isOpened ? 'sidebar__link' : 'sidebar__link sidebar__link-close'} 
                            key={ route.title } 
                            onClick={ () => this.goToRoute(route.path) }>
                                <FontAwesomeIcon icon={ route.icon }/>
                                <span className={isOpened ? '' : 'sidebar_invisible-span'}>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>

                <div className='sidebar__links sidebar__links_down'>
                    {
                        bottomRoutes.map((route) => (
                            <div className={isOpened ? 'sidebar__link' : 'sidebar__link sidebar__link-close'}
                            key={ route.title } 
                            onClick={ () => this.goToRoute(route.path) }>
                                <FontAwesomeIcon icon={ route.icon } />
                                <span className={isOpened ? '' : 'sidebar_invisible-span'}>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
