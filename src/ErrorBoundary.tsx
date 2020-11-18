import * as React from 'react'
import Rollbar from 'rollbar'

export class RollbarBoundary extends React.Component {
  componentDidCatch(err: Error) {
    Rollbar.error(err)
  }
}
