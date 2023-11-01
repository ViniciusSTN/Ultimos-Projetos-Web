import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
  }
`;

export const ContainerPicture = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 30px 0;

  a {
    position: absolute;
    bottom: -15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: #fff;
    background: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const ProfilePicture = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: auto;
  position: relative;
  overflow: hidden;

  img {
    height: 180px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
