import { Spin } from 'antd';

import styles from './loader.module.scss';

export const Loader: React.FC = () => {
    return (
        <div className={styles.mask}>
             <Spin tip="Loading..." className={styles.spin} fullscreen={true} size="large" />
        </div>
    )
}