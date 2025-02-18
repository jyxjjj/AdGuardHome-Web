import { connect } from 'react-redux';
import {
    addFilter,
    editFilter,
    getFilteringStatus,
    handleRulesChange,
    refreshFilters,
    removeFilter,
    setRules,
    toggleFilteringModal,
    toggleFilterStatus,
} from '../actions/filtering';

import DnsAllowlist from '../components/Filters/DnsAllowlist';

const mapStateToProps = (state: any) => {
    const { filtering } = state;
    const props = { filtering };
    return props;
};

const mapDispatchToProps = {
    setRules,
    getFilteringStatus,
    addFilter,
    removeFilter,
    toggleFilterStatus,
    toggleFilteringModal,
    refreshFilters,
    handleRulesChange,
    editFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(DnsAllowlist);
