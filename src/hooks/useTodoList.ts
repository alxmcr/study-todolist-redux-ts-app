import { useSelector } from "react-redux";
import { IRootState } from "../store/reducers";

export default function useTodoList() {
    return useSelector((state: IRootState) => state.todoList);
};