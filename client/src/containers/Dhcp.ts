import { connect } from 'react-redux';
import {
    addStaticLease,
    findActiveDhcp,
    getDhcpInterfaces,
    getDhcpStatus,
    removeStaticLease,
    resetDhcp,
    setDhcpConfig,
    toggleDhcp,
    toggleLeaseModal,
} from '../actions';

import Dhcp from '../components/Settings/Dhcp';

const mapStateToProps = (state: any) => {
    const { dhcp } = state;
    const props = {
        dhcp,
    };
    return props;
};

const mapDispatchToProps = {
    toggleDhcp,
    getDhcpStatus,
    getDhcpInterfaces,
    setDhcpConfig,
    findActiveDhcp,
    toggleLeaseModal,
    addStaticLease,
    removeStaticLease,
    resetDhcp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dhcp);
