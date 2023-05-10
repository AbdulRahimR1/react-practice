
// Conditional rendering using if statement
// function Things({item, aredone}){
//     if (aredone ) {
//         return<li>{item}&#x2713;</li>
//     }
//     return <li>{item}</li>
// }

// Conditional rendering using ? ternary operator and props
// Passing data from Parent to child trough props
// function Things(props) {
//     return <li>{props.aredone ? props.item + "✓" : props.item}</li>
// }

// Conditional rendering using AND && operator
// const x = 1
// x>2 && x<10
// function Things({ item, aredone }) {
//   return (
//     <li>
//       {item}
//       {aredone && "✓"}
//     </li>
//   );
// }

// Conditional rendering using variables
function Things({item, aredone}){

    let packing=item;
if (aredone) {
    packing =<b>{item + "✓"}</b>
}
    return<li>{packing}</li>
}
export default function Practice() {
  return (
    <>
      <h1>Things which are necessary for travelling</h1>
      <ul>
        <Things item={"Bag"} aredone={true} /></ul>
        <ul>       
        <Things item={"Water Bottle"} aredone={true} /></ul>
        <ul>  <Things item={"Tent"} aredone={false} /></ul>
        <ul>   <Things item={"Toolbox"} aredone={false} />
      </ul>
    </>
  );
}
