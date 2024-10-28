// ReactDOM.render(<p>Hello World from React</p>, document.getElementById("root"));

ReactDOM.render(<div>
    <h1>React Course</h1>
    <p>We will learn react in this course</p>
</div>, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div>
    <h1>React Course</h1>
    <p>We will learn react in this course</p>
</div>)