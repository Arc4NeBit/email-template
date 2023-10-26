import React from 'react';
import Button from '../components/Button';

  const buttonStyles = {
    backgroundColor: 'rgb(0, 0, 0)',
    color: '#fff',
    fontSize: 28,
    borderRadius: 30,
    outline: "rgb(0, 0, 0) solid 1px",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "none"
  };

  const sectionStyles = {
    display: "initial",
    textAlign: "center",
  };

function EmailRender() {
    return (
    <table>
        <h1>Below is a link to renew your subscription!</h1>
        <Button buttonStyles={buttonStyles} sectionStyles={sectionStyles} href={"https://youtu.be/xvFZjo5PgG0?si=BCCpSYtBFYJevnQ4"}>Renew</Button>
    </table>
    )
}

export default EmailRender;
