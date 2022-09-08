import React from "react";
import { generateForm } from "../../utils";
import { Button, Modal } from "antd";
import Form from "antd/lib/form";

export const DynamicForm = ({ isOpen, setOpen }) => {
  const handleOk = (e) => {
  const values = form.getFieldsValue();
  values.startDate = values?.date?.[0].format('YYYY-MM-DD');
  values.endDate = values?.date?.[1].format('YYYY-MM-DD');
  values.id = Math.floor(1000 + Math.random() * 9000)
  delete values.date;
    setOpen(values);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const [form] = Form.useForm();
  return (
    <div>
      <Modal
        title="Basic Modal"
        open={isOpen}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
          <Button type="primary" onClick={handleCancel}>
            cancel
          </Button>,
        ]}
      >
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          form={form}
          layout="horizontal"
        >
          {generateForm()}
        </Form>
      </Modal>
    </div>
  );
};
