import { useAuthStore } from "../../store/authUser";


function HomeScreen() {
  const { logout } = useAuthStore();
  return (
    <div>
      <p>Home Screen</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default HomeScreen;
