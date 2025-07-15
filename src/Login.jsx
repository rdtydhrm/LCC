

const Login = () => {
  return (
    <div className="trifitur-container  bg-white  min-h-[81vh] h-screen w-screen [margin:9.5%] flex items-center justify-center">
        <h1>anjay</h1>
    <div className="login-container bg-gray-800 text-white p-6 rounded shadow-md max-w-sm mx-auto">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}
export default Login;