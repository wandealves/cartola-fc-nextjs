import GroupsIcon from "@mui/icons-material/Groups";
import { Button, Grid } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";

import { Page } from "../components/Page";
import { Section } from "../components/Section";
import { TeamLogo } from "../components/TeamLogo";

const HomePage: NextPage = () => {
  return (
    <Page>
      <Grid
        container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Grid item>
          <TeamLogo />
          <Section>
            aaaaaaaaa
          </Section>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            href="/players"
            variant="contained"
            startIcon={<GroupsIcon />}
          >
            Escalar Jogadores
          </Button>
        </Grid>
      </Grid>
    </Page>
  );
};

export default HomePage;
