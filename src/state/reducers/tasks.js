import { createReducer, current } from '@reduxjs/toolkit';
import actions from '../actions/tasks';

const initialState = { 
    tasks: [
        {
            id: 1,
            jobs: [
                {
                    id: 1,
                    main: true,
                    isResolve: false,
                },
            ],
        },
        {
            id: 2,
            jobs: [
                {
                    id: 2,
                    isResolve: false,
                },
            ],
        },
        {
            id: 3,
            jobs: [
                {
                    id: 3.1,
                    isResolve: false,
                },
                {
                    id: 3.2,
                    requeridTask: 3.1,
                    isResolve: false,
                },
            ],
        },
        {
            id: 4,
            jobs: [
                {
                    id: 4.1,
                    isResolve: false,
                    requeridTask: 3.2,
                },
                {
                    id: 4.2,
                    isResolve: false,
                },
                {
                    id: 4.3,
                    isResolve: false,
                },
            ],
        },
        {
            id: 5,
            jobs: [
                {
                    id: 5.1,
                    isResolve: false,
                },
                {
                    id: 5.2,
                    isResolve: false,
                    requeridTask: 5.1,
                },
            ],
        },
        {
            id: 6,
            jobs: [
                {
                    id: 6,
                    isResolve: false,
                },
            ],
        },
    ],
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.updateTask, (state, action) => {
            console.log(current(state));
            
            state.tasks = current(state).tasks.map((task) => {
                const newJobs = task.jobs.map((itemJob) => {
                    if (itemJob.id == action.payload) {
                        return {...itemJob, isResolve: true};
                    } else {
                        return itemJob;
                    }
                });

                return {...task, jobs: newJobs};
            });
        })
});

export default reducer;
