import styled from "styled-components";

export const StyledMovieItem = styled.div`
  position: relative;
  width: 300px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  margin-bottom: 25px;
  transition: 0.4s;
`;

export const StyledMovieImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const StyledMovieInfo = styled.div`
  background: rgb(49, 49, 49);
  padding: 10px 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  min-height: 80px;
  line-height: 24px;
  span {
    background: rgb(15, 15, 15);
    padding: 7px;
    border-radius: 7px;
    &.red {
      color: red;
    }
    &.orange {
      color: orange;
    }
    &.green {
      color: rgb(33, 193, 93);
    }
  }
`;

export const StyledMovieOverview = styled.div`
  color: rgb(156, 156, 156);
  z-index: 1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  max-height: 100%;
  scroll-behavior: scroll;
  overflow: auto;
  -webkit-transform: translateY(0%);
    transform: translateY(0%);
    transition: 0.5s;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px !important;

  h1 {
    margin-bottom: 20px;
    color: white;
  }

  button {
    background: #a41046;
    width: 200px;
    padding: 10px 20px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1rem;
    border: none;
    color: white;
    font-weight: 600;
    border-radius: 4px;
    transition: all .3s;
    width: 100%;
    &:hover {
      background: #8b0b3a;
    }
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 5px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
  }
`;

export const StyledMovieButton = styled.button`
  padding: 10;
`;
