import styled from 'styled-components'


export const CardWrapper = styled.li`

    background: #ffffff;
    border-radius: 6px;
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
  
        .category {
            font-size: 13px;
            text-transform: uppercase;
            color: #B9B0D1;
        }

        .actions-bar {
            margin-left: 10px;

        .delete-action {
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
        }
        .edit-action {
            cursor: pointer;
            color: rgb(0,0,0,0.5);
            font-size: 12px;
            font-weight: bold;
            margin-right: 10px;
        }
    }
    }
    


    .author-body {
        display: flex;
        align-items: center;
            .thumbnail {
            width: 25px;
            height: 25px;
            margin-right: 10px;
        }

            .author {
            font-size: 15px;
            color: #AEABB6;
        }
    }

    

    .date {
        font-size: 15px;
        color: #AEABB6;
    }

    .title-body {
        height: 100%;
        color: #C5C4CB;

        .title {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;  
            overflow: hidden;
            font-size: 25px;
        }
    }
   

`