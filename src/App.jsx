import { Header, Footer } from "./_containers";
import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import * as flsFunctions from "./js/functions";
import { Spinner } from "./_components";

const Page404 = lazy(() => import("./_pages/Page404")),
    Home = lazy(() => import("./_pages/HomePage")),
    Blog = lazy(() => import("./_pages/BlogPage")),
    Works = lazy(() => import("./_pages/WorksPage")),
    Article = lazy(() => import("./_pages/ArticlePage"));

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        flsFunctions.menuClose();
    }, [pathname]);
    return null;
};

const App = () => {
    useEffect(() => {
        flsFunctions.menuInit();
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <Header />
            <main className="page">
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/works" element={<Works />} />
                        <Route path="/works/:" element={<Article />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
