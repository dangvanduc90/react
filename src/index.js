import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isGoing: true, numberOfGuest: 2};
//         this.handleChange = this.handleChange.bind(this);
//     }
//
//     handleChange(event) {
//         let value;
//         let name = event.target.name;
//         if (event.target.type === "checkbox") {
//             value = event.target.checked
//         } else {
//             value = event.target.value;
//         }
//         this.setState({
//             [name]: value
//         });
//     }
//
//     render() {
//         return (
//             <form action="#">
//                 <label htmlFor="">Is Going:
//                     <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange} />
//                 </label>
//                 <br/>
//                 <label htmlFor="">Is Going:
//                     <input type="number" name="numberOfGuest" checked={this.state.numberOfGuest} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         )
//     }
// }
// ReactDOM.render(
//     <NameForm />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= Containment */
// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//     );
// }
//
// function WelcomeDialog() {
//     return (
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">
//                 Welcome
//             </h1>
//             <p className="Dialog-message">
//                 Thank you for visiting our spacecraft!
//             </p>
//         </FancyBorder>
//     );
// }
// ReactDOM.render(
//     <WelcomeDialog />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= Containment */
// function SplitPane(props) {
//     return (
//         <div className="SplitPane">
//             <div className="SplitPaneLeft">
//                 {props.left}
//             </div>
//             <div className="SplitPaneRight">
//                 {props.right}
//             </div>
//         </div>
//     );
// }
// function Contacts() {
//     return <div className="Contacts">Contacts</div>;
// }
// function Chat() {
//     return <div className="Chat">Chat</div>;
// }
// function App() {
//     return (
//         <SplitPane left={<Contacts/>} right={<Chat/>} />
//     );
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= Specialization */
// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-blue'}>
//             <h1 className="Dialog-title">
//                 {props.title}
//             </h1>
//             <p className="Dialog-message">
//                 {props.desc}
//             </p>
//             {props.children}
//         </div>
//     );
// }
// class SingupDialog extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {login: ""};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSingUp = this.handleSingUp.bind(this);
//     }
//     handleChange(e) {
//         this.setState({login: e.target.value});
//     }
//     handleSingUp() {
//         alert("Welcome " + this.state.login + "!");
//     }
//     render() {
//         return (
//             <FancyBorder
//                 title="Praesent"
//                 desc="Praesent sapien massa, convallis a pellentesque nec, egestas non nisi." >
//                 <input type="text" value={this.state.login} onChange={this.handleChange} />
//                 <button onClick={this.handleSingUp}>Sing me up</button>
//             </FancyBorder>
//         )
//     }
// }
// ReactDOM.render(
//     <SingupDialog />,
//     document.getElementById('root')
// );
/* ======================================= */


/* ======================================= Thinking in React */
// const products = [
//     {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//     {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//     {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//     {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//     {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//     {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ];
// function ProductRow(props) {
//     return (
//         <tr>
//             <td style={props.product.stocked ? {color: "red"} : {}}>{props.product.name}</td>
//             <td>{props.product.price}</td>
//         </tr>
//     )
// }
// function ProductCategoryRow(props) {
//     const categories = props.categories;
//     return (
//         <tr align="middle">
//             <td className="productPrice" colSpan="2"><b>{categories}</b></td>
//         </tr>
//     )
// }
// class ProductTable extends React.Component {
//     render() {
//         const filterText = this.props.filterText;
//         const inStockOnly = this.props.inStockOnly;
//         let rows = [];
//         let last_category = null;
//         let products = this.props.products;
//         products.forEach((product) => {
//             if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
//                 return;
//             }
//             if (inStockOnly) {
//                 if (!product.stocked) {
//                     return;
//                 }
//             }
//             if (product.category !== last_category) {
//                 rows.push(<ProductCategoryRow key={product.category} categories={product.category} />)
//             }
//             last_category = product.category;
//             rows.push(<ProductRow key={product.name} product={product} />);
//         });
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th><b>Name</b></th>
//                         <th><b>Price</b></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rows}
//                 </tbody>
//             </table>
//         )
//     }
// }
// class SearchBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleFilterTextChangeSearch = this.handleFilterTextChangeSearch.bind(this);
//         this.handleInStockChangeSearch = this.handleInStockChangeSearch.bind(this);
//     }
//
//     handleFilterTextChangeSearch(e) {
//         this.props.onFilterTextChange(e.target.value);
//     }
//
//     handleInStockChangeSearch(e) {
//         this.props.onInStockChange(e.target.checked);
//     }
//
//     render() {
//         return (
//             <form action="">
//                 <input type="text" name="keyword" placeholder="Search.." onChange={this.handleFilterTextChangeSearch} value={this.props.filterText} />
//                 <p>
//                     <input type="checkbox" name="only_stock" onChange={this.handleInStockChangeSearch} checked={this.props.inStockOnly} />
//                     Only show products in stock
//                 </p>
//             </form>
//         )
//     }
// }
// class ProductTableWrapper extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filterText: '',
//             inStockOnly: false
//         };
//         this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//         this.handleInStockChange = this.handleInStockChange.bind(this);
//     }
//
//     handleFilterTextChange(filterText) {
//         this.setState({filterText: filterText});
//     }
//
//     handleInStockChange(inStockOnly) {
//         this.setState({inStockOnly: inStockOnly});
//     }
//     render() {
//         return (
//             <div>
//                 <SearchBar
//                     filterText={this.state.filterText}
//                     inStockOnly={this.state.inStockOnly}
//                     onFilterTextChange={this.handleFilterTextChange}
//                     onInStockChange={this.handleInStockChange}
//                 />
//                 <ProductTable
//                     products={products}
//                     filterText={this.state.filterText}
//                     inStockOnly={this.state.inStockOnly}
//                 />
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <ProductTableWrapper />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= Ref */
// class RefTest extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleOnChange = this.handleOnChange.bind(this);
//     }
//
//     handleOnChange(e) {
//         console.log(this.refs.username.value);
//     }
//
//     render() {
//         return (
//             <div>
//                 <input type="text" ref="username" onChange={this.handleOnChange} />
//                 <input type="text" ref="password" onChange={this.handleOnChange} />
//             </div>
//         );
//     }
// }
// ReactDOM.render(
//     <RefTest />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= form */
// class App extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             'txtUsername': 'dangduc90',
//             'txtPassword': '123456',
//             'slGender': 1,
//             'rdLanguage': 'vi',
//             'football': true,
//             'golf': true,
//         };
//         this.handeSubmit = this.handeSubmit.bind(this);
//         this.onHandleChange = this.onHandleChange.bind(this);
//     }
//
//     onHandleChange(e) {
//         let target = e.target;
//         let name = target.name;
//         let value = target.type === 'checkbox' ? target.checked : target.value;
//         // console.log(value);
//         this.setState({
//             [name]: value
//         })
//     }
//
//     handeSubmit(e) {
//         e.preventDefault();
//         console.log(this.state);
//     }
//     render () {
//         return (
//             <form onSubmit={this.handeSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="username">Username</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="txtUsername"
//                         aria-describedby="usernameHelp"
//                         placeholder="Enter username"
//                         value={this.state.txtUsername}
//                         onChange={this.onHandleChange}/>
//                     <small id="usernameHelp" className="form-text text-muted">We'll never share your username with anyone
//                         else.
//                     </small>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         name="txtPassword"
//                         value={this.state.txtPassword}
//                         placeholder="Password"
//                         onChange={this.onHandleChange}/>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="gender">Gender</label>
//                     <select
//                         className="form-control"
//                         id="gender"
//                         name="slGender"
//                         value={this.state.slGender}
//                         onChange={this.onHandleChange}>
//                         <option value={1}>Male</option>
//                         <option value={0}>Femail</option>
//                     </select>
//                 </div>
//                 <div className="rd-language">
//                     <p>Language</p>
//                     <div className="form-check">
//                         <input
//                             className="form-check-input"
//                             name="rdLanguage"
//                             type="radio"
//                             value="vi"
//                             checked={this.state.rdLanguage === 'vi'}
//                             onChange={this.onHandleChange} />
//                         <label className="form-check-label" htmlFor="vi">
//                             vi
//                         </label>
//                     </div>
//                     <div className="form-check">
//                         <input
//                             className="form-check-input"
//                             name="rdLanguage"
//                             type="radio"
//                             value="en"
//                             checked={this.state.rdLanguage === 'en'}
//                             onChange={this.onHandleChange} />
//                         <label className="form-check-label" htmlFor="en">
//                             en
//                         </label>
//                     </div>
//                     <div className="form-check">
//                         <input
//                             className="form-check-input"
//                             name="rdLanguage"
//                             type="radio"
//                             value="fr"
//                             checked={this.state.rdLanguage === 'fr'}
//                             onChange={this.onHandleChange} />
//                         <label className="form-check-label" htmlFor="fr">
//                             fr
//                         </label>
//                     </div>
//                 </div>
//                 <div className="ck-hobby">
//                     <p>Hobby</p>
//                     <div className="form-check">
//                         <input
//                             className="form-check-input"
//                             type="checkbox"
//                             name="golf"
//                             id="golf"
//                             value="Golf"
//                             checked={this.state.golf === true}
//                             onChange={this.onHandleChange} />
//                         <label className="form-check-label" htmlFor="golf">
//                             Golf
//                         </label>
//                     </div>
//                     <div className="form-check">
//                         <input
//                             className="form-check-input"
//                             type="checkbox"
//                             name="football"
//                             id="football"
//                             value="Football"
//                             checked={this.state.football === true}
//                             onChange={this.onHandleChange} />
//                         <label className="form-check-label" htmlFor="football">
//                             Football
//                         </label>
//                     </div>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         )
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );
/* ======================================= */

/* ======================================= */
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
/* ======================================= */




registerServiceWorker();
