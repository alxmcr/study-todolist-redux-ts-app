import { useSelector } from "react-redux";
import { IRootState } from "../store/reducers";

export default function useTodos() {
    return useSelector((state: IRootState) => state.todos.todos);
};