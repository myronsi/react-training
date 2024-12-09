ReactDOM.render(React.createElement('input', {
   placeholder: "Help Text",
   onClick: () => console.log("Clicked"),
   onMouseEnter: () => console.log("Mouse Over"),
}), document.getElementById("app"))

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")
const helpText = "Help Text!"

const elements = (<div>
    <h1>Hello</h1>
    <input placeholder={helpText}
    onClick={inputClick} onMouseEnter={mouseOver} />
    <p>{helpText == "Help Text!" ? "True" : "False"}</p>
    </div>)

const app = document.getElementById("app")

ReactDOM.render(elements, app)