import React from "react";
import { Checkbox } from "react-bootstrap";

const TaskItem = ({ item, onClick }) => {
  const { isChecked, id } = item;
  return (
    <tr>
      <td>
        <Checkbox checked={isChecked} onChange={() => onClick(id)} inline>
          {item.name}
        </Checkbox>
      </td>
    </tr>
  );
};

export default TaskItem;
