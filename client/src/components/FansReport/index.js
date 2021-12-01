import Card from "../Card";
import { ReportNumber, ReportLabel } from "./styled";

const FansReport = ({ count, label }) => {
  return (
    <Card>
      <ReportNumber>{count}</ReportNumber>
      <ReportLabel>{label}</ReportLabel>
    </Card>
  );
};

export default FansReport;
