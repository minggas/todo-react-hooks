import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
	--main-bg-color: rgb(250,250,250);
}

@import url('https://fonts.googleapis.com/css?family=Roboto');
*,
*::after,
*::before {
  box-sizing: inherit;
}

html, body {
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button, input[type=submit], input[type=checkbox] {
	cursor: pointer;
}
#root {
	max-width: 500px;
	margin: 0 auto;
	border-radius: 5px;

input:focus{
	background-color: rgb(210,210,210);
}

.wrap {
  width: 90%;
  min-width: 400px;
  margin: 5px auto;
  height: 40vh;
}

form {
  width: 100%;
}

button:active {
  background-color: aqua;
}

.preview {
  padding: 0.5rem 1rem;
}


textarea {
  width: 100%;
  height: 100%;

}

hr {
  height: 3px;
  border-radius: 5px;
  background-color: hsla(0, 0%, 50%, 0.4);
  border: none;
}

blockquote {
  border-left: 3px solid hsl(210, 13%, 50%);
  color: #224b4b;
  padding-left: 5px;
  margin-left: 25px;
}

pre {
  background: hsl(210, 0%, 83%);
}

code {
  background: hsl(210, 0%, 83%);
  padding: 2px 4px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
}

table {
  border-collapse: collapse;
}

table td,
table th {
  border: 1px solid hsl(210, 0%, 87%);
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: hsl(210, 0%, 93%);
}

table tr:hover {
  background-color: hsl(210, 0%, 85%);
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: hsl(210, 13%, 50%);
  color: hsl(0, 0%, 100%);
}

.footer-icons svg {
  transition: all 0.5s ease-out;
}

.footer-icons svg:hover {
  fill: blue;
}

.tab-list {
  border-bottom: 1px solid #ccc;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.tab-list-item {
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  text-align: center;
  cursor: pointer;
}

.tab-list-active {
  background-color: white;
  border: solid #ccc;
  border-width: 1px 1px 0 1px;
}

.tab-content {
  padding: 0.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

}
`;

export default GlobalStyle;
