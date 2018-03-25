const Styles = {
  Tilt: {
    OuterContainer: {
      height: 400,
      width: 400,
      backgroundColor: "orange",
      margin: "0 auto",
      marginTop: 100
    },
    TextContainer: {
      textAlign: "center",
      position: "relative",
      top: "40%",
      transform: "transformY(-50%)",
      color: "white"
    }
  },

  LandingPageImage: {

  },

  Fade: {
    defaultStyle: {
      transition: `opacity 1000ms ease-in-out`,
      opacity: 0,
      display: 'inline-block',
      fontSize: '2em',
      fontWeight: 400,
      color: '#5CD7FD'
    },
    experiment: (increment) => {
      return {
        entering: { opacity: 0 },
        entered: { opacity: increment }
      }
    }
  },

  BlandFade: {
    defaultStyle: {
      transition: `all 500ms ease-in-out`,
      opacity: 0
    },
    experiment: (increment) => {
      return {
        entering: { opacity: 0},
        entered: { opacity: increment}
      }
    }
  }

}

export default Styles;
