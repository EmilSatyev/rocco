import React from "react";
import styles from "./Header.module.scss";
import { SvgSelector } from "../../helpers/svgSelector";
import { AppContext } from "../../contextes";
import cnBind from "classnames/bind";
import pagesData from "../../assets/json/pages.json";
import logo from "../../assets/images/logo.png";
import {Link} from "react-router-dom";

const cx = cnBind.bind(styles);

const Header = () => {
  const { openDrawer } = React.useContext(AppContext);
  const [isSearchInput, setIsSearchInput] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <button onClick={() => openDrawer("cities", "top")}>
          <SvgSelector name="location" />
          <span>Санкт-Петербург</span>
        </button>
        <nav className={styles.nav}>
          <ul>
            {pagesData.slice(1, 9).map((page) => (
              <li key={page.id}>
                <Link to={`${page.url}`}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href="tel:+78123806686">
          <SvgSelector name="phone" />
          <span>+7(812) 380-66-86</span>
        </a>
      </div>
      <div className={cx(styles.bottom, { search_open: isSearchInput })}>
        <div className={styles.bottom__left}>
          <button onClick={() => openDrawer("catalog", "top")}>
            <SvgSelector name="burger" />
            <span>Каталог</span>
          </button>
          {!isSearchInput && (
            <>
              <a href="/new">Новинки</a>
              <a href="/sale">Распродажа</a>
            </>
          )}
        </div>

        {isSearchInput ? (
          <div className={styles.bottom__search}>
            <input type="text" placeholder="Поиск товаров" />
            <button onClick={() => setIsSearchInput(false)}>
              <SvgSelector name="close" />
            </button>
          </div>
        ) : (
          <Link to="/home">
            <img src={logo} alt="Логотип Россо" />
          </Link>
        )}

        <ul className={styles.bottom__icons}>
          <li>
            <button onClick={() => setIsSearchInput(true)}>
              <SvgSelector name="search" />
            </button>
          </li>
          <li>
            <button>
              <SvgSelector name="user" />
            </button>
          </li>
          <li>
            <button onClick={() => openDrawer("favorites", "right")}>
              <SvgSelector name="heart" />
            </button>
          </li>
          <li>
            <button onClick={() => openDrawer("cart", "right")}>
              <SvgSelector name="cart" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
