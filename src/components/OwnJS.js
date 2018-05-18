state = {
  isActive: false,
}

toggleNav = () => {
  this.setState(prevState => {
    return {
      isActive: !prevState.isActive
    };
  })
}
