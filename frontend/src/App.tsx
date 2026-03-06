import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import TodoDetailPage from "./pages/TodoDetailPage.tsx";
import CreateTodo from "./pages/CreateTodo.tsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo/:id" element={<TodoDetailPage />} />
        <Route path="/create" element={<CreateTodo />} />
      </Routes>
    </Layout>
  );
}

export default App;
