import { styled } from "styled-components";

export const base = 0;
export const sm = "576px";
export const md = "768px";
export const lg = "992px";
export const xl = "1200px";


export const CollapsibleContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${md}) {
    flex-direction: column;
  }
`;

export const NavBarItem = styled.li`
  margin: 5px 0;
  padding: 5px 10px;
  background: none;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  z-index: 1;
  width: 100%;
  background-color: var(--lighterGray);
  color: var(--darkGray);
   &:hover {
    background-color: var(--orange);
    color: var(--darkGray);
  }
  
`;
