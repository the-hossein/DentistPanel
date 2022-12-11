import styled from "styled-components";

export const ReserveTableEl = styled.div`
  direction: rtl;
  width: 100%;
  height: 400px;
  display: block;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 1px;
    border-radius: 10px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    height: 2px;
    width: 2px;
    border-radius: 10px;
    background-color: var(--gray);
  }
  ::-webkit-scrollbar-track {
    /* 	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    thead {
      tr {
        border-bottom: 1px solid var(--primary-light);
        th {
          text-align: right;
          color: var(--primary-pen);
          padding: 1rem 0.5rem;
          margin: 0px;
        }
      }
    }
    tbody {
      tr {
        display: table-row;
        border-bottom: 1px solid var(--primary-light);
        margin-bottom: 1.5rem;

        td {
          color: var(--primary-pen);
          padding: 0.5rem 0.5rem;
          margin: 0px;
          :first-child {
            div {
              display: flex;
              justify-content: start;
              align-items: center;
              svg {
                color: var(--primary-pen);
              }
              p {
                font-size: 12pt;
                margin-right: 12px;
                color: var(--primary-pen);
              }
            }
          }
        }
      }
    }
  }
`;
