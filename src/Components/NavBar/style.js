import styled from "styled-components";

export const NavBarContainer = styled.aside`
  width: 350px;
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
      background-color: ${(props) =>
        props.buttonIsDisabled ? "#ffd3ca" : "#eb8f7a"};
      border-radius: 10px;
      padding: 15px 20px;
      color: #fff;
      cursor: ${(props) =>
        props.buttonIsDisabled ? "not-allowed" : "pointer"};
      font-size: 16px;
      font-weight: bold;
      transition: all 0.4s;
    }

    .radios {
      height: 50px;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      .radio-block {
        width: 49%;
        label {
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;

          border: 1px solid #eb8f7a;
          cursor: pointer;

          color: #666;
          transition: all 0.4s;

          &:hover {
            background-color: #ffd3ca;
            color: #666;
          }
        }

        input {
          display: none;

          &:checked ~ label {
            background-color: #eb8f7a;
            color: #fff;
          }
        }
      }
    }
  }

  .search-priority {
    display: flex;
    justify-content: space-between;
    /* width: 95%; */
    margin: 20px auto 0 auto;
    & > div {
      label {
        position: relative;
        display: flex;
        align-items: center;
        margin-left: 10px;

        &::before {
          content: "";
          display: block;
          margin-right: 5px;
          border-radius: 10px;
          width: 10px;
          height: 10px;
          border: 1px solid #eb8f7a;

          margin-bottom: 2px;
          transition: all 0.4s;
        }
      }

      input {
        display: none;

        &:checked ~ label::before {
          background-color: #eb8f7a;
        }
      }
    }

    div + div {
      margin-left: 0px;
    }
  }
`;
