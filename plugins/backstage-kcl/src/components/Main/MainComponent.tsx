import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';

export const Main = () => (
  <Page themeId="main">
    <Header
      title="Welcome to Backstage KCL Plugin"
      subtitle="Use KCL UI to manage your configuration"
    >
      <HeaderLabel label="Owner" value="KCL Language Team" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Backstage KCL Plugin">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Configurations">
            <Typography variant="body1">
              You can use UI and editor to manage your KCL projects
            </Typography>
            <Button title="Create" />
          </InfoCard>
        </Grid>
      </Grid>
    </Content>
  </Page>
);
