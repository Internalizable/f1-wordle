import React, { Component } from 'react';

const googleAdId = 'ca-pub-9408673282359954';

type Props = {
  classNames: string,
  slot: string,
  timeout: number,
}

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

class GoogleAd extends Component<Props> {
  googleInit =  null as any;

  componentDidMount() {

    const { timeout } = this.props;

    this.googleInit = setTimeout(() => {
      if (typeof window !== 'undefined')
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, timeout);

  }

  componentWillUnmount() {
    if (this.googleInit) clearTimeout(this.googleInit);
  }

  render() {
    const { classNames, slot } = this.props;
    return (
      <div className={classNames}>
        <ins
           className="adsbygoogle"
           style={{display: 'block'}}
           data-ad-client={googleAdId}
           data-ad-slot={slot}
           data-ad-format="auto"
           data-full-width-responsive="true"
        />
      </div>
    );
  }
}

export default GoogleAd;
