import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  // Ambil User dari state
  const user = useSelector((state) => state.userState.user);

  // Jika user ada, tampilkan element, jika tidak kembalikan ke halaman Login
  return user ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
