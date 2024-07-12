import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoaderSpin = styled.div`
  padding: 16px;
  border: 6px solid var(--secondary-dark);
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  border-radius: 50%;
  width: 100px;
  height: 100px;

  animation: spin 1s infinite;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {
  return (
    <LoaderContainer>
      <LoaderSpin></LoaderSpin>
    </LoaderContainer>
  );
}
