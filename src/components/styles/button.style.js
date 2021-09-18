import {css} from 'lit';

export const buttonStyles= css`

button{
            padding:10px;
            border:none;
            outline:none;
            margin:7px;
            color:#4793F8;
            font-weight: bold;
            min-width:120px;
            max-width:300px;
            word-break:break-word;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            border-radius:15px;
            transition:all 0.3s ease;
            cursor:pointer;
            box-shadow:3px 3px 4px rgba(122, 122, 122, 0.377), -4px -4px 6px  white,inset 3px 3px 4px #2b76d8;
            background:#4793F8;
            color:white;
        }
        
        button:hover{
            background:#f6f7f8;
            color:#4793F8;
            transform:scale(1.1);
            box-shadow: inset 2px 2px 2px #BABECC, inset -2px -2px 2px  #f5f5f5 ;
        }
`