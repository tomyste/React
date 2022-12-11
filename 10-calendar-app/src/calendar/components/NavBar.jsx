

export const NavBar = () => {
  return (
    <div className="navbar navbar-dar bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"/>
        &nbsp;
        Tomas
      </span>

      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"/>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  )
}
