import { PropsWithChildren } from "react";
import { Container } from "@mui/material";

export const Page = (props: PropsWithChildren) => {
  return (
    <Container sx={{ pt: theme => theme.spacing(3) }}>
      {props.children}
    </Container>
  );
};
