// rsc, rsf
import StyleModule from "./StyleModule";
import StyledCom1 from "./StyledCom1";

const MakeCom1 = () => {
  return (
    // 리액트 컴포넌트는 전체를 감싸는 태그가 반드시 필요

    // :global을 붙이면 모듈에서 일반 클래스처럼 사용 가능
    <main className="container">
      {/* JSX 주석 */}
      <h2 className="bg">하위 컴포넌트</h2>
      <p>컴포넌트를 만들었습니다</p>
      <p>연결해 보아요</p>

      <StyleModule />
      <StyledCom1 />
    </main>
  );
};

export default MakeCom1;