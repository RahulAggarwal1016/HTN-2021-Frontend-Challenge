import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';
import { useAuth0 } from '@auth0/auth0-react';

import EventCard from './EventCard';
import { RelatedEventsHelper } from '../helpers';
import SearchBar from './SearchBar';

const Events = () => {
  const { user } = useAuth0();
  const [input, setInput] = useState('');
  const [dataDefault, setDataDefault] = useState();
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(
      'https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }'
    );
    // clean up data
    const events = RelatedEventsHelper(result.data.data.events).sort((a, b) =>
      a.start_time < b.start_time ? -1 : 1
    );
    setDataDefault(events);
    setData(events);
  }, []);

  const updateInput = async (input) => {
    const filtered = dataDefault.filter((event) => {
      return event.name.toLowerCase().startsWith(input.toLowerCase());
    });
    setInput(input);
    setData(filtered);
  };

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Hack the North Events</h1>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <SearchBar input={input} onChange={updateInput} />
        </Grid.Column>
        {data &&
          data.map((event) => {
            if (user || event.permission == 'public') {
              return (
                <Grid.Column key={event.id} style={{ marginBottom: 20 }}>
                  <EventCard event={event} />
                </Grid.Column>
              );
            }
          })}
      </Grid.Row>
    </Grid>
  );
};

export default Events;
