import {css} from 'lit';

export const inputStyles = css`
        input {
            margin:4px;
            border:1px solid rgb(241, 241, 241);
            padding:10px;
            color:rgb(61, 61, 61);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            outline:none;
            height: 35px;
            font-size:17px;
            width: 210px;
            background: #f6f7f8;
            box-shadow:  inset 3px 2px 5px #e1e4f0, inset -5px -5px 10px white;
            border-radius: 6px;
            box-sizing: border-box;
            transition: all 0.2s ease-in-out;
            appearance: none;
            -webkit-appearance: none;
          
        }
          input:focus{
            box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px  white;
        
          }
`