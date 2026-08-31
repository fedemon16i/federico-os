# EY Fabric — 5 to 10 minutes

Confidentiality: internal product. No proprietary screens. No exact KPIs.

1. Problem. People could browse a catalog. They stalled when a request asked for a required service that did not look required. Help was a two-line tooltip. That is where sessions ended.

2. What I owned. I framed the drop-off, chose what to instrument, ran research against the same path, and recommended the after: requirements on the card, a walkthrough, a helper that stays open, a publisher path that can attach that help before a human signs.

3. What we knew. Analytics showed the stall on the form. Interviews said the field looked optional. Scores after a failed attempt were poor. Session replay showed the same three users hitting the tooltip and leaving.

4. What I found. A tooltip is not a path. Publishers had no way to attach real help. Consumers had no way to see requirements before Get started.

5. Options. Strip the form vs hide complexity vs keep the architecture and disclose in order. We kept the architecture.

6. Decision. Progressive disclosure: card → requirements → walkthrough → form with a live helper. Publisher gets a field helper and an AI pass before a human.

7. With PM and engineering. Event names on the path. Pendo for replay. The after is the beats labeled Requester and Publisher.

8. Shipped. Analyze is the before. Requester and Publisher are the proposal.

9. After. Exact conversion cannot be published. Direction: fewer stalls on the required field, help used instead of abandoned.

10. Today I would instrument the helper itself as an event, not only the field.
