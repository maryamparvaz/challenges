import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import styled from "styled-components";
import { Checkbox } from "@mui/material";
import { useTaskManager } from "../../contexts/TaskManagerContext";

const Container = styled.div`
  padding: 2.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 1200px;
`;

const Btn = styled.div`
  font-size: 0.9rem;
`;

const Card = styled.div`
  padding: 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  align-items: center;
  background-color: #fff;
`;

const PriorityText = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ priority }) => {
    switch (priority) {
      case "High":
        return "red";
      case "Medium":
        return "blue";
      case "Low":
        return "orange";
      default:
        return "#000";
    }
  }};
`;

const Task = ({ item }) => {
  // Destructuring methods from the context
  const { handleDeleteItems, handleEdit, doneTasks, handleToggleDone } =
    useTaskManager();

  return (
    <Container>
      <Card>
        <div>
          <div style={{ color: "#91929e", fontSize: "15px" }}>Task</div>
          <div>{item.title}</div>
        </div>
        <div>
          <div style={{ color: "#91929e", fontSize: "15px" }}>Priority</div>
          <PriorityText priority={item.priority}>{item.priority}</PriorityText>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.1rem" }}>
          <button onClick={() => handleToggleDone(item.id)}>
            <Checkbox checked={doneTasks[item.id] || false} />
          </button>
          {doneTasks[item.id] && <Btn>Done</Btn>}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button onClick={() => handleEdit(item)}>
            <EditOutlinedIcon style={{ fontSize: 30 }} />
          </button>
          <button onClick={() => handleDeleteItems(item.id)}>
            <DeleteOutlinedIcon style={{ fontSize: 30, color: "red" }} />
          </button>
        </div>
        <div>
          <div style={{ color: "#91929e", fontSize: "15px" }}>Description</div>
          <div>{item.description}</div>
        </div>
      </Card>
    </Container>
  );
};

export default Task;
