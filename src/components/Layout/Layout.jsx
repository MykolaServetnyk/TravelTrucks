import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo"
import { Suspense } from "react";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
        <header className={css.header}>
              <Logo/>
              <Navigation />
        </header>
              <Suspense fallback={<div>Please wait loading page...</div>}>
                  {children}
              </Suspense>
    </div>
  );
}