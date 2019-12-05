import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import memoize from "lodash/memoize";

import styles from "./Results.module.scss";
import Link from "../Link";
import { selectSearchResults } from "../../store/selector";
import { lookupRequest } from "../../store/actions";

class Results extends React.PureComponent {
  handleClickResult = memoize(result => event => {
    const { dispatch } = this.props;
    const { match_id } = result;
    match_id && dispatch(lookupRequest(match_id));
  });

  get results() {
    const { results } = this.props;
    return results.map(result => (
      <div key={result.match_id}>
        <Link onClick={this.handleClickResult(result)}>{result.title}</Link>
      </div>
    ));
  }

  render() {
    const { results } = this.props;
    if (results.length === 0) return null;

    return (
      <div className={styles.results}>
        <div className={styles.title}>Results:</div>
        {this.results}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  results: selectSearchResults
});

export default connect(mapStateToProps)(Results);
