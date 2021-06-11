export const Card = (props) => {
  return (
    <>
      {/* <div className="row text-center align-items-end"> */}
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="bg-white p-5 rounded-lg shadow">
            <h1 className="h6 text-uppercase font-weight-bold mb-4">
              {props.planName}
            </h1>
            <h2 className="h1 font-weight-bold">
              {props.currencyPrefix}
              {props.rate}
              <span className="text-small font-weight-normal ml-2">
                / month
              </span>
            </h2>

            <div className="custom-separator my-4 mx-auto bg-primary"></div>

            <ul className="list-unstyled my-5 text-small text-left">
              {props.features.map((data) => {
                if (data.availability === true) {
                  return (
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i>
                      {data.title}
                    </li>
                  );
                }
                return (
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>{data.title}</del>
                  </li>
                );
              })}
            </ul>
            <a
              href="https://google.com"
              className="btn btn-primary btn-block p-2 shadow rounded-pill"
            >
              Subscribe
            </a>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};
