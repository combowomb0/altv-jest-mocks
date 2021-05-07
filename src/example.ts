import alt from 'alt-server';

export const someFunction = () => {
  if (alt.isInDebug()) {
    return alt.emit('some event', true);
  }

  alt.setMeta('key', false);
};
