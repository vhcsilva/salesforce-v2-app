import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
`

export const Aside = styled.aside`
  flex: 7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 50px 20px 40px 20px;

  color: #2d3567;
`

export const Main = styled.main`
  flex: 6;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;
  background-color: #2d3567;
  background-attachment: fixed;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  color: #2d3567;

  padding: 15px;
  min-width: 400px;
  min-height: 450px;
  border-radius: 2px;
`

export const Welcome = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`

export const Description = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: 500;
`

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`

export const DeliveryIllustration = styled.img`
  max-width: 770px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`

export const Input = styled.input`
  margin-bottom: 20px;

  font-weight: bold;
  color: #90a4ae;

  height: 40px;
  border-radius: 3px;
  padding: 0 16px;
  background-color: #eceff1;
  border: 0;

  ::placeholder {
    color: #90a4ae;
  }
`

export const Button = styled.button`
  height: 50px;
  border-radius: 3px;
  font-weight: bold;
  background-color: #febf28;
  color: #2d3567;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
`
