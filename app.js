(function () {
  const yearNode = document.querySelector('[data-year]');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const eventNode = document.querySelector('[data-event-countdown]');
  if (!eventNode) {
    return;
  }

  const eventTime = new Date('2026-04-14T19:00:00-07:00');
  const now = new Date();
  const diff = eventTime.getTime() - now.getTime();

  if (Number.isNaN(eventTime.getTime())) {
    eventNode.textContent = 'Check the official game listing near tipoff.';
    return;
  }

  if (diff <= 0) {
    eventNode.textContent = 'The scheduled tipoff time has passed. Check live listings for updates.';
    return;
  }

  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(hours / 24);
  const remainderHours = hours % 24;
  eventNode.textContent = `${days}d ${remainderHours}h until scheduled tipoff`;
})();

