import { Button } from 'antd';
import { useState } from 'react';
import './App.css';
import { DynamicForm } from './components/forms';
import DynamicTable from './components/table';
import { initData } from './components/table/data';


function App() {
  const [data, setData] = useState(initData);
  const [isOpen, setOpen] = useState(false)

  const onNew = (record) => {
    setData(data => data.concat(record));
    setOpen(false)
  }
  return (
    <div className="App">
      <Button onClick={() => setOpen(true)}> Create </Button>
      <DynamicTable data={data} updateData={setData} />
      <DynamicForm isOpen={isOpen} setOpen={onNew} />
    </div>
  );
}

export default App;
