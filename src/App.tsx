import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <div className={styles.main}>
        <Suspense fallback={<p>Loader </p>}>
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
