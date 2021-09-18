import {css} from 'lit';

export const progressBarStyles = css`
.progressBar{
    width:100%;
    height:12px;
    margin:5px;
    border-radius:30px;
    display:flex;
    align-items:center;
    background: #f6f7f8;
    box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px  white;
    overflow: hidden;
}
.progressBarLine{
    height: 6px;
    margin:2px;
    border-radius:5px;
    background:#abd5f1;
    box-shadow:   3px 2px 5px #e1e4f0,  -5px -5px 10px white;
    }
`