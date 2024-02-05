import * as React from 'react';
import { Link } from 'gatsby';
import { container, heading, navLinks, navLinkItem, navLinkText } from '../components/layout.module.css'
const Layout = ({ pageTitle, PageHeading, children }) => {
    return (
        <>
            <div className={container}>
                <nav>
                    <title>{pageTitle}</title>
                    <ul className={navLinks}>
                        <li className={navLinkItem}><Link className={navLinkText} to='/'>Home</Link></li>
                        <li className={navLinkItem}><Link className={navLinkText} to='/about'>About</Link></li>
                        <li className={navLinkItem}><Link className={navLinkText} to='/contact'>Contact</Link></li>
                        <li className={navLinkItem}><Link className={navLinkText} to='/faq'>FAQ</Link></li>
                    </ul>
                </nav>
                <h1 className={heading}>{PageHeading}</h1>
            </div>
            {children}

        </>
    )
}

export default Layout;
