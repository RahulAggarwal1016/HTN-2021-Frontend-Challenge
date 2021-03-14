/*
RelatedEventsHelper is a function that takes in a json array of events
for each event it maps over its array of related events and replaces each
related event's "id" number with its name
*/

export const RelatedEventsHelper = (events) => {
  const updated_events = events.map(({ related_events, ...rest }) => {
    const updated_related_events = related_events.map((id) => {
      // find id that matches
      const matching_event = events.find((x) => x.id == id);
      return matching_event.name;
    });

    return {
      ...rest,
      related_events: updated_related_events,
    };
  });
  return updated_events;
};
