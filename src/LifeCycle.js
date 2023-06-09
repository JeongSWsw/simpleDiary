// import React, { useEffect, useState } from "react";

// const LifeCycle = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     console.log("Mount!");
//   }, []);

//   useEffect(() => {
//     console.log("Update!");
//   }); // depth를 전달하지 않으면 Update마다 호출됨

//   useEffect(() => {
//     console.log(`count is update : ${count}`);
//     if (count > 5) {
//       alert("count가 5를 넘었습니다. 따라서 1로 초기화 합니다.");
//       setCount(1);
//     }
//   }, [count]);

//   useEffect(() => {
//     console.log(`text is update : ${text}`);
//   }, [text]);

//   return (
//     <div style={{ padding: 20 }}>
//       <div>
//         {count}
//         <button
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           +
//         </button>
//       </div>
//       <div>
//         <input
//           value={text}
//           onChange={(e) => {
//             setText(e.target.value);
//           }}
//         ></input>
//       </div>
//     </div>
//   );
// };

// export default LifeCycle;

import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");

    return () => {
      console.log("Unmount!");
    };
  }, []);

  return <div>Unmount tesing Component</div>;
};

const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default LifeCycle;
