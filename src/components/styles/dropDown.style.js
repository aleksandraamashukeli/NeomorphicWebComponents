import {css} from 'lit';

export const dropDownStyles = css`

.neoDropDown{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    margin:5px;
    width:150px;
    border-radius:6px;
    background:#f6f7f8;
    box-shadow:   3px 2px 5px #e1e4f0,  -5px -5px 10px white;
    display:flex;
    flex-direction:column;
    align-items:center;
    transition: all 0.5s ease-in-out;
}
.neoDropDownBtn{
    width:100%;
    height: 40px;
    border-radius:6px;
    cursor: pointer;
    display:flex;
    color:#abd5f1;
    justify-content:center;
    align-items:center;
}
.neoDropDownList{
    width:100%;
    flex-direction:column;
    align-items:center;
    transform:scale(0);
    height:0;
    transition: all 0.2s ease-in-out;
}
.neoDropDown:hover{
    box-shadow:  inset 3px 2px 5px #e1e4f0, inset -5px -5px 10px white;
}
.neoDropDown:hover  .neoDropDownList{
    transform:scale(1);
    height:auto;
}
.neoDropDown:hover .neoDropDownBtn{
    box-shadow:  none;
}
.neoDropDownOption{
    margin:4px;
    height: 30px;
    width:90%;
    cursor: pointer;
    border-radius:6px;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.1s ease-in-out;
}
.neoDropDownOption:hover{
    background:#abd5f1;
    color:white;
    box-shadow:   2px 2px 5px #e1e4f0,  -3px -3px 10px white;
}
.selected{
    backrgound:red;
}
.unselected{
    
}
}

`