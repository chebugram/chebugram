export const selectChannels = (state) => state.channels;

export const selectChannel = (state, options) => selectChannels(state)[options.id];
