import { Wrappter } from "../css/footer.styles";
export const Footer = () => {
  return (
    <Wrappter>
      <div className="footer-top">
        <ul>
          <li>이용약관</li>
          <li>전자금융거래 이용약관</li>
          <li>개인정보처리방침</li>
          <li>청소년보호정책</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>해당 페이지는 공부 목적으로 제작되었습니다</p>
      </div>
    </Wrappter>
  );
};
