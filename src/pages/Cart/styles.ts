import styled from 'styled-components';
import { lighten } from 'polished';
import { colors } from '../../styles/themes';

export const Body = styled.div`
    margin-bottom: 12%;
`;

export const Titulo = styled.div`

h2 {
    font-size: 1.6rem;
    font-weight: 600;
    margin: 2%;
}
`;

export const Voltar = styled.div`

    a {
        font-size: 1.1rem;
        margin-left: 2%;

        &:hover {
            text-decoration: underline;
            font-weight: 600;
        }
    }

`;

export const DivFlex = styled.div`
  display: flex;
`;


export const Vazio = styled.div`
  text-align: center;
  padding: 7% 0%;

  p {
    font-size: 2rem;
    margin-bottom: 4%;
  }

  a {
    border: none;
    font-weight: 500;

    button {
        padding: 10px 60px;
        border: none;
        background-color: ${colors.principal};
        color: #fff;
        font-size: 1.6rem;

        &:hover {
            transition: 0.5s;
            background-color: ${props => lighten(0.07, colors.principal)};
            cursor: pointer;
        }
    }
  }

`;

export const Div = styled.div`
    border-bottom: 1px solid #f1f1f1;
    /* width: 38%; */
    margin: 2%;
    margin-left: 5%;

    .remove {
        display: flex;
        justify-content: right;

        button {
            padding: 2px 14px;
            margin-bottom: 2%;
            font-weight: 500;

            &:hover {
                box-shadow: 0px 2px 4px #000;
                border-radius: 8px;
                color: red;
            }    
        }
    }
`;

export const Detalhes = styled.section`
  height: 25rem;
  flex-direction: column;
  background-color: #d3d3d3;
  margin-top: 2%;
  margin-left: 25%;

  .details {
    text-align: start;
    margin-left: 2rem;
    margin-top: 2rem;

    h3 {
        font-size: 1.563rem;
        padding-bottom: 9%;
        margin-bottom: 9%;
        width: 91%;
        border-block-end: 1px solid #f1f1f1;
    }
    p {
        width: 91%;
        margin-top: 10%;
        margin-bottom: 8.5%;
        padding: 8% 0;
        border-block-end: 1px solid #f1f1f1;
        border-top: 1px solid #f1f1f1;
    }
    b {
        font-size: 1.5rem;

        span {
            margin-left: 50%;
        }
    }
  }

  .checkout {
    margin-top: 20%;

    button {
        font-size: 1rem;
        font-weight: 900;
        padding: 1.5rem 8.75rem;
        border: none;
        background-color: ${colors.principal};
        color: white;

        &:hover {
            transition: 0.5s;
            background-color: ${props => lighten(0.07, colors.principal)};
            cursor: pointer;
        }
    }
  }

`;

export const Ul = styled.ul`
    font-size: 1rem;

    li {
        display: flex;
        flex-direction: row;
        padding: 2% 0;
        /* margin-bottom: 2%; */
        /* border-block-end: 1px solid #f1f1f1; */

        p {
           margin-bottom: 0.7%;
        }
    }

    img {
        width: 6rem;
        height: 6rem;
        border: 1px solid ${colors.bgButton};
        border-radius: 15px;
    }

    .strings {
        width: 35vw;
        margin-left: 1%;

        /* div {
           margin-left: 1%;
        } */

        button {
            background-color: ${colors.fundo};
            padding: 2px 8px;
            padding-top: 1px;
            border: 1px solid ${colors.bgButton};
            border-radius: 5px;
        }

        .less { 
            padding: 2px 10px;
            padding-top: 1px;
            margin-left: 1%;
        }

        span {
            margin: 0 1.5%;
        }
    }

`;