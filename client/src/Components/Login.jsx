const Login = () => {
  return (
    <>
        <form action="/api/login" method="POST">
            <input name="email" type="text"/>
            <input name="password" type="password"/>
            <button onClick={HandleLogin}>Submit</button>
        </form>
    </>
  )
}

const HandleLogin = (e) => {
    e.preventDefault();
}

export default Login