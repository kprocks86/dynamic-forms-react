import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import DatePicker from 'antd/lib/date-picker';
const { TextArea } = Input;
const { RangePicker } = DatePicker;


export const formSchema = [
  {
    name: "title",
    label: "Title",
    component: "text", //simple input https://ant.design/components/input/#header
  },
  {
    name: "title2",
    label: "Title2",
    component: "text", //simple input https://ant.design/components/input/#header
  },
  {
    name: "type",
    component: "select", // https://ant.design/components/select/#header
    label: "Type",
    options: [
      {
        label: "Generic",
        value: "generic",
      },
      {
        label: "Holiday",
        value: "holiday",
      },
    ],
  },
  {
    name: ["startDate", "endDate"],
    component: "range_picker", // https://ant.design/components/date-picker/#header, range Picker
    label: "Date",

  },
  {
    name: "description",
    label: "Description",
    component: "textarea", //simple input https://ant.design/components/input/#header, textArea
    props: ['']
  },
];

export const componentMapping = {
    text: Input,
    select: Select,
    range_picker: RangePicker,
    textarea: TextArea
}
