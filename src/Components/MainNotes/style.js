import styled from "styled-components";

export const MainNotesContainer = styled.main`
  flex: 1;
  margin-left: 30px;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    li.notepad-infos {
      background-color: #fff;
      box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      padding: 20px 20px 10px 20px;

      strong {
        display: block;
        font-size: 16px;
        color: #333;
      }

      div {
        display: flex;
        justify-content: space-between;

        div {
          color: #ffeae6;
          cursor: pointer;
          transition: all 0.4s;

          &:hover {
            color: #eb8f7a;
          }
        }
      }

      textarea {
        width: 100%;
        resize: none;
        padding: 7px;
        margin-top: 7px;
        margin-bottom: 5px;
        height: 130px;
        color: #666;
        border: 0;
        background-color: #fff;
        line-height: 17px;
      }

      span {
        color: #c4c4c4;
        cursor: pointer;
        transition: all 0.4s;
        &:hover {
          color: #eb8f7a;
        }
      }
    }

    li.priority {
      background-color: #eb8f7a;

      strong {
        color: #fff;
      }

      textarea {
        background-color: #eb8f7a;
        color: #fff;
      }

      div {
        div {
          color: #fff;
          transition: all 0.4s;
          &:hover {
            filter: brightness(30%);
          }
        }
      }

      span {
        color: #fff;
        transition: all 0.4s;
        &:hover {
          filter: brightness(30%);
        }
      }
    }
  }
`;
