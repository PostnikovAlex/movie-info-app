import React, { FC, PropsWithChildren } from 'react'
import styles from '@/styles/login/Login.module.scss'

const CommonLayout: FC<PropsWithChildren> = ({
    children,
  }) => {
    return (
      <div className={ styles.layoutWrapper }>
        <div className={
            `${styles.layoutBlock} ${styles.layoutBackground}`}>
        </div>
        <div className={ `${styles.layoutBlock} ${styles.formContainer}` }>
            {children}
        </div>
      </div>
    );
  };
  
  export default CommonLayout;
