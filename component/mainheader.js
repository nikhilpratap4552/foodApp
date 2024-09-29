import Link from 'next/link'
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import  './mainheader.css';
import NavLink from './navlink';

const Mainheader = () => {
  return (
    <header className={'header'}>
        <Link href={'/'} className={'logo'}>
           <Image  src={logoImg} alt='a plate with food on it' priority/>
           Nextlevel Food
        </Link>

        <nav className={'nav'}>
            <ul>
                <li>
                    <NavLink href={'/meals'}>Browse meals</NavLink>
                </li>
                <li>
                    <NavLink href={'/community'}>foodies community</NavLink>
                </li>
                
            </ul>
        </nav>
    </header>
  )
}

export default Mainheader