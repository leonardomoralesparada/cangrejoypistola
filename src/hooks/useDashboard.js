import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import { searchJob, mainResolve } from '../utils';

const useDashboard = (props = {}) => {
    const { tasks = [] } = props;
    const navigate = useNavigate();
    
    const onTask = useCallback((job) => {
        const [ idMain, isResolve ] = mainResolve(tasks);

        if (!isResolve && idMain != job.id) {
            alert(`Debes finalizar la tarea #${idMain}`);
            return
        }

        if (job.requeridTask) {
            const requiredJob = searchJob(job.requeridTask, tasks);
            if (requiredJob && !requiredJob.isResolve) {
                alert(`Debes finalizar la tarea #${requiredJob.id}`);
                return
            }
        }

        navigate(`/resolve/${job.id}`);
    }, [tasks]);

    return {
        tasks,
        onTask,
    }
};

export default useDashboard;