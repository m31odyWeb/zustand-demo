import { FC, ReactNode } from 'react';
import { SideBar } from './side-bar';

import './index.scss';

interface IProps {
  children: ReactNode;
}
export const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className="layout">
      <aside className="layout__sidebar">
        <SideBar />
      </aside>
      <main className="layout__content">{children}</main>
    </div>
  );
};
