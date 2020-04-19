import React,{useState} from 'react'
// function Todoitems (props){
//     return (
//         <p><label>
//             <input type="checkbox"/>
//             <span>{props.text}</span>
//         </label></p>
//     )
// }
// class TodoForm extends React.Component {
//     constructor(){
//         super()
//         this.state={
//             items: []
//         }
//     }
//     addItem() {
//         var itemArray = this.state.items;
//         const inpVal = this.input.value;
//         itemArray.push(
//             {
//             text: inpVal,
//             }
//         );
//         this.setState({
//             items: itemArray
//         });
//         this.input.value = "";
//     }
//     change(e){
//         e.preventDefault();
//     }
//   render () {
//     return (
//         <div className="todoListMain">
//         <div className="header">
//         <h1>Todo List</h1>
//         <form onSubmit={this.change}>
//             <input type="text" ref={(a) => this.input = a} placeholder="enter task"></input>
//             <button type="submit" onClick={this.addItem.bind(this)}>add</button>
//         </form>
//         {this.state.items.map(item =><Todoitems {...item} key={item.text}></Todoitems>)}
//         </div>
//     </div>
//     )
//   }
// }
function TodoForm(){
    const [todos, setTodos] = useState([
        {
          content: 'Pickup dry cleaning',
          isCompleted: true,
        },
        {
          content: 'Get haircut',
          isCompleted: false,
        },
        {
          content: 'Build a todo app in React',
          isCompleted: false,
        }
    ]);
    const [inValue, setinValue] = useState('');
    function toggleTodoCompleteAtIndex(index) {
        const temporaryTodos = [...todos];
        temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
        setTodos(temporaryTodos);
    }
    function addItem(inValue,todos){
        const itemArray=[...todos];
        var flag=true;
        itemArray.forEach((item)=>{
            if(item.content==inValue){
                flag=false;
            }if(flag==false){
                flag=false;
            }else{
                flag=true;
            }
        })
        if(flag){
            itemArray.push({
                content: inValue,
                isCompleted: false
            })
            setTodos(itemArray);
        }else{
            alert("重复")
        }
        document.getElementById('inval').value="";
    }
    function getValue(e) {
        setinValue(e.target.value);
    }
    function change(e){
        e.preventDefault();
    }
    
    return (
        <div className="todoListMain">
        <h1>Todo List</h1>
            <form className="todo-list" onSubmit={e=>change(e)}>
                <div className="todo_add">
                    <input type="text" id="inval" placeholder="enter task" onChange={e=>getValue(e)}></input>
                    <button type="button" onClick={() => addItem(inValue,todos)}>add</button>
                </div>
                <ul>
                    {todos.map((todo, i) => (
                    <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`} key={todo.content}>
                    <div className="checkbox" onClick={() => toggleTodoCompleteAtIndex(i)}>
                        {todo.isCompleted && (<span>&#x2714;</span>)}   
                    </div>
                    <p className="todo_text">{todo.content}</p>
                    </div>
                    ))}
                </ul>
            </form>
        </div>
      );
}
export default TodoForm
