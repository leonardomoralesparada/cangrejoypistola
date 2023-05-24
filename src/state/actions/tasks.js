import { createAction } from '@reduxjs/toolkit';
import types from '../types/tasks';

export const updateTask = createAction(types.UPDATE_TASK);

export default {
    updateTask,
};