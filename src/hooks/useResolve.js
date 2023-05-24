import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { searchJob, mainResolve } from '../utils';

const useResolve = (props = {}) => {
    const [ isVisible, setVisible ] = useState(false);
    const { updateTask = () => {}, tasks = [] } = props;
    const navigate = useNavigate();
    const { id = '' } = useParams();

    useEffect(() => {
        const [ idMain, isResolve ] = mainResolve(tasks);

        if (idMain != id) {
            if (!isResolve) {
                navigate('/');
                return;
            }
    
            const job = searchJob(id, tasks);
            if (!job) {
                navigate('/');
                return;
            }

            if (job.isResolve) {
                navigate('/');
                return;
            }

            const requiredJob = searchJob(job.requeridTask, tasks);
            if (requiredJob && !requiredJob.isResolve) {
                navigate('/');
                return;
            }

        } else {
            if (isResolve) {
                navigate('/');
                return;
            }
        }
            
        setVisible(true);
    }, [tasks, id]);
    
    const onResolve = () => {
        updateTask(id);
        setTimeout(() => navigate('/'), 100);
    };

    return {
        id,
        isVisible,
        onResolve,
    };
};

export default useResolve;