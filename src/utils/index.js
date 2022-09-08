import React from "react";
import { componentMapping, formSchema } from "../components/forms/data";
import Form from "antd/lib/form";

export const generateForm = () => {
  return (
    <>
      {formSchema.map((item, index) => {
        const FormItem = componentMapping[item.component];
        if (item.component === 'range_picker') {
            item.name = "date"
        }

        return (
          <Form.Item key={item.label} label={item.label} name={item.name}>
            <FormItem {...item} />
          </Form.Item>
        );
      })}
    </>
  );
};
