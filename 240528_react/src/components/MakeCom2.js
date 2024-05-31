// import "./makeCom2.css";
import myStyle from './MakeCom2.module.css';

const MakeCom2 = () => {
  return (
    <>
    {/* 
      JSX 안에서의 자바스크립트 작성은 {} 안에서 작성
      스타일 작성시 JS 방식
    */}
      <h3 style={{ borderTop : "1px solid #000", padding: 30}}>세번째 컴포넌트</h3>
      <p className={myStyle.bg}>컴포넌트를 연결해 보겠음</p>
    </>
  );
};

export default MakeCom2;