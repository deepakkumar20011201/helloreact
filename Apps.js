   
// const heading1= React.createElement("h1",{id: "title"},"Heading 1");
// const heading2= React.createElement("h2",{id: "title"},"Heading 2");


// const container=React.createElement("div",{id:"container1"},[heading1,heading2]);

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);



// const parent= React.createElement("div"
// ,{id:"parent"},
// React.createElement("div",{id:"child"},[
//     React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag"),
// ]);



const parent= React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"i am h1 tag"),
    React.createElement("h2",{},"i am h2 tag")
]),React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"i am h1 tag"),
    React.createElement("h2",{},"i am h2 tag")
])]
);


const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);