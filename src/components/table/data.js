import { Typography } from "antd";

export const columns = (onClick) => [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    sortDirections: ["descend"],
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Start date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "End date",
    dataIndex: "endDate",
    key: "endDate",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    render: (_, record) => {
      return  (
        <Typography.Link onClick={() => onClick(record)}>
          Edit
        </Typography.Link>
      );
    },
}
];
export const initData = [
  {
    id: "1",
    title: "Start of the year",
    type: "generic",
    startDate: "2022-01-01", //format in YYYY-MM-DD
    endDate: "2022-12-01", //format in YYYY-MM-DD
    description: "This is an event about the start of this year",
  },
];
