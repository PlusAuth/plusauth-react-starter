export default function Unauthorized() {
  return (
    <div className="container">
      <p>You must log in to view the page</p>
      <button className="btn btn-primary" onClick={() => window.$auth.login()}>Log in</button>
    </div>
  )
}
