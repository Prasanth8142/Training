import { useState } from "react";
import Home from './12-02-2026/Task/Home'

import Profile from './12-02-2026/Task/Profile'
import Login from "./12-02-2026/Task/Login"
import Boy from "./13-02-2026/Boy";

function App() {
  const [page, setPage] = useState("home");   
  const [role, setRole] = useState("");

  return (
    <div>
      {/* {page === "home" && (
        <Home setPage={setPage} setRole={setRole} />
      )}

      {page === "login" && (
        <Login role={role} setPage={setPage} />
      )}

      {page === "profile" && (
        <Profile role={role} setPage={setPage} />
      )} */
      }<Boy/>
    </div>
  );
}

export default App;