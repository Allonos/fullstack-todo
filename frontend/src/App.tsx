import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import TodoDetailPage from "./pages/TodoDetailPage.tsx";
import CreateTodo from "./pages/CreateTodo.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import { useCheckAuthServiceQuery } from "./services/react-query/checkAuth/query/useCheckAuthServiceQuery.tsx";
import { Toaster } from "react-hot-toast";
import TodoListSkeleton from "./components/ui/skeletons/TodoListSkeleton.tsx";

function App() {
  const { data: authUser, isPending: isCheckingAuth } =
    useCheckAuthServiceQuery();

  if (isCheckingAuth) {
    return <TodoListSkeleton />;
  }
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/todo/:id"
          element={authUser ? <TodoDetailPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/create"
          element={authUser ? <CreateTodo /> : <Navigate to="/login" />}
        />
      </Routes>

      <Toaster />
    </Layout>
  );
}

export default App;
