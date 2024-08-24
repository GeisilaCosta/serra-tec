import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React from 'react';

export function ToolBar() {
    const startContent = (
        <React.Fragment>
            <Button label='Home'/>
            <Button label="Produtos" />
            <Button label="Sobre" />
            <Button label="Login" />
        </React.Fragment>
    );

    const endContent = (
        <React.Fragment>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <input type="text" placeholder="Buscar" className="p-inputtext p-component" />
            </span>
        </React.Fragment>
    );

    return (
        <Toolbar start={startContent} end={endContent} />
    );
}