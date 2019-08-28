import React from 'react';
import { Heading, List, ListItem } from 'spectacle';

export default function HowTo() {
  return (
    <>
      <Heading size={2}>¿React está solo?</Heading>
      <List>
        <ListItem>React Router DOM</ListItem>
        <ListItem>React i18next</ListItem>
        <ListItem>Axios | Superagent</ListItem>
        <ListItem>Moment | Luxon</ListItem>
        <ListItem>Redux | MobX</ListItem>
        <ListItem>Formik | Yup</ListItem>
        <ListItem>...otros...</ListItem>
      </List>
    </>
  );
}
