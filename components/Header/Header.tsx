import React from 'react'
import styles from './Header.module.css';
/**
 * Existem 5 maneiras diferentes de utilizar css no React:
 * 1. CSS puro (Não recomendado) - Ex. arquivo.css
 * 2. CSS Modules - EX. Arquivo.module.css 
 * 3. Sass
 * 4. Styled Components - Ex arquivo.tsx
 * 5. Emotion - pode usar a função css ou o componente styled
 * 
 * A melhor é a que o seu time utiliza
 */
import { css } from '@emotion/css';
import styled from '@emotion/styled'
import Link from 'next/link';
import Input from '../Form/Input';
import Button from '../Form/Button';

//style components, componente estilizado
const HeaderPage = styled.header`
width: 100%;
height: 100px;
display: flex;
background: rgb(247, 243, 232);
align-items: center;
justify-content: space-between;
& > div:first-child 
& > div:last-child {
    margin: 0 5%;
}
`;

const NavMenu = styled.nav`
width: 50%;
display: flex;
justify-content: center;
height: 50px;
& a:hover {
    font-weight: bold;
}
& li{
    margin-top: 4px;
    border-bottom: 4px solid transparent;
    padding-bottom: 20px;
}
& li:hover{
    border-bottom: double 4px orange;
}
`;

type HeaderProps = {
    pesquisar?: string;
    menu?: Array<string>
}
export default function Header(props: HeaderProps) {
    return (
        // <header className={styles['menu-site']}>
        <HeaderPage>
            <div>Logotipo</div>
            <NavMenu>
                <ul className={css`
                 margin:0;
                 padding:0;
                 display: inline-flex;
                 & > li {
                     list-style: none;
                     min-width: 100px;
                     text-align: center;
                     padding: 10px;
                    }   
                    `}>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/login'>Login</Link></li>
                    <li><Link href='/sobre'>Sobre</Link></li>
                    <li><Link href='#'>Galeria</Link></li>
                    <li><Link href='#'>Serviços</Link></li>
                    <li><Link href='#'>Blog</Link></li>
                    <li><Link href='#'>Contato</Link></li>
                </ul>
            </NavMenu>
            <div>
                <Input type="text" placeholder='qual sua busca' />
                <Button disabled>{props.pesquisar ? props.pesquisar : "Search"}</Button>
            </div>
        </HeaderPage>
        // </header>
    )
}
