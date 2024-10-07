import { Button, ConfigProvider } from 'antd';
import styles from './button-update.module.scss';

type ButtonUpdateProps = {
  text: string;
  icon: JSX.Element;
};

export const ButtonUpdate: React.FC<ButtonUpdateProps> = ({ text, icon }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#176190',
          borderRadius: 2,
        },
        components: {
          Button: {
            paddingBlock: 20,
            paddingInline: 30,
            fontWeight: 500,
            contentFontSize: 18,
          },
        },
      }}>
      <Button icon={icon} className={styles.buttons} type="primary">
        {text}
      </Button>
    </ConfigProvider>
  );
};
