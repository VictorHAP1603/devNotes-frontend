import styled from "styled-components";

export const NavBarContainer = styled.aside`
  width: 320px;
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 30px 20px;
  position: sticky;

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  form {
    margin-top: 30px;

    .input-block {
      margin-top: 20px;

      label {
        color: #acacac;
        font-size: 14px;
        font-weight: bold;
        display: block;
      }

      input,
      textarea {
        padding: 15px 10px;
        outline: none;
        position: relative;

        &:focus {
          border-bottom-color: #eb8f7a;
        }
      }

      input {
        width: 100%;
        height: 32px;
        font-size: 14px;
        color: #666;
        border: 0;
        border-bottom: 1px solid #eee;
      }

      textarea {
        margin-top: 7px;
        width: 100%;
        resize: none;
        height: 200px;
        font-size: 14px;
        color: #666;
        border: 0;
        border-bottom: 1px solid #eee;

        background-color: #fff;
      }
    }

    button {
      width: 100%;
      border: 0;
      margin-top: 30px;
      background-color: #ffd3ca;
      border-radius: 10px;
      padding: 15px 20px;
      color: #fff;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
