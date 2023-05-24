export const searchJob = (id = '', tasks = []) => {
    for (var i = 0; i < tasks.length; i++) {
        var job = tasks[i].jobs.find(function(job) {
          return job.id == id;
        });
        
        if (job) {
          return job;
        }
      }

      return null;
};

export const mainResolve = (tasks) => {
    let idMain = 0;

    const isResolve = tasks.some(task => task.jobs.some(job => {
        if (job.main) {
            idMain = job.id;
            return job.main && job.isResolve;
        }

        return false;
    }));

    return [ idMain, isResolve ];
};