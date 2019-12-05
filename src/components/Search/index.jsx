import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import styles from "./Search.module.scss";
import { selectSearchValue, selectSearchLoading } from "../../store/selector";
import { changeSearch } from "../../store/actions";
import Loader from "../Loader";

class Search extends React.PureComponent {
  handleChange = event => {
    const { value } = event.target;
    const { dispatch } = this.props;
    dispatch(changeSearch(value));
  };

  get loader() {
    const { loading } = this.props;
    if (!loading) return null;
    return <Loader />;
  }

  render() {
    const { dispatch, loading, ...props } = this.props;

    return (
      <div className={styles.search}>
        <div className={styles.wrapper}>
          <input {...props} onChange={this.handleChange} />
          {this.loader}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  value: selectSearchValue,
  loading: selectSearchLoading
});

export default connect(mapStateToProps)(Search);
