import { NavLink } from 'react-router-dom';

import { RouterBook } from '../../router/routes';

import './side-bar.scss';

export const SideBar = () => {
  const linkNames = Object.keys(RouterBook) as Array<keyof typeof RouterBook>;
  return (
    <nav className="nav">
      <ul className="nav__list">
        {linkNames.map((name) => (
          <li className="nav__list-item" key={RouterBook[name]}>
            <NavLink className="nav__list-link" to={RouterBook[name]}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
