import { createContext } from "react";

export let AuthContext = createContext({
	loggedIn: false,
});
