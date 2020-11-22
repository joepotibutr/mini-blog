import styled from 'styled-components'


export const AppWrapper = styled.div`
    max-width: 700px;
    margin: 0 auto;

    .wrapper {
        margin-top: 150px;

        .blog-list {
            list-style:none;
            display:grid;
            grid-template-columns: repeat(auto-fill, 210px);
            grid-template-rows: repeat(auto-fit,250px);
            grid-gap: 10px;
            height: 100vh;
            padding: 0;
            margin: 0;
        }
    }

`