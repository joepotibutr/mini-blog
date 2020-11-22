import styled from 'styled-components'


export const AppWrapper = styled.div`
    max-width: 700px;
    margin: 0 auto;

    .wrapper {
        margin-top: 150px;

        .blog-list {
            list-style:none;
            display:grid;
            grid-template-columns: repeat(auto-fill,minmax( 210px,1fr));
            grid-template-rows: repeat(auto-fit,250px);
            grid-gap: 10px;
            height: 100vh;
            padding: 0;
            margin: 0;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;

            .author-name {
                color: #ffffff;
                display:flex;
                align-items:center;


                .logout-button {
                    cursor: pointer;
                    font-size: 16px;
                    color: #333333;
                    margin-left: 20px;
                }

                > h1 {
                    background: #333333;
                    padding: 10px;
                    border-radius: 6px;
                }
            }

            .button-wrapper {
                .create-blog-btn {
                    cursor: pointer;
                    height: 50px;
                    width: 130px;
                    border: 2px solid rgb(0,0,0,0.1);
                    font-weight: bold;
                    color: rgb(0,0,0,0.5);
                    border-radius: 6px;
                }
            }
        }

       
        
    }

`