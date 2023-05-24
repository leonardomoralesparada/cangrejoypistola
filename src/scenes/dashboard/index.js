import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';

import useDashboard from '../../hooks/useDashboard';
import Card from "../../components/commons/Card";
import Button from "../../components/commons/Button";

const Dashboard = (props) => (
    <div className="container-cards">
        {
            props.tasks.map((task) => (
                <Card key={task.id} title={`tarea #${task.id}`}>
                    {
                        task.jobs.map((job) => (
                            <>
                                {!job.isResolve && (
                                        <div
                                            key={job.id} 
                                            className="container-buttons"
                                        >
                                            <Button 
                                                title={`hacer tarea #${job.id}`}
                                                onClick={() => props.onTask(job)}
                                        />
                                </div>
                                )}
                            </>
                        ))
                    }
                </Card>
            ))
        }
    </div>
);

Dashboard.defaultProps = {
    tasks: [],
    onTask: () => {},
};

Dashboard.propTypes = {
    tasks: PropTypes.array,
    onTask: PropTypes.func,
};

const DashboardHoc = (props) => {
    const hook = useDashboard(props);
    return <Dashboard {...hook} />;
};

const mapState = (state) => state.tasks;

export default connect(mapState)(DashboardHoc);