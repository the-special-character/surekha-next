"use client";

import React, { PureComponent } from "react";

class AuthError extends PureComponent {
  constructor(props: errorProps) {
    super(props);
  }

  static getDerivedStateFromProps(props, state) {}

  componentDidMount() {}

  render(): React.ReactNode {
    return <p>Error Message</p>;
  }
}

export default AuthError;
