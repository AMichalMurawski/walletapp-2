import * as React from 'react';
import css from './DiagramTab.module.scss';
import Chart from './Chart/Chart';
import Table from './Table/Table';

const DiagramTab = () => {
    return (
        <div className={css.container}>
            <Chart/>
            <Table/>
        </div>
    )
}

export default DiagramTab;
