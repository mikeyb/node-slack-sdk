var events = require('./lib/clients/events');
var retryPolicies = require('./lib/clients/retry-policies');

module.exports = {
  WebClient: require('./lib/clients/web/client'),
  RtmClient: require('./lib/clients/rtm/client'),
  IncomingWebhook: require('./lib/clients/incoming-webhook/client'),
  LegacyRtmClient: require('./lib/clients/default/legacy-rtm'),
  MemoryDataStore: require('./lib/data-store/memory-data-store'),
  CLIENT_EVENTS: {
    WEB: events.CLIENT_EVENTS.WEB,
    RTM: events.CLIENT_EVENTS.RTM
  },
  RTM_EVENTS: events.RTM_EVENTS,
  RTM_MESSAGE_SUBTYPES: events.RTM_MESSAGE_SUBTYPES,
  RETRY_POLICIES: retryPolicies
};
