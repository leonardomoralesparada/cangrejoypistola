import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import tasksActions from '../../state/actions/tasks';
import Button from "../../components/commons/Button";
import useResolve from "../../hooks/useResolve";

const Resolve = (props) => (
    <Button 
        title={`Resolver la tarea #${props.id}`}
        onClick={props.onResolve}
    />
);

Resolve.defaultProps = {
    id: "",
    onResolve: () => {},
};

Resolve.propTypes = {
    id: PropTypes.string,
    onResolve: PropTypes.func,
};

const ResolveHoc = (props) => {
    const hook = useResolve(props);

    if (!hook.isVisible) {
        return null;
    }

    return <Resolve {...hook} />;
};

const mapState = (state) => state.tasks;

const mapDispatch = {
    updateTask: tasksActions.updateTask,
};

export default connect(mapState, mapDispatch)(ResolveHoc);