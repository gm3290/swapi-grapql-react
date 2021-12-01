import { PageTitle, PageContent, LayoutContainer } from "./styled";

const AppLayout = ({ title, children }) => {
  return (
    <LayoutContainer>
      <PageTitle>{title}</PageTitle>
      <PageContent>{children}</PageContent>
    </LayoutContainer>
  );
};

export default AppLayout;
