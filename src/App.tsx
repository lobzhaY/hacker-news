import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import { Footer, Header, Loader } from './components';

function App() {
  return (
    <>
      <div className={styles.main}>
        <Suspense fallback={<Loader />}>
          <Header />
          <div className={styles.container}>
            <Outlet />
          </div>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
