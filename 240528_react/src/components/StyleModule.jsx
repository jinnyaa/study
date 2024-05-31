import styles from './StyleModule.module.css';

const StyleModule = () => {
  return (
    <article className={styles.wrapper}>
      <h2>스타일 모듈 적용</h2>
      <p className={`${styles.fontSize} ${styles.bg}`}>파일명.module.css(scss)</p>
      <p className={`fontWeight ${styles.fontSize}`}>h1 className='{'참조변수.클래스명'}'</p>
      <p className={[styles.fontSize, styles.bg].join(" ")}>동일한 이름이 있는 경우 충돌이 생기기 때문에 컴포넌트 단위로 적용되게 만들어 줌</p>
      <p>react, vue 등의 컴포넌트 기반에서 동작됨</p>
    </article>
  );
};

export default StyleModule;