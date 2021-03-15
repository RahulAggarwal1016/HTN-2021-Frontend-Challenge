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
  const [dataDefault, setDataDefault] = useState([]); // to hold all events
  const [data, setData] = useState([]); // to hold filtered events (from searchbar)

  useEffect(async () => {
    const result = await axios(
      'https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }'
    );

    // clean up data
    // the function RelatedEventsHelper is defined in helper.js
    const events = RelatedEventsHelper(result.data.data.events).sort((a, b) =>
      a.start_time < b.start_time ? -1 : 1
    );
    setDataDefault(events);
    setData(events);
  }, []);

  const updateInput = async (input) => {
    const lower_case_input = input.toLowerCase();
    const filtered = dataDefault.filter((event) => {
      // filter item based upon if the keyword exists in the event title or type
      return (
        event.name.toLowerCase().startsWith(lower_case_input) ||
        (input && event.event_type.startsWith(lower_case_input[0]))
      );
    });
    setInput(input); // update keyword
    setData(filtered);
  };

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Hack the North Events</h1>
      </Grid.Row>
      <Grid.Column>
        <SearchBar input={input} onChange={updateInput} />
      </Grid.Column>
      <Grid.Row>
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
