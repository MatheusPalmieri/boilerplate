import * as S from './style';

export function Main() {
  return (
    <S.Wrapper>
      <S.Logo src="../img/logo.svg" alt="Logo React Advanced" />

      <S.Title>React Advanced</S.Title>

      <S.Description>TypeScript, ReactJS and Styled Components</S.Description>

      <S.Illustration
        src="../img/hero-illustration.svg"
        alt="Software Engineer"
      />
    </S.Wrapper>
  );
}
