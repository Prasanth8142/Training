import React from "react";

function withMessage(WrappedComponent) {
  return function () {
    return (
      <>
        <h2>Welcome User</h2>
        <WrappedComponent />
      </>
    );
  };
}

function Home() {
  return <h3>Home Component</h3>;
}

const NewHome = withMessage(Home);

export default NewHome;