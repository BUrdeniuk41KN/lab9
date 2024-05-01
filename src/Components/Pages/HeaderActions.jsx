export const AddComponent = (Component) => ({
    type: 'ADD_MORE',
    Component: Component
  });

export const SET_BRIGHTNESS = (brightness) => ({
  type: 'SET_BRIGHTNESS',
  brightness: brightness
});

export const SET_TRASITION_TIME = (trasition_time) => ({
  type: 'SET_TRASITION_TIME',
  trasition_time: trasition_time
});

export const SET_TIME_ATIMATION = (TIME) => ({
  type: 'SET_TIME',
  TIME: TIME
});

export const ENABLE_OPTIONS = () => ({
  type: 'ENABLE_OPTIONS_TRAFIC',

});
