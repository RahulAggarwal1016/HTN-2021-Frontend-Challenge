/*
RelatedEventsHelper is a function that takes in a json array of events
for each event it maps over its array of related events and replaces each
related event's "id" number with an object containing the corresponding events name, private_url, and public_url
*/

export const RelatedEventsHelper = (events) => {
  const updated_events = events.map(({ related_events, ...rest }) => {
    const updated_related_events = related_events.map((id) => {
      // find id that matches
      const matching_event = events.find((x) => x.id === id);
      return {
        name: matching_event.name,
        private_url: matching_event.private_url,
        public_url: matching_event.public_url,
      };
    });

    return {
      ...rest,
      related_events: updated_related_events,
    };
  });
  return updated_events;
};
