import React from 'react';
import DesktopNav from '../DesktopNav';


interface Children {
    children: React.ReactNode
}

export const MainLayout = ({children}: Children) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            minHeight: '100vh',
            backgroundColor: '#fff'
        }}
        >
        <DesktopNav />
        <div style={{height: '100%', 
       }}>
            {children}
            </div>
        </div>
    );
};
