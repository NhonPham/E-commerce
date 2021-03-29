import styled from "styled-components";

const LoginWrapper = styled.div`
  .login-page {
    max-width: 500px;
    border: 2px solid rgb(3, 165, 206);
    border-radius: 5px;
    padding: 30px;
    margin: 50px auto;
  }

  .login-page h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #555;
  }

  .login-page form input,
  .login-page form button {
    width: 100%;
    height: 40px;
    margin: 10px 0;
    padding: 0 5px;
    outline: 1px solid rgb(3, 165, 206);
  }

  .login-page form .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .login-page form button {
    width: 150px;
    background: rgb(3, 165, 206);
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .login-page form a {
    color: orange;
    letter-spacing: 1.3px;
    text-transform: uppercase;
  }
`;

export default LoginWrapper;