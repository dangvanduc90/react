import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Welcome from './Welcome';
// import Comment from './Comment';
// import Clock from './Clock';
// import Toggle from './Toggle';
import registerServiceWorker from './registerServiceWorker';

/* ======================================= */
// function stick() {
//     const element = (
//         <div>
//             <h1>
//                 Hello world
//             </h1>
//             <h2>
//                 It is {new Date().toLocaleTimeString()}
//             </h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }
// setInterval(stick, 1000);
/* ======================================= */

/* ======================================= */
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= */
// ReactDOM.render(
//     <Welcome name="Sara Janara" />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= */
// const author = {
//     avatarUrl: "http://placekitten.com/g/64/64",
//     name: "dangduc"
// };
// ReactDOM.render(
//     <Comment
//         text="I hope you enjoy learning React!"
//         date={new Date().toLocaleDateString()}
//         author={author}
//     />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= */
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= */
// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= */
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
//
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
// ReactDOM.render(
//     <Greeting isLoggedIn={true} />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= */
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
//
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
//
// class LoginControl extends React.Component{
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }
//
//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }
//
//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }
//
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         const button = isLoggedIn ? (
//             <LogoutButton onClick={this.handleLogoutClick} />
//         ) : (
//             <LoginButton onClick={this.handleLoginClick} />
//         );
//
//         return <div>
//             <Greeting isLoggedIn={isLoggedIn}/>
//             {button}
//         </div>
//     }
//
// }
//
// function LoginButton(props) {
//     return <button onClick={props.onClick}>Login</button>
// }
// function LogoutButton(props) {
//     return <button onClick={props.onClick}>Logout</button>
// }
//
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= Inline If-Else with Conditional Operator */
// function Mailbox(props) {
//     const unReadMessages = props.unReadMessages;
//     return (
//         <div>
//             <div>{unReadMessages.length > 0 &&
//                 <h2>
//                     You have {unReadMessages.length} unread messages
//                 </h2>
//             }</div>
//         </div>
//     )
// }
// const msg = [
//     'React',
//     'Node',
//     'Php'
// ];
// ReactDOM.render(
//     <Mailbox unReadMessages={msg} />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= Preventing Component from Rendering */
// function WarningBanner(props) {
//     if (!props.warn) {
//         return null; // important
//     }
//     return (
//         <div className="warning">
//             Warning
//         </div>
//     )
// }
// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {showWarning: false};
//         this.handleShowWarning = this.handleShowWarning.bind(this);
//     }
//
//     handleShowWarning() {
//         this.setState(prevState => ({
//             showWarning: !prevState.showWarning
//         }));
//     }
//
//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning} />
//                 <button onClick={this.handleShowWarning}>
//                     {this.state.showWarning ? "Hide" : "Show"}
//                 </button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <Page />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= Rendering Multiple Components */
// function ListItem(props) {
//     return (
//         <li>{props.value}</li>
//     );
// }
//
// function NumberList(props) {
//     const numbers = props.numbers;
//     const list = numbers.map((number) =>
//         <ListItem key={number.toString()} value={number}/>
//     );
//
//     return (
//         <ul>
//             {list}
//         </ul>
//     )
// }
//
// const numbers = [
//     11,
//     22,
//     33,
//     44
// ];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= */
// function Item(props) {
//     return (
//         <li>{props.title}</li>
//     )
// }
// function Detail(props) {
//     return (
//         <div>
//             <h5>{props.title}</h5>
//             <h6>{props.content}</h6>
//         </div>
//     )
// }
// function Blog(props) {
//     const blogs = props.blogs;
//     const list = blogs.map((blog) =>
//         <Item key={blog.id} title={blog.title} />
//     );
//     const detail = blogs.map((blog) =>
//         <Detail key={blog.id} title={blog.title} content={blog.content} />
//     );
//     return (
//         <div>
//             <ul>
//                 {list}
//             </ul>
//             <hr/>
//             <div>
//                 {detail}
//             </div>
//         </div>
//     )
// }
// const blogs = [
//     {id: 1, title: "Pellentesque", content: "Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat."},
//     {id: 2, title: "Vestibulum", content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."},
//     {id: 3, title: "Donec", content: "Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."},
//     {id: 4, title: "Vivamus", content: "Vivamus suscipit tortor eget felis porttitor volutpat."},
// ];
// ReactDOM.render(
//     <Blog blogs={blogs} />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= form */
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isGoing: true, numberOfGuest: 2};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let value;
        let name = event.target.name;
        if (event.target.type === "checkbox") {
            value = event.target.checked
        } else {
            value = event.target.value;
        }
        this.setState({
            [name]: value
        });
        console.log([name], value);
    }

    render() {
        return (
            <form action="#">
                <label htmlFor="">Is Going:
                    <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange} />
                </label>
                <br/>
                <label htmlFor="">Is Going:
                    <input type="number" name="numberOfGuest" checked={this.state.numberOfGuest} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);
/* ======================================= */




registerServiceWorker();
