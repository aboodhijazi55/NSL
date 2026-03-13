import React from 'react';
import { Drawer as MuiDrawer, Box } from '@mui/material';
import { Row, Col, CardBody } from 'reactstrap';

import CloseIcon from '@mui/icons-material/Close';

const DRAWER_WIDTH = 600;

function Drawer({
    open,
    onClose,
    children,
    className,
    style,
    title = '',
    width = DRAWER_WIDTH,
}) {

    return (
        <MuiDrawer
            anchor='right'
            open={open}
            onClose={onClose}
            className={className}
            style={style}
            PaperProps={{
                sx: { width: width, maxWidth: '100vw' }
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#fff',

                }}
            >
                <div className="form-side-header d-flex flex-reverse-row justify-content-between align-items-center" style={{ backgroundColor: 'var(--primary)', direction: 'rtl' }}>
                    <h5 className="m-0 text-white" style={{ fontSize: '0.9375rem', fontWeight: '600' }}>{title}</h5>
                    <div className="drawer-close-btn d-flex justify-content-center align-items-center" style={{ cursor: 'pointer' }} onClick={onClose}>
                        <CloseIcon color="black" fontSize="14px" />
                    </div>

                </div>

                <CardBody style={{ overflow: 'auto', padding: '30px' }} >
                    {children}
                </CardBody>
            </div>
        </MuiDrawer>
    );
}

export default Drawer;