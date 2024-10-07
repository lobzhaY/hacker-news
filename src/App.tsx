import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import { Loader } from './components';

function App() {
  return (
    <>
      <div className={styles.main}>
        <Suspense fallback={<Loader />}>
          <p>Header</p>
          <div>
            <Outlet />
          </div>
          <p>Footer</p>
        </Suspense>
      </div>
    </>
  );
}

export default App;
