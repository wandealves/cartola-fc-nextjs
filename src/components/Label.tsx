import { Typography, TypographyProps } from "@mui/material";

export type LabelProps = TypographyProps;

export const Label = (props: LabelProps) => {
  return <Typography variant="h6" component="span" {...props} />;
};
