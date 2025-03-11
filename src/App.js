// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [vvalue, setValue] = useState('');

//   const handleDelete = () => {
//     setValue((prevValue) => prevValue.slice(0, -1));
//   };

//   const handleEvaluate = () => {
//     try {
//       setValue(eval(vvalue).toString());
//     } catch (error) {
//       setValue("Error"); // Handle invalid expressions
//     }
//   };

//   return (
//     <div className="container">
//       <div className="calculator">
//         <form>
//           <div>
//             <input type="text" value={vvalue} readOnly />
//           </div>
//           <div>
//             <input type="button" value="AC" onClick={() => setValue('')} />
//             <input type="button" value="DE" onClick={handleDelete} />
//             <input type="button" value="." onClick={e => setValue(vvalue + e.target.value)} />
//             <input type="button" value="/" onClick={e => setValue(vvalue + e.target.value)} />
//           </div>
//           <div>
//             <input type="button" value="7" onClick={e => setValue(vvalue + e.target.value)} />
//             <input type="button" value="8" onClick={e => setValue(vvalue + e.target.value)} />
//             <input type="button" value="9" onClick={e => setValue(vvalue + e.target.value)} />
//             <input type="button" value="*" onClick={e => setValue(vvalue + e.target.value)} />
//           </div>
//           <div>
//             <input type="button" value="4" onClick={e => setValue(vvalue + e.target.value)} />
//             <input type="button" value="5" onClick={e => setValue(vvalue + e.target.value)} />
//             <input type="button" value="6" onClick={e => setValue(vvalue + e.target.value)} />
//             <input type="button" value="+" onClick={e => setValue(vvalue + e.target.value)} />
//           </div>
//           <div>
//             <input type="button" value="1" onClick={e => setValue(vvalue + e.target.value)} />
//             <input type="button" value="2" onClick={e => setValue(vvalue + e.target.value)} />
//             <input type="button" value="3" onClick={e => setValue(vvalue + e.target.value)} />
//             <input type="button" value="-" onClick={e => setValue(vvalue + e.target.value)} />
//           </div>
//           <div>
//             <input type="button" value="00" onClick={e => setValue(vvalue + e.target.value)} />
//             <input type="button" value="0" onClick={e => setValue(vvalue + e.target.value)} />
//             <input type="button" className="equal" value="=" onClick={handleEvaluate} />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    <Router>
      
        <nav> <Link to="/cal">Open Calculator</Link> </nav>
        <Routes> <Route path="/cal" element={<Calculator />} /> </Routes>
     
    </Router>
  );
}

export default App;
