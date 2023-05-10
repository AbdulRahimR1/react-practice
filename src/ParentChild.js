
// This is the method of passing data from Parent to Child
// function Childs(props){
// return(
//     <div>
//         <h2>{props.name + " " + props.age}</h2>
//     </div>
// )
// }
// export default function Parents (){
//     return(
//         <div>
//             <Childs name="karr" age = "45"/>
//         </div>
//     )
// }


// Data Passing from Child to Parent
export default function Childs(){
    return(
  <>
     <Parents  items={{ fullName :"A good vehicle", age : "45"}}/>
   </>
    )
    }
     function Parents (props){
        return(
            <div >
                {props.items.fullName}
            </div>
        );
    }

    