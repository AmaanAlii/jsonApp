import ReactJson from "react-json-view";

export const EditableJson = ({ data, onEdit, onAdd }) => (
  <ReactJson
    src={data}
    onEdit={onEdit}
    onAdd={onAdd}
    theme="monokai"
    displayDataTypes={false}
    displayObjectSize={false}
    style={{ backgroundColor: "#2d2d2d" }}
  />
);
