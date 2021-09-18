import {css} from 'lit';

export const checkboxStyles = css`
    .checkbox {
  display: grid;
  cursor:pointer;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font-size: 1.6rem;
  color: #333;
}
.checkbox__control {
  display: inline-grid;
  width: 0.8em;
  background: #f6f7f8;
  height: 0.8em;
  box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px  white;
  border-radius: 6px;
  border: 1px solid rgb(223, 221, 221);
}
 .checkbox__control svg {
    transition: transform 0.1s ease;
    transform: scale(0);
    transform-origin: ;
  }
  .checkbox__input {
  display: grid; 
  grid-template-areas: "checkbox";
  }
  .checkbox_input input{
    display:none;
}
.checkbox__control:focus{
    background:red;
}
.checkbox_hid{
    display:none;
}
input:focus   .checkbox__control {
      box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em red;
    }
input:checked  +.checkbox__control svg   {
      transform: scale(1);
}


`