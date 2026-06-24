
function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">
        URL Shortener
      </h1>

    <button className="bg-white text-blue-600 px-4 py-2 rounded" onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/";
      }}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;