import styled from 'styled-components'

export const RegisterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  justify-content: center;
  height: 90vh;
  width: 100vw;
`
export const RegisterImg = styled.img`
  height: 250px;
  width: 200px;
  margin-right: 20px;
`
export const FormDiv = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
`
export const FormHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 60px;
  text-align: center;
  color: #334155;
  font-weight: bold;
  margin-bottom: 20px;
`
export const LabelText = styled.label`
  font-family: 'Roboto';
  font-size: 20px;
  color: #475569;
  font-weight: 500;
`
export const InputDiv = styled.input`
  border-color: #334155;
  border-radius: 7px;
  height: 50px;
  font-family: 'Roboto';
  font-size: 18px;
  color: #475569;
  font-weight: 300;
  margin-bottom: 30px;
`
export const SelectDiv = styled.select`
  border-color: #334155;
  border-radius: 7px;
  height: 50px;
  font-family: 'Roboto';
  font-size: 20px;
  color: #475569;
  font-weight: 400;
  margin-bottom: 30px;
`
export const OptionEl = styled.option``

export const Button = styled.button`
  height: 50px;
  width: 200px;
  border-width: 0px;
  border-radius: 7px;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Errp = styled.p`
  color: red;
`
