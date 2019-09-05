# Web Animation

Animations are a huge part of making compelling web applications and sites.

## How to implement

- CSS Transition & CSS Animation
- Web Animation API
- requestAnimationFrame

### CSS Transition & CSS Animation

#### CSS Transition

Create gradual transitions between the values of specific CSS properties.

- [Demo Link](./demo/index.html)

- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

##### Concepts

CSS transitions let you decide

- which properties to animate
  by listing them explicitly

- when the animation will start
  by setting a delay (seconds)

- how long the transition will last
  by setting a duration

- how the transition will run
  by defining a timing function

###### Choose properties to animate

Specifies the name or names of the CSS properties to which transitions should be applied.

- Using `transition-property`

```css
.swa-flight {
  transition-property: margin-left, margin-bottom;
}
```

- Using `transition` as shorthand

```css
.swa-flight {
  transition: margin-left, margin-bottom;
}
```

> if just declare the property, changes to the properties occur as usual.

[List of properties can be animated](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

Using CSS transform property
The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
[MDN transform doc](https://www.quackit.com/css/functions/css_matrix_function.cfm)

###### Set the animation duration

Specifies the duration over which transitions should occur.

- Using `transition-duration`

```css
.swa-flight {
  transition-property: mrigin-left, margin-bottom;
  transition-duration: 8s, 4s;
}
```

- Using `transition` as shorthand

```css
.swa-flight {
  transition: width 8s, height 4s;
}
```

###### Set up a timing-function

Specifies a function to define how intermediate values for properties are computed.

- Using `transition-timing-function`

```css
.swa-flight {
  transition-property: margin-left, margin-bottom;
  transition-duration: 8s, 4s;
  transition-timing-function: cubic-bezier(0.51, 0.18, 0.79, 0.53), cubic-bezier(0.7, 0.21, 1, 1);
}
```

- Using `transition` as shorthand

```css
.swa-flight {
  transition: margin-left 8s cubic-bezier(0.51, 0.18, 0.79, 0.53), margin-bottom
      4s cubic-bezier(0.7, 0.21, 1, 1);
}
```

[Easing function list](https://easings.net/)

[cubic-bezier](http://cubic-bezier.com)

###### Set a deply

Defines how long to wait between the time a property is changed and the transition actually begins.

- Using `transition-delay`

```css
.swa-flight {
  transition-property: margin-left, margin-bottom;
  transition-duration: 8s, 4s;
  transition-timing-function: cubic-bezier(0.51, 0.18, 0.79, 0.53), cubic-bezier(0.7, 0.21, 1, 1);
  transition-delay: 0s, 4s;
}
```

- Using `transition` as shorthand

```css
.swa-flight {
  transition: margin-left 8s cubic-bezier(0.51, 0.18, 0.79, 0.53), margin-bottom
      4s cubic-bezier(0.7, 0.21, 1, 1) 4s;
}
```

#### CSS Animation

Animations consist of two components, a style describing the CSS animation and a set of keyframes that indicate the start and end states of the animation’s style, as well as possible intermediate waypoints.

###### Describing the animation

Below properties can be shorted as `animation` property.

- `animation-name`
- `animation-duration`
- `animation-timing-function`
- `animation-delay`
- `animation-iteration-count`
- `animation-direction`
- `animation-fill-mode`
- `animation-play-state`

###### Describing the animation's style

The `@keyframes` CSS at-rule controls the intermediate steps in a CSS animation sequence

[MDN Doc](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

###### events

`animationiteration`, `animationend`, `animationstart`

[MDN Doc](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

### Web Animation API

The Web Animations API lets us construct animations and control their playback with JavaScript.

#### Concepts

- Timing
- Animation
- Animation Effect

[MDN Doc](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Web_Animations_API_Concepts)

##### Timing options

Including duratiion, fill ... etc

##### Animation Effect

It's a bundle of information including at the bare minimum a set of keys and the duration they need to be animated over.

##### Animation

Use the Animation Object’s methods to play, pause, seek, and control the animation’s playback direction and speed.

```javascript
const drinking = document
  .getElementById('liquid')
  .animate([{ height: '100%' }, { height: '0' }], {
    fill: 'forwards',
    duration: 2000
  });
drinking.pause();
```

### requestAnimationFrame

tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.

#### Syntax

`window.requestAnimationFrame(callback);`
