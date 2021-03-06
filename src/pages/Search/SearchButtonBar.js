import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

import styles from './styles.css'

const SearchButtonBar = ({ prev, next }) => {
  return (
    <div className={styles.buttonContainer}>
      <div className="pull-right">
        <ButtonToolbar>
          {prev ? (
            <Button
              bsSize="large"
              type="button"
              onClick={() => prev.cb()}
              disabled={prev.disabled}
            >
              <i className="fa fa-arrow-left" />
              {prev.label ? prev.label : ' Previous'}
            </Button>
          ) : (
            <span />
          )}

          {next ? (
            <Button
              bsSize="large"
              type="button"
              onClick={next.cb}
              disabled={next.disabled}
            >
              {next.label ? next.label : 'Next '}
              <i className="fa fa-arrow-right" />
            </Button>
          ) : (
            <span />
          )}
        </ButtonToolbar>
      </div>
    </div>
  )
}

export default SearchButtonBar
