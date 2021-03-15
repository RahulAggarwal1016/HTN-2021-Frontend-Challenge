import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import workshopIcon from '../icons/workshop.jpeg';
import conferenceIcon from '../icons/conference.jpeg';
import activityIcon from '../icons/activity.jpeg';

const EventCard = ({
  event: {
    event_type,
    start_time,
    end_time,
    name,
    description,
    speakers,
    related_events,
    public_url,
    private_url,
  },
}) => {
  // date-time options
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
  };
  return (
    <Card fluid style={{ height: '100%' }}>
      <Card.Content>
        <Image
          floated="right"
          size="tiny"
          src={
            event_type == 'workshop'
              ? workshopIcon
              : event_type == 'activity'
              ? activityIcon
              : conferenceIcon
          }
          circular
        />
        <Card.Header>{name}</Card.Header>
        <br />
        <Card.Meta>
          {new Date(start_time).toLocaleString('en', options)} to{' '}
          {new Date(end_time).toLocaleString('en', options)}
        </Card.Meta>
        {/* Link to view the event page */}
        {private_url && (
          <>
            <br />
            <Card.Description>
              <p
                onClick={() => (window.location.href = private_url)}
                style={{ textDecorationLine: 'underline', cursor: 'pointer' }}
              >
                Learn More
              </p>
            </Card.Description>
          </>
        )}
      </Card.Content>
      {speakers.length != 0 && (
        <Card.Content>
          <Card.Description
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <strong style={{ marginRight: '5px' }}>
              Speaker{speakers.length == '1' ? '' : 's'}:
            </strong>
            {speakers.map((speaker) => (
              <>
                {speaker.name}
                <Image
                  floated="right"
                  size="mini"
                  src={speaker.profile_pic}
                  circular
                  style={{ marginLeft: 'auto' }}
                />
              </>
            ))}
          </Card.Description>
        </Card.Content>
      )}
      <Card.Content>
        <Card.Description>{description}</Card.Description>
        {public_url && (
          <>
            <br />
            <Button
              onClick={() => (window.location.href = public_url)}
              color="red"
            >
              Watch on Youtube
            </Button>
          </>
        )}
      </Card.Content>
      {/* displaying any related events if they exist */}
      {related_events.length != 0 && (
        <Card.Content style={{ height: '100%' }}>
          <Card.Description>
            <strong>Related Events</strong>
          </Card.Description>
          <br />
          {related_events.map(({ name, private_url, public_url }) => (
            <Card.Description
              style={{ cursor: 'pointer' }}
              onClick={() =>
                (window.location.href = public_url ? public_url : private_url)
              }
            >
              - {name}
            </Card.Description>
          ))}
        </Card.Content>
      )}
    </Card>
  );
};

export default EventCard;
