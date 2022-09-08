import Table  from 'antd/lib/table';
import React from 'react';
import { columns } from './data';


const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const DynamicTable = ({data, updateData}) => {

    const updateRecord = (record) => {
        console.log(record)
    }

    return (
        <Table columns={columns(updateRecord)} dataSource={data} onChange={onChange} />
    );
}

export default DynamicTable;