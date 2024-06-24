{/* <div id="parent">
    <div id='child'>
        <h1>I'm h1 Tag</h1>
        <h2>I'm h2 Tag</h2>
    </div>
</div> */}


const parent = React.createElement(
    'div',
    {id : 'parent'},
    React.createElement(
        'div',
        {id : 'child'},
        [React.createElement('h1',{},"i'm h1 Tag"),React.createElement('h2',{},"i'm h2 Tag")]
    )
);


const heading = React.createElement(
    'h1',
    {id : "heading",
        xyz : "abc"
    },
    "Hello World!"
);

const root = ReactDOM.render(document.getElementById('root'));

root.render(heading);
