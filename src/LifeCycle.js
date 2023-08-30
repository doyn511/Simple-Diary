import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");
    // Mount를 제어하는 useEffect의 콜백함수에 return값으로
    // 함수를 부여하면 이 함수는 unMount 될 때 수행됨
    return () => {
      console.log("Unmount!");
    };
  }, []);
  return <div>Unmount Testing Componenet</div>;
};

const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {/* isVisible이 true일 때만 UnmountTest 컴포넌트 렌더링 가능 */}
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default LifeCycle;
