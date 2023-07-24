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



