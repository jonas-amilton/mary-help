import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import "../css/app.css";
import Header from "./Components/Header";
createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        const WrappedApp = () => (
            <div>
                <Header />
                <App {...props} />
            </div>
        );

        createRoot(el).render(<WrappedApp />);
    },
});
