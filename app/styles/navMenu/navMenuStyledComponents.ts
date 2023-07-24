import { styled } from "styled-components";


export const NavBarItem = styled.li`
  margin: 3px 0;
  padding: 10px 10px;
  background: none;
  color: var(--darkGray);
  font-size: 3rem;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);
  font-weight: 500;
  cursor: pointer;
  z-index: 1;
  width: 100%;
  background-color: var(--blue);
  color: var(--darkGray);
   &:hover {
    background-color: var(--yellow);
    color: var(--darkGray);
  }

@media (min-width: 576px) and (max-width: 991px) {
    font-size: 1.75rem;
    padding: 10px 20px;
}


`;