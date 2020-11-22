import styled from 'styled-components'


export const BlogFormWrapper = styled.form`
    input {
        height: 30px;
        width: 100%;
        border-radius: 5px;
        border-style: solid;
    }
    textarea {
        border-radius: 5px;
        border: 2px solid gray;
        height: 50px;
    }
    .submit-button {
        margin-top: 30px;
        
        > button {
            cursor: pointer;
            height: 40px;
            width: 100%;
            border: 2px solid rgb(0,0,0,0.1);
            font-weight: bold;
            color: rgb(0,0,0,0.5);
            border-radius: 6px;
        }
    }

`