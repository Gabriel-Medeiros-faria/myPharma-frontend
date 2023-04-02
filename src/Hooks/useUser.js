import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function UseUser(){
    return useContext(AuthContext)
}